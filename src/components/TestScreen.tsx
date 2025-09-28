import React, { useState, useMemo } from 'react';
import Card from './Card';
import { THEMATIC_AXES, QUESTIONS } from '../data/questions_casuisticas';
import type { Question, ThematicAxis, Result } from '../types';

interface TestScreenProps {
  onTestComplete: (result: Omit<Result, 'date'>) => void;
}

const ALL_AXES_ID = 0;
// Mostrar todas las preguntas en la prueba general
const GENERAL_TEST_QUESTION_COUNT = QUESTIONS.length;

  const ALL_AXES_VIRTUAL_AXIS: ThematicAxis = {
  id: ALL_AXES_ID,
  name: 'Prueba General',
  description: `Un test con ${QUESTIONS.length} preguntas aleatorias de todos los ejes temáticos.`,
  icon: 'fa-layer-group',
};

const AxisSelector: React.FC<{ onSelect: (axis: ThematicAxis) => void; questions: Question[] }> = ({ onSelect, questions }) => (
  <div className="animate-fade-in">
{{ ... }}
    <h1 className="text-3xl font-bold text-center mb-6">Elige un Modo de Test</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* General Test Card */}
      <button
        onClick={() => onSelect(ALL_AXES_VIRTUAL_AXIS)}
        className="text-left p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between border-2 border-secondary-500"
      >
        <div className="flex items-start">
          <i className={`fa-solid ${ALL_AXES_VIRTUAL_AXIS.icon} text-3xl text-secondary-600 dark:text-secondary-400 mr-4 w-8 text-center`}></i>
          <div>
            <h3 className="font-bold text-lg text-accent-600 dark:text-accent-400">{ALL_AXES_VIRTUAL_AXIS.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{ALL_AXES_VIRTUAL_AXIS.description}</p>
          </div>
        </div>
        <div className="flex justify-end mt-3">
            <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-primary-900 dark:text-primary-200">
            {questions.length} preguntas disponibles
            </span>
        </div>
      </button>

      {/* Thematic Axes Cards */}
      {THEMATIC_AXES.map((axis) => {
        const questionCount = questions.filter(q => q.axisId === axis.id).length;
        return (
          <button
            key={axis.id}
            onClick={() => onSelect(axis)}
            className="text-left p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-start">
              <i className={`fa-solid ${axis.icon} text-3xl text-secondary-600 dark:text-secondary-400 mr-4 w-8 text-center`}></i>
              <div>
                <h3 className="font-bold text-lg">{axis.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{axis.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-3">
               <span className="bg-primary-50 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-primary-900/50 dark:text-primary-200">
                {questionCount} preguntas
              </span>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

const QuizView: React.FC<{ questions: Question[]; axisName: string; onComplete: (userAnswers: number[]) => void; onBack: () => void }> = ({ questions, axisName, onComplete, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setUserAnswers([...userAnswers, optionIndex]);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete(userAnswers);
    }
  };

  const getOptionClasses = (optionIndex: number) => {
    if (!isAnswered) {
      return 'bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400';
    }
    if (optionIndex === currentQuestion.correctOptionIndex) {
      return 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500 text-green-800 dark:text-green-200';
    }
    if (optionIndex === selectedOption) {
      return 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500 text-red-800 dark:text-red-200';
    }
    return 'bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 opacity-70';
  };

  return (
    <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={onBack}
            className="flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors"
            title="Volver a la selección de ejes"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            <span>Volver</span>
          </button>
          <h1 className="text-2xl font-bold text-center">{axisName}</h1>
          <div className="w-24"></div> {/* Espacio para mantener el balance */}
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-6 overflow-hidden">
            <div className="bg-primary-500 h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
        </div>

        <Card>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Pregunta {currentIndex + 1} de {questions.length} (ID: {currentQuestion.id})</p>
            <h2 className="text-lg font-semibold mb-6">{currentQuestion.text}</h2>
            <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-lg border-2 border-transparent transition-all duration-300 ${getOptionClasses(index)}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {isAnswered && (
                <div className="mt-6 p-4 bg-primary-50 dark:bg-slate-800 border border-primary-100 dark:border-slate-700 rounded-lg animate-fade-in flex items-start space-x-3">
                    <i className="fa-solid fa-circle-info text-primary-600 dark:text-primary-400 mt-1"></i>
                    <div>
                        <h4 className="font-bold text-accent-800 dark:text-accent-300">Explicación:</h4>
                        <p className="text-sm text-accent-700 dark:text-accent-200">{currentQuestion.explanation}</p>
                    </div>
                </div>
            )}
        </Card>

        {isAnswered && (
            <button
                onClick={handleNext}
                className="w-full mt-6 bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
                {currentIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Test'}
            </button>
        )}
    </div>
  );
};


const TestScreen: React.FC<TestScreenProps> = ({ onTestComplete }) => {
  const [selectedAxis, setSelectedAxis] = useState<ThematicAxis | null>(null);

  const handleBackToAxes = () => {
    setSelectedAxis(null);
  };

  const questionsForAxis = useMemo(() => {
    if (!selectedAxis) return [];
    if (selectedAxis.id === ALL_AXES_ID) {
      // Mostrar todas las preguntas en orden aleatorio
      return [...QUESTIONS].sort(() => 0.5 - Math.random());
    }
    return QUESTIONS.filter(q => q.axisId === selectedAxis.id);
  }, [selectedAxis, QUESTIONS]);

  const handleTestFinish = (userAnswers: number[]) => {
    let correctCount = 0;
    const performance: Result['performanceByAxis'] = {};

    questionsForAxis.forEach((question, index) => {
      const isCorrect = question.correctOptionIndex === userAnswers[index];
      if (isCorrect) {
        correctCount++;
      }

      if (selectedAxis?.id === ALL_AXES_ID) {
        const axis = THEMATIC_AXES.find(a => a.id === question.axisId);
        if (axis) {
          if (!performance[axis.name]) {
            performance[axis.name] = { correct: 0, total: 0 };
          }
          performance[axis.name].total++;
          if (isCorrect) {
            performance[axis.name].correct++;
          }
        }
      }
    });

    const result: Omit<Result, 'date'> = {
      score: correctCount,
      totalQuestions: questionsForAxis.length,
      correctAnswers: correctCount,
      incorrectAnswers: questionsForAxis.length - correctCount,
      axisName: selectedAxis!.name,
      ...(selectedAxis?.id === ALL_AXES_ID && { performanceByAxis: performance })
    };
    onTestComplete(result);
    setSelectedAxis(null);
  };
  
  if (!selectedAxis) {
    return <AxisSelector onSelect={setSelectedAxis} questions={QUESTIONS} />;
  }
  
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={handleBackToAxes}
          className="flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 transition-colors"
          title="Volver a la selección de ejes"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          <span>Volver</span>
        </button>
      </div>
      <QuizView 
        questions={questionsForAxis} 
        axisName={selectedAxis.name} 
        onComplete={handleTestFinish}
        onBack={handleBackToAxes}
      />
    </div>
  );
};

export default TestScreen;