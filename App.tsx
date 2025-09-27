import React, { useState, useCallback, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import TestScreen from './components/TestScreen';
import ResultsScreen from './components/ResultsScreen';
import SettingsScreen from './components/SettingsScreen';
import type { View, Result } from './types';

type Theme = 'light' | 'dark';
const MAX_HISTORY_LENGTH = 10;

// Helper to determine the initial theme. This runs *before* the first render,
// preventing the theme toggle icon from flickering. The inline script in index.html
// handles the initial class on the <html> tag to prevent page content flicker.
const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    // If no theme is stored, check the OS preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};


const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [lastResult, setLastResult] = useState<Result | null>(null);
  const [resultsHistory, setResultsHistory] = useState<Result[]>([]);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Cargar el historial desde localStorage al iniciar la app
    try {
      const savedHistory = localStorage.getItem('resultsHistory');
      if (savedHistory) {
        setResultsHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Error loading results history from localStorage", error);
    }
  }, []);

  // This effect synchronizes the DOM and localStorage with the React state for theme.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  const handleNavigate = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const handleTestComplete = useCallback((result: Omit<Result, 'date'>) => {
    const newResult: Result = {
      ...result,
      date: new Date().toISOString(),
    };
    
    setLastResult(newResult);
    
    setResultsHistory(prevHistory => {
      const updatedHistory = [newResult, ...prevHistory].slice(0, MAX_HISTORY_LENGTH);
      try {
        localStorage.setItem('resultsHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error("Error saving results history to localStorage", error);
      }
      return updatedHistory;
    });

    setCurrentView('results');
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomeScreen onStartTest={() => setCurrentView('test')} />;
      case 'test':
        return <TestScreen onTestComplete={handleTestComplete} />;
      case 'results':
        return <ResultsScreen result={lastResult} history={resultsHistory} onTryAgain={() => setCurrentView('test')} />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen onStartTest={() => setCurrentView('test')} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200">
      <Header currentView={currentView} onNavigate={handleNavigate} theme={theme} onToggleTheme={toggleTheme} />
      <main className="pb-24 md:pb-12 px-4 pt-8 max-w-4xl mx-auto">
        {renderContent()}
      </main>
      <BottomNav currentView={currentView} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;