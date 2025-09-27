import { useEffect, useState, useCallback } from 'react';
import { createSafeStorage } from './useSafeStorage';

type Theme = 'light' | 'dark';

// Crear una instancia de almacenamiento seguro
const storage = createSafeStorage();

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Función para obtener el tema inicial
  const getInitialTheme = useCallback((): Theme => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    
    try {
      // Verificar si hay un tema guardado
      const savedTheme = storage.getItem('theme') as Theme | null;
      if (savedTheme) {
        return savedTheme;
      }
      
      // Si no hay tema guardado, usar la preferencia del sistema
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      console.warn('Error al obtener el tema:', e);
    }
    
    // Tema por defecto
    return 'light';
  }, []);

  // Verificar el tema guardado al montar el componente
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setIsMounted(true);
    
    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      storage.setItem('theme', newTheme);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [getInitialTheme]);

  // Cambiar entre temas
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      storage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme, isMounted };
}
