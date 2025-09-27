import React from 'react';
import type { View } from '../types';

interface NavLinkProps {
  view: View;
  title: string;
  currentView: View;
  onNavigate: (view: View) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ view, title, currentView, onNavigate }) => {
  const isActive = view === currentView;
  const activeClasses = 'text-blue-500 dark:text-blue-400 border-b-2 border-blue-500';
  const inactiveClasses = 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400';
  
  return (
    <button
      onClick={() => onNavigate(view)}
      className={`px-3 py-2 font-semibold transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
    >
      {title}
    </button>
  );
};


interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, theme, onToggleTheme }) => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <img 
            src="https://www.webcincodev.com/blog/wp-content/uploads/2025/09/nuevpo-logo-w5.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="hidden sm:inline font-bold text-xl">Test Concursos</span>
        </div>
        
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 mr-4">
            <NavLink view="home" title="Inicio" currentView={currentView} onNavigate={onNavigate} />
            <NavLink view="test" title="Test" currentView={currentView} onNavigate={onNavigate} />
            <NavLink view="results" title="Resultados" currentView={currentView} onNavigate={onNavigate} />
            <NavLink view="settings" title="Ajustes" currentView={currentView} onNavigate={onNavigate} />
          </nav>
          
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <i className="fas fa-moon text-lg"></i> : <i className="fas fa-sun text-lg"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;