import React from 'react';
import Card from './Card';
import SocialLink from './SocialLink';

interface HomeScreenProps {
  onStartTest: () => void;
}

// FIX: Correctly type the functional component with its props interface. This component expects an onStartTest prop.
const HomeScreen: React.FC<HomeScreenProps> = ({ onStartTest }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center">
      <img
        src="https://www.webcincodev.com/blog/wp-content/uploads/2025/09/nuevpo-logo-w5.png"
        alt="Logo"
        className="h-40 w-auto object-contain mb-6"
      />
      <Card className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          Bienvenido a Test Concursos Colombia
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Prepárate para las pruebas de servicio público con nuestro simulador de tests.
        </p>
        <button
          onClick={onStartTest}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Iniciar Test
        </button>
      </Card>
      <footer className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink href="https://github.com/armandovalle" iconClass="fab fa-github" tooltipText="GitHub" />
          <SocialLink href="https://www.webcincodev.com/" iconClass="fas fa-globe" tooltipText="Web" />
          <SocialLink href="https://www.behance.net/armandovalle" iconClass="fab fa-behance" tooltipText="Behance" />
        </div>
        <p>Desarrollado por Armando Ovalle Jacome</p>
      </footer>
    </div>
  );
};

export default HomeScreen;