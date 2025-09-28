const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON de preguntas
const inputFile = path.join(__dirname, 'src', 'data', 'more_questions.json');
// Ruta de salida para el archivo TypeScript
const outputFile = path.join(__dirname, 'src', 'data', 'generated_questions.ts');

// Leer el archivo JSON
const questions = require(inputFile);

// Crear el contenido del archivo TypeScript
const tsContent = `// Este archivo fue generado automáticamente. No editar manualmente.
import { Question } from './types';

export const GENERATED_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};
`;

// Escribir el archivo TypeScript
fs.writeFileSync(outputFile, tsContent, 'utf8');

console.log(`Se han generado ${questions.length} preguntas en ${outputFile}`);
