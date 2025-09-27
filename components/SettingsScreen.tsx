import React from 'react';
import Card from './Card';
import SocialLink from './SocialLink';

const SettingsScreen: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-6">Configuración</h1>
      <Card>
        <h2 className="text-xl font-semibold mb-4">Acerca de la App</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Esta aplicación fue creada para ayudar en la preparación de concursos públicos en Colombia.
          Versión 1.1.0
        </p>
      </Card>
      <footer className="mt-8 text-sm text-center text-slate-500 dark:text-slate-400">
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

export default SettingsScreen;