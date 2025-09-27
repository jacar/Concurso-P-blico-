// storage.ts - Utilidad para manejar el almacenamiento de manera segura

type StorageType = 'local' | 'session';

class SafeStorage {
  private storage: Storage | null = null;
  private inMemoryStore: Record<string, string> = {};
  private useInMemory = false;

  constructor(type: StorageType = 'local') {
    try {
      // Verificar si estamos en un entorno de navegador
      if (typeof window === 'undefined') {
        this.useInMemory = true;
        return;
      }

      // Intentar acceder al almacenamiento
      this.storage = type === 'local' ? window.localStorage : window.sessionStorage;
      
      // Probar el almacenamiento
      const testKey = '__test__';
      this.storage.setItem(testKey, testKey);
      if (this.storage.getItem(testKey) !== testKey) {
        throw new Error('Storage test failed');
      }
      this.storage.removeItem(testKey);
    } catch (e) {
      console.warn(`${type}Storage no está disponible, usando almacenamiento en memoria`, e);
      this.storage = null;
      this.useInMemory = true;
    }
  }

  getItem(key: string): string | null {
    try {
      return this.useInMemory 
        ? this.inMemoryStore[key] || null 
        : this.storage?.getItem(key) || null;
    } catch (e) {
      console.warn(`Error al leer ${key} del almacenamiento:`, e);
      return this.inMemoryStore[key] || null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      if (this.useInMemory) {
        this.inMemoryStore[key] = value;
      } else {
        this.storage?.setItem(key, value);
      }
    } catch (e) {
      console.warn(`Error al guardar en el almacenamiento:`, e);
      this.inMemoryStore[key] = value;
      this.useInMemory = true;
    }
  }

  removeItem(key: string): void {
    try {
      if (this.useInMemory) {
        delete this.inMemoryStore[key];
      } else {
        this.storage?.removeItem(key);
      }
    } catch (e) {
      console.warn(`Error al eliminar del almacenamiento:`, e);
      delete this.inMemoryStore[key];
    }
  }
}

// Exportar una instancia de SafeStorage
export const safeLocalStorage = new SafeStorage('local');
// Opcional: también puedes exportar sessionStorage si lo necesitas
export const safeSessionStorage = new SafeStorage('session');
