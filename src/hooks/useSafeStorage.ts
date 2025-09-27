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

// Función para crear un almacenamiento seguro
export const createSafeStorage = (): SafeStorage => {
  // Si estamos en el servidor, usar almacenamiento en memoria
  if (typeof window === 'undefined') {
    return new InMemoryStorage();
  }

  // Intentar usar localStorage
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    const isLocalStorageAvailable = localStorage.getItem(testKey) === testKey;
    localStorage.removeItem(testKey);

    if (isLocalStorageAvailable) {
      return {
        getItem: (key: string) => {
          try {
            return localStorage.getItem(key);
          } catch (e) {
            console.warn('Error al leer de localStorage:', e);
            return null;
          }
        },
        setItem: (key: string, value: string) => {
          try {
            localStorage.setItem(key, value);
          } catch (e) {
            console.warn('Error al escribir en localStorage:', e);
          }
        },
        removeItem: (key: string) => {
          try {
            localStorage.removeItem(key);
          } catch (e) {
            console.warn('Error al eliminar de localStorage:', e);
          }
        },
      };
    }
  } catch (e) {
    console.warn('localStorage no está disponible, usando almacenamiento en memoria');
  }

  // Si no se puede usar localStorage, usar almacenamiento en memoria
  return new InMemoryStorage();
};

// Hook personalizado para usar el almacenamiento seguro
export const useSafeStorage = (key: string, initialValue: string | null = null) => {
  const [storage] = useState<SafeStorage>(createSafeStorage);
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const item = storage.getItem(key);
      return item !== null ? item : initialValue;
    } catch (error) {
      console.warn(`Error al leer la clave "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: string | ((val: string | null) => string | null)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (valueToStore === null) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.warn(`Error al establecer la clave "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};
