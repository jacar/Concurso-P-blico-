import React from 'react';
import Card from './Card';
import type { Result } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface ResultsScreenProps {
  result: Result | null;
  history: Result[];
  onTryAgain: () => void;
}

const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('es-CO', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const ResultsScreen: React.FC<ResultsScreenProps> = ({ result, history, onTryAgain }) => {
  if (!result && history.length === 0) {
    return (
      <Card className="text-center animate-fade-in">
        <h2 className="text-xl font-bold mb-4">No hay resultados</h2>
        <p className="mb-6">Completa un test para ver tus resultados aquí.</p>
        <button
          onClick={onTryAgain}
          className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
        >
          Ir al Test
        </button>
      </Card>
    );
  }

  const currentResult = result || history[0];
  const { score, totalQuestions, correctAnswers, incorrectAnswers, axisName, performanceByAxis } = currentResult;
  const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const data = [
    { name: 'Correctas', value: correctAnswers },
    { name: 'Incorrectas', value: incorrectAnswers },
  ];
  const COLORS = ['#10B981', '#EF4444'];

  const getFeedbackMessage = () => {
    if (percentage >= 80) return "¡Excelente trabajo! Estás muy bien preparado.";
    if (percentage >= 60) return "¡Buen resultado! Sigue practicando para perfeccionar.";
    if (percentage >= 40) return "Vas por buen camino, pero necesitas repasar un poco más.";
    return "No te desanimes. ¡La práctica hace al maestro!";
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-2">Resumen de Resultados</h1>
      <p className="text-center text-xl text-slate-600 dark:text-slate-300 mb-6">{result ? axisName : 'Último Resultado'}</p>
      
      {currentResult && (
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center">
            {/* Chart Column */}
            <div className="h-64 md:h-80 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#8884d8" paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Details Column */}
            <div className="text-center md:text-left mt-6 md:mt-0">
              <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">Tu Desempeño</h2>
                  <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                      <li className="flex justify-between"><span>Correctas:</span> <span className="font-bold text-green-500">{correctAnswers}</span></li>
                      <li className="flex justify-between"><span>Incorrectas:</span> <span className="font-bold text-red-500">{incorrectAnswers}</span></li>
                      <li className="flex justify-between"><span>Total:</span> <span className="font-bold">{totalQuestions}</span></li>
                      <li className="flex justify-between border-t pt-3 mt-3 border-slate-300 dark:border-slate-600"><span>Puntuación:</span> <span className="font-bold text-accent-500 dark:text-accent-400">{percentage}%</span></li>
                  </ul>
              </div>
               <div className="mt-6 p-4 bg-primary-50 dark:bg-slate-800/50 border border-primary-100 dark:border-slate-700 rounded-lg flex items-start space-x-3">
                  <i className={`fa-solid ${percentage >= 80 ? 'fa-circle-check text-green-500' : 'fa-circle-info text-primary-500'} mt-1`}></i>
                  <p className="text-slate-700 dark:text-slate-300">{getFeedbackMessage()}</p>
               </div>
            </div>
          </div>

          {performanceByAxis && Object.keys(performanceByAxis).length > 0 && (
            <div className="mt-8 border-t pt-6 border-slate-300 dark:border-slate-600">
              <h3 className="text-xl font-bold text-center mb-4">Desglose por Eje Temático</h3>
              <ul className="space-y-2">
                {Object.entries(performanceByAxis)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([axis, data]) => {
                    // Asegurarse de que data tenga el tipo correcto
                    const axisData = data as { correct: number; total: number };
                    const correct = axisData?.correct || 0;
                    const total = axisData?.total || 1; // Evitar división por cero
                    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
                    
                    return (
                      <li key={axis} className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg flex justify-between items-center flex-wrap">
                        <span className="font-semibold mr-2">{axis}</span>
                        <span className="text-right font-mono">
                          {correct} / {total}
                          <span className={`ml-3 font-bold ${percentage >= 60 ? 'text-green-500' : 'text-red-500'}`}>
                            ({percentage}%)
                          </span>
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={onTryAgain}
              className="flex-1 bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <i className="fa-solid fa-rotate-right"></i>
              <span>Intentar de Nuevo</span>
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-1 bg-white hover:bg-slate-50 text-primary-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-primary-400 border border-slate-200 dark:border-slate-700 font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-sm hover:shadow flex items-center justify-center space-x-2"
            >
              <i className="fa-solid fa-arrow-up"></i>
              <span>Volver Arriba</span>
            </button>
          </div>
        </Card>
      )}

      {history.length > 0 && (
          <div className="mt-10">
              <h2 className="text-2xl font-bold text-center mb-6">Historial de Resultados</h2>
              <Card className="space-y-4">
                  {history.map((histResult, index) => (
                      <div key={index} className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                          <div className="flex justify-between items-center flex-wrap">
                              <span className="font-bold text-accent-600 dark:text-accent-400">{histResult.axisName}</span>
                              <span className="text-sm text-slate-500 dark:text-slate-400">{formatDate(histResult.date)}</span>
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                              <p>Resultado: {histResult.correctAnswers} / {histResult.totalQuestions}</p>
                              <p className="font-bold text-lg">{Math.round((histResult.correctAnswers / histResult.totalQuestions) * 100)}%</p>
                          </div>
                      </div>
                  ))}
              </Card>
          </div>
      )}
    </div>
  );
};

export default ResultsScreen;