import React from 'react';
import type { View } from '../types';

interface NavItemProps {
  view: View;
  title: string;
  icon: string;
  onNavigate: (view: View) => void;
}

const NavItem: React.FC<NavItemProps> = ({ view, title, icon, currentView, onNavigate }) => {
  const isActive = view === currentView;
  const activeClasses = 'text-secondary-600 dark:text-secondary-400';
  const inactiveClasses = 'text-primary-600 hover:text-secondary-500 dark:text-primary-400 dark:hover:text-secondary-400';

  return (
    <button
      onClick={() => onNavigate(view)}
      className={`flex flex-col items-center justify-center w-full transition-all duration-200 ${
        isActive ? `font-semibold ${activeClasses}` : `${inactiveClasses} font-medium`
      }`}
    >
      <i className={`fa-solid ${icon} text-lg ${isActive ? 'scale-110' : ''} transition-transform`}></i>
      <span className="text-xs mt-1">{title}</span>
    </button>
  );
};

interface BottomNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-primary-800 border-t border-gray-200 dark:border-white/10 shadow-lg md:hidden">
      <div className="flex justify-around items-center h-full max-w-2xl mx-auto">
        <NavItem view="home" title="Inicio" icon="fa-house" currentView={currentView} onNavigate={onNavigate} />
        <NavItem view="test" title="Test" icon="fa-file-alt" currentView={currentView} onNavigate={onNavigate} />
        <NavItem view="results" title="Resultados" icon="fa-chart-pie" currentView={currentView} onNavigate={onNavigate} />
        <NavItem view="settings" title="Ajustes" icon="fa-cog" currentView={currentView} onNavigate={onNavigate} />
      </div>
    </nav>
  );
};

export default BottomNav;
