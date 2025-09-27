import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beige-100 dark:bg-gray-800 border-t border-beige-200 dark:border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {currentYear} Test Concursos Colombia. Todos los derechos reservados.</p>
          <p className="mt-1 text-xs">
            Esta aplicación no está afiliada ni respaldada por la Comisión Nacional del Servicio Civil ni por ninguna entidad gubernamental.
          </p>
          <div className="mt-3 flex justify-center space-x-4">
            <a 
              href="https://github.com/jacar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-carmesin-500 dark:text-slate-400 dark:hover:text-carmesin-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <i className="fab fa-github text-lg"></i>
            </a>
            <a 
              href="https://www.armandomi.space/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-carmesin-500 dark:text-slate-400 dark:hover:text-carmesin-400 transition-colors"
            >
              <span className="sr-only">Sitio Web</span>
              <i className="fas fa-globe text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
