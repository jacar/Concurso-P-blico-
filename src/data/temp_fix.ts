// Archivo temporal para corregir questions.ts

// Primero, copiar todo el contenido de questions.ts hasta la línea 1224
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'questions.ts');
const outputFile = path.join(__dirname, 'questions_new.ts');

// Leer el archivo original
let content = fs.readFileSync(inputFile, 'utf8');

// Encontrar la posición donde termina el array QUESTIONS
const endOfQuestions = content.lastIndexOf('  { id: 450,');
const endOfQuestionsLine = content.indexOf('\n', endOfQuestions) + 1;

// Obtener el contenido hasta el final de la pregunta 450
const part1 = content.substring(0, endOfQuestionsLine);

// Obtener las preguntas de ofimática (ya están en el archivo, solo necesitamos extraerlas)
const ofimaticaStart = content.indexOf('const OFIMATICA_QUESTIONS = [') + 'const OFIMATICA_QUESTIONS ='.length;
const ofimaticaEnd = content.lastIndexOf('export default OFIMATICA_QUESTIONS;');
const ofimaticaContent = content.substring(ofimaticaStart, ofimaticaEnd).trim();

// Crear el nuevo contenido
const newContent = `${part1.trim()},
${ofimaticaContent}
];
`;

// Escribir el nuevo archivo
fs.writeFileSync(outputFile, newContent, 'utf8');

console.log('Archivo temporal creado exitosamente.');
