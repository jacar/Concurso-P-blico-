import { useState, useEffect } from 'react';

// Interfaz para el almacenamiento seguro
export interface SafeStorage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

// Implementación de almacenamiento en memoria
class InMemoryStorage implements SafeStorage {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }
}

// Extender la interfaz Window para incluir memoryStorage
declare global {
  interface Window {
    memoryStorage?: InMemoryStorage;
  }
}

// Crear una instancia global de almacenamiento en memoria
const getMemoryStorage = (): InMemoryStorage => {
  if (typeof window !== 'undefined') {
    if (!window.memoryStorage) {
      window.memoryStorage = new InMemoryStorage();
    }
    return window.memoryStorage;
  }
  return new InMemoryStorage();
};

// Función para crear un almacenamiento seguro
export const createSafeStorage = (): SafeStorage => {
  // Usar almacenamiento en memoria por defecto
  const memoryStorage = getMemoryStorage();
  
  // Si estamos en el servidor, usar solo almacenamiento en memoria
  if (typeof window === 'undefined') {
    return memoryStorage;
  }
  
  // Verificar si localStorage está disponible
  const isLocalStorageAvailable = (() => {
    try {
      const testKey = '__test__' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem(testKey, testKey);
      const isAvailable = localStorage.getItem(testKey) === testKey;
      localStorage.removeItem(testKey);
      return isAvailable;
    } catch (e) {
      console.warn('localStorage no está disponible, usando almacenamiento en memoria');
      return false;
    }
  })();
  
  // Si localStorage está disponible, usarlo con manejo de errores
  if (isLocalStorageAvailable) {
    return {
      getItem: (key: string) => {
        try {
          return localStorage.getItem(key);
        } catch (e) {
          console.warn(`Error al leer la clave '${key}' de localStorage:`, e);
          return memoryStorage.getItem(key);
        }
      },
      setItem: (key: string, value: string) => {
        try {
          localStorage.setItem(key, value);
        } catch (e) {
          console.warn(`Error al guardar la clave '${key}' en localStorage:`, e);
          memoryStorage.setItem(key, value);
        }
      },
      removeItem: (key: string) => {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          console.warn(`Error al eliminar la clave '${key}' de localStorage:`, e);
          memoryStorage.removeItem(key);
        }
      }
    };
  }
  
  // Si llegamos aquí, localStorage no está disponible
  console.log('Usando almacenamiento en memoria (localStorage no disponible)');
  return memoryStorage;
};

// Crear una instancia de almacenamiento seguro
const safeStorage = createSafeStorage();

// Hook personalizado para usar el almacenamiento seguro
export const useSafeStorage = (key: string, initialValue: string | null = null) => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const item = safeStorage.getItem(key);
      // Si no hay valor guardado, devolver el valor inicial
      if (item === null || item === 'undefined') {
        return initialValue;
      }
      return item;
    } catch (error) {
      console.warn(`Error al leer la clave '${key}' del almacenamiento:`, error);
      return initialValue;
    }
  });

  const setValue = (value: string | ((val: string | null) => string | null)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (valueToStore === null) {
        safeStorage.removeItem(key);
      } else {
        safeStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.warn(`Error al establecer la clave "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};
