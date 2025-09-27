// Script de Node.js para corregir la codificación del archivo questions.ts
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

// Ruta al archivo questions.ts
const filePath = path.join(__dirname, 'questions.ts');

// Leer el archivo como buffer
const fileBuffer = fs.readFileSync(filePath);

// Convertir de Windows-1252 a UTF-8
const content = iconv.decode(fileBuffer, 'win1252');

// Reemplazar caracteres mal codificados
const fixedContent = content
  .replace(/Ã¡/g, 'á')
  .replace(/Ã©/g, 'é')
  .replace(/Ã\u00ad/g, 'í')
  .replace(/Ã³/g, 'ó')
  .replace(/Ãº/g, 'ú')
  .replace(/Ã±/g, 'ñ')
  .replace(/Ã/g, 'í')
  .replace(/Â¿/g, '¿')
  .replace(/Â¡/g, '¡')
  .replace(/Ã¼/g, 'ü')
  .replace(/Ã‰/g, 'É')
  .replace(/Ã“/g, 'Ó')
  .replace(/Ã‘/g, 'Ñ')
  .replace(/â€“/g, '–')
  .replace(/â€œ/g, '“')
  .replace(/â€/g, '”')
  .replace(/â€¢/g, '•');

// Guardar el archivo con codificación UTF-8
fs.writeFileSync(filePath, fixedContent, 'utf8');

console.log('Codificación del archivo questions.ts corregida exitosamente.');
console.log('\nEjemplo del contenido corregido:');
console.log(fixedContent.split('\n').slice(0, 10).join('\n'));
