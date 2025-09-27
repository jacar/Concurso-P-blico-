import React, { useState, useCallback, useEffect, useMemo } from 'react';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeScreen from '@/components/HomeScreen';
import TestScreen from '@/components/TestScreen';
import ResultsScreen from '@/components/ResultsScreen';
import SettingsScreen from '@/components/SettingsScreen';
import type { View, Result } from '@/types';
import { createSafeStorage } from '@/hooks/useSafeStorage';

// Import Inter font from Google Fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const MAX_HISTORY_LENGTH = 10;
const STORAGE_KEYS = {
  THEME: 'theme',
  RESULTS: 'resultsHistory'
} as const;

// Crear una instancia de almacenamiento seguro
const safeStorage = createSafeStorage();

// Función para cargar el historial de resultados
type ResultsHistory = Result[];
const loadResultsHistory = (): ResultsHistory => {
  try {
    const savedHistory = safeStorage.getItem(STORAGE_KEYS.RESULTS);
    if (savedHistory) {
      return JSON.parse(savedHistory);
    }
  } catch (e) {
    console.warn('Error al cargar el historial de resultados:', e);
  }
  return [];
};

// Función para guardar el historial de resultados
const saveResultsHistory = (history: ResultsHistory): void => {
  try {
    // Limitar el historial a un número máximo de entradas
    const limitedHistory = history.slice(0, MAX_HISTORY_LENGTH);
    safeStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(limitedHistory));
  } catch (e) {
    console.warn('Error al guardar el historial de resultados:', e);
  }
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [resultsHistory, setResultsHistory] = useState<Result[]>(loadResultsHistory);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lastResult, setLastResult] = useState<Result | null>(null);
  
  // Cargar el tema al montar el componente
  useEffect(() => {
    try {
      const savedTheme = safeStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {
      console.warn('Error al cargar el tema:', e);
    }
  }, []);

  // Guardar el historial cuando cambie
  useEffect(() => {
    saveResultsHistory(resultsHistory);
  }, [resultsHistory]);

  // Manejar el cambio de tema
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      safeStorage.setItem(STORAGE_KEYS.THEME, newTheme);
      document.documentElement.classList.remove(prevTheme);
      document.documentElement.classList.add(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  }, []);

  // Manejar el guardado de resultados
  const handleSaveResult = useCallback((result: Result) => {
    setLastResult(result);
    setResultsHistory(prev => [result, ...prev]);
    setCurrentView('results');
  }, []);

  // Renderizar la pantalla actual
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeScreen 
            onStartTest={() => setCurrentView('test')}
            onViewResults={() => setCurrentView('results')}
            resultsHistory={resultsHistory}
          />
        );
      case 'test':
        return (
          <TestScreen 
            onComplete={handleSaveResult}
            onBack={() => setCurrentView('home')}
          />
        );
      case 'results':
        return (
          <ResultsScreen 
            result={lastResult}
            onNewTest={() => setCurrentView('test')}
            onBack={() => setCurrentView('home')}
          />
        );
      case 'settings':
        return (
          <SettingsScreen 
            theme={theme}
            onToggleTheme={toggleTheme}
            onBack={() => setCurrentView('home')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        currentView={currentView}
        onNavigate={setCurrentView}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
      
      <main className="flex-grow p-4 md:p-6">
        <div className="animate-fade-in">
          {renderCurrentView()}
        </div>
      </main>
      
      <BottomNav 
        currentView={currentView}
        onNavigate={setCurrentView}
        showSettings={true}
      />
      
      <Footer />
    </div>
  );
};

export default App;