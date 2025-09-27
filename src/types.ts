export interface ThematicAxis {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Question {
  id: number;
  axisId: number;
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export type View = 'home' | 'test' | 'results' | 'settings';

export interface Result {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  axisName: string;
  date: string; // ISO date string
  performanceByAxis?: {
    [axisName: string]: {
      correct: number;
      total: number;
    };
  };
}