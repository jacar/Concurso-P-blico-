import React from 'react';
import type { View } from '../types';

interface NavItemProps {
  view: View;
  title: string;
  icon: string;
  currentView: View;
  onNavigate: (view: View) => void;
}

const NavItem: React.FC<NavItemProps> = ({ view, title, icon, currentView, onNavigate }) => {
  const isActive = view === currentView;
  const activeClasses = 'text-blue-500 dark:text-blue-400';
  const inactiveClasses = 'text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400';

  return (
    <button
      onClick={() => onNavigate(view)}
      className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
    >
      <i className={`fa-solid ${icon} text-xl`}></i>
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
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-lg md:hidden">
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
