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
      <Card className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-2">
          Bienvenido a Test Concursos Colombia
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Prepárate para las pruebas de servicio público con nuestro simulador de tests.
        </p>
        <button
          onClick={onStartTest}
          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
        >
          Iniciar Test
        </button>
      </Card>
      <footer className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink href="https://github.com/jacar" iconClass="fab fa-github" tooltipText="GitHub" />
          <SocialLink href="https://www.armandomi.space/" iconClass="fas fa-globe" tooltipText="Web" />
          <SocialLink href="https://www.behance.net/armandoovalle1" iconClass="fab fa-behance" tooltipText="Behance" />
        </div>
        <p>Desarrollado por Armando Ovalle Jacome</p>
      </footer>
    </div>
  );
};

export default HomeScreen;