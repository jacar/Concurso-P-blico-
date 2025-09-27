import React from 'react';
import Card from './Card';
import SocialLink from './SocialLink';

const SettingsScreen: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Políticas de la Aplicación</h1>
      
      <Card className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-carmesin-600 dark:text-carmesin-400">Aviso Importante</h2>
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6 rounded">
          <p className="text-red-700 dark:text-red-300 font-medium">
            Esta aplicación <span className="font-bold">NO es oficial</span> de la Comisión Nacional del Servicio Civil ni está afiliada a ninguna entidad gubernamental.
          </p>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Esta aplicación ha sido desarrollada con fines educativos y de preparación para pruebas de conocimiento en concursos públicos en Colombia.
        </p>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          La información proporcionada en esta aplicación tiene como único objetivo servir como material de estudio y práctica, y no debe ser considerada como asesoría legal o profesional.
        </p>
        
        <h3 className="text-lg font-semibold mt-6 mb-3 text-carmesin-600 dark:text-carmesin-400">Uso de Datos</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Los resultados de los tests y el historial se almacenan únicamente en tu dispositivo. No recopilamos ni compartimos información personal.
        </p>
        
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Versión 1.1.0 | Última actualización: Septiembre 2025
          </p>
        </div>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-carmesin-600 dark:text-carmesin-400">Contáctanos</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Si tienes preguntas o comentarios sobre la aplicación, no dudes en contactarnos a través de nuestras redes sociales.
        </p>
        <div className="flex justify-center space-x-6 py-4">
          <SocialLink 
            href="https://github.com/jacar" 
            iconClass="fab fa-github" 
            tooltipText="GitHub" 
            className="text-2xl"
          />
          <SocialLink 
            href="https://www.armandomi.space/" 
            iconClass="fas fa-globe" 
            tooltipText="Sitio Web" 
            className="text-2xl"
          />
          <SocialLink 
            href="https://www.behance.net/armandoovalle1" 
            iconClass="fab fa-behance" 
            tooltipText="Behance" 
            className="text-2xl"
          />
        </div>
        <p className="text-center text-slate-500 dark:text-slate-400 mt-4">
          Desarrollado por Armando Ovalle Jacome
        </p>
      </Card>
    </div>
  );
};

export default SettingsScreen;