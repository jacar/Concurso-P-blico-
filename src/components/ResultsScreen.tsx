import React from 'react';
import Card from './Card';
import ShareButton from './ShareButton';
import type { Result } from '../types';

interface ResultsScreenProps {
  result: Result | null;
  history?: Result[];
  onTryAgain: () => void;
  onBack: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  result = null,
  history = [],
  onTryAgain,
  onBack
}) => {
  // Estado de carga
  if (result === undefined && (!history || history.length === 0)) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>Cargando resultados...</p>
      </div>
    );
  }

  // Si no hay resultados ni historial
  if (!result && (!Array.isArray(history) || history.length === 0)) {
    return (
      <Card className="text-center p-6">
        <h2 className="text-xl font-bold mb-4">No hay resultados</h2>
        <p className="mb-6">Completa un test para ver tus resultados.</p>
        <button
          onClick={onTryAgain}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Realizar Test
        </button>
      </Card>
    );
  }

  // Usar el resultado actual o el más reciente del historial
  const currentResult = result || (Array.isArray(history) && history[0]) || null;
  
  if (!currentResult) {
    return (
      <Card className="text-center p-6">
        <h2 className="text-xl font-bold mb-4">Error</h2>
        <p className="mb-6">No se pudieron cargar los resultados.</p>
        <button
          onClick={onBack}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Volver al inicio
        </button>
      </Card>
    );
  }

  // Datos del resultado actual
  const {
    correctAnswers = 0,
    incorrectAnswers = 0,
    totalQuestions = 0,
    axisName = 'Test',
    performanceByAxis = {}
  } = currentResult;

  // Calcular porcentaje
  const percentage = totalQuestions > 0 
    ? Math.round((correctAnswers / totalQuestions) * 100) 
    : 0;

  // Mensaje de retroalimentación
  const getFeedbackMessage = () => {
    if (percentage >= 80) return "¡Excelente trabajo! Tu puntuación es sobresaliente.";
    if (percentage >= 40) return "Vas por buen camino, pero hay margen de mejora.";
    return "No te desanimes. La práctica hace al maestro.";
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Resultados del Test</h1>
        <ShareButton 
          title={`¡He completado un test con un ${percentage}% de aciertos!`}
          text={`He completado el test de ${axisName} con un ${percentage}% de aciertos. ¿Te animas a intentarlo?`}
        />
      </div>

      <Card className="mb-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">{axisName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Stats */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-sm text-gray-600">Respuestas correctas</p>
                  <p className="text-2xl font-bold text-green-600">
                    {correctAnswers} <span className="text-sm">de {totalQuestions}</span>
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-gray-600">Respuestas incorrectas</p>
                  <p className="text-2xl font-bold text-red-600">{incorrectAnswers}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Progreso</span>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                <p className="text-blue-800">{getFeedbackMessage()}</p>
              </div>
            </div>

            {/* Right Column - Performance by Axis */}
            {performanceByAxis && Object.keys(performanceByAxis).length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Desglose por Eje Temático</h3>
                <ul className="space-y-2">
                  {Object.entries(performanceByAxis)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([axis, data]) => {
                      const axisData = data as { correct: number; total: number };
                      const correct = axisData?.correct || 0;
                      const total = axisData?.total || 1;
                      const axisPercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
                      
                      return (
                        <li key={axis} className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg flex justify-between items-center">
                          <span className="font-medium">{axis}</span>
                          <span className="text-right font-mono">
                            {correct} / {total}
                            <span className={`ml-3 font-bold ${axisPercentage >= 60 ? 'text-green-500' : 'text-red-500'}`}>
                              ({axisPercentage}%)
                            </span>
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="flex flex-col space-y-3 mt-6">
        <button
          onClick={onTryAgain}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <i className="fa-solid fa-rotate-right"></i>
          <span>Realizar otro test</span>
        </button>
        <button
          onClick={onBack}
          className="w-full bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 border border-gray-300 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <i className="fa-solid fa-home"></i>
          <span>Volver al inicio</span>
        </button>
      </div>

      {history.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">Historial de Resultados</h2>
          <Card className="space-y-4">
            {history.map((histResult, index) => {
              const histPercentage = histResult.totalQuestions > 0 
                ? Math.round((histResult.correctAnswers / histResult.totalQuestions) * 100) 
                : 0;

              return (
                <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center flex-wrap">
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      {histResult.axisName || 'Test'}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(histResult.date).toLocaleDateString('es-CO')}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span>Resultado:</span>
                      <span className="font-bold">
                        {histResult.correctAnswers} / {histResult.totalQuestions}
                        <span className={`ml-2 ${histPercentage >= 60 ? 'text-green-500' : 'text-red-500'}`}>
                          ({histPercentage}%)
                        </span>
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div
                        className={`h-1.5 rounded-full ${
                          histPercentage >= 80 
                            ? 'bg-green-500' 
                            : histPercentage >= 60 
                              ? 'bg-blue-500' 
                              : 'bg-yellow-500'
                        }`}
                        style={{ width: `${histPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Card>
        </div>
      )}
    </div>
  );
};

export default ResultsScreen;
