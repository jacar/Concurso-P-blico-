import React, { useState, useCallback, useEffect, useMemo } from 'react';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import TestScreen from './components/TestScreen';
import ResultsScreen from './components/ResultsScreen';
import SettingsScreen from './components/SettingsScreen';
import type { View, Result } from './types';
import { createSafeStorage } from './src/hooks/useSafeStorage';

// Import Inter font from Google Fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

type Theme = 'light' | 'dark';
const MAX_HISTORY_LENGTH = 10;
const STORAGE_KEYS = {
  THEME: 'theme',
  RESULTS: 'resultsHistory'
} as const;

// Crear una instancia de almacenamiento seguro
const safeStorage = createSafeStorage();

// Función para determinar el tema inicial
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    // Intentar obtener el tema guardado
    const savedTheme = safeStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    
    // Si no hay tema guardado, usar la preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  } catch (e) {
    console.warn('No se pudo determinar la preferencia de color:', e);
    return 'light';
  }
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [resultsHistory, setResultsHistory] = useState<Result[]>(() => {
    try {
      const savedResults = safeStorage.getItem(STORAGE_KEYS.RESULTS);
      return savedResults ? JSON.parse(savedResults) : [];
    } catch (e) {
      console.warn('No se pudo cargar el historial:', e);
      return [];
    }
  });
  
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lastResult, setLastResult] = useState<Result | null>(null);

  // Inicializar el tema al cargar el componente
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Guardar la preferencia del tema
    try {
      safeStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (e) {
      console.warn('No se pudo guardar la preferencia del tema:', e);
    }
  }, [theme]);

  // Función para alternar entre temas
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  // Función para navegar entre vistas
  const handleNavigate = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  // Manejar la finalización de una prueba
  const handleTestComplete = useCallback((result: Omit<Result, 'date'>) => {
    const newResult: Result = {
      ...result,
      date: new Date().toISOString(),
    };
    
    setLastResult(newResult);
    
    setResultsHistory(prevHistory => {
      const updatedHistory = [newResult, ...prevHistory].slice(0, MAX_HISTORY_LENGTH);
      
      // Guardar el historial de manera segura
      try {
        safeStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(updatedHistory));
      } catch (e) {
        console.warn('No se pudo guardar el historial:', e);
      }
      
      return updatedHistory;
    });

    setCurrentView('results');
  }, []);

  // Renderizar el contenido según la vista actual
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomeScreen onStartTest={() => setCurrentView('test')} />;
      case 'test':
        return <TestScreen onTestComplete={handleTestComplete} />;
      case 'results':
        return (
          <ResultsScreen 
            result={lastResult} 
            history={resultsHistory} 
            onTryAgain={() => setCurrentView('test')} 
          />
        );
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen onStartTest={() => setCurrentView('test')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <Header 
        currentView={currentView}
        onNavigate={handleNavigate}
        onToggleTheme={toggleTheme} 
        theme={theme} 
      />
      <main className="flex-1 p-4 md:p-6 max-w-4xl mx-auto w-full">
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
      <Footer />
      <BottomNav currentView={currentView} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;