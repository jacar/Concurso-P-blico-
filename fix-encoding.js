import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeo de caracteres mal codificados a sus equivalentes correctos
const charMap = {
  // Caracteres con tilde
  'Ã¡': 'á', 'Ã¡': 'á', 'Ã¡': 'á',
  'Ã©': 'é', 'Ã©': 'é', 'Ã©': 'é',
  'Ã': 'í', 'Ã': 'í', 'Ã': 'í',
  'Ã³': 'ó', 'Ã³': 'ó', 'Ã³': 'ó',
  'Ãº': 'ú', 'Ãº': 'ú', 'Ãº': 'ú',
  'Ã±': 'ñ', 'Ã±': 'ñ', 'Ã±': 'ñ',
  'Ã¼': 'ü', 'Ã¼': 'ü', 'Ã¼': 'ü',
  
  // Mayúsculas con tilde
  'Ã': 'Á', 'Ã': 'Á', 'Ã': 'Á',
  'Ã': 'É', 'Ã': 'É', 'Ã': 'É',
  'Ã': 'Í', 'Ã': 'Í', 'Ã': 'Í',
  'Ã': 'Ó', 'Ã': 'Ó', 'Ã': 'Ó',
  'Ã': 'Ú', 'Ã': 'Ú', 'Ã': 'Ú',
  'Ã': 'Ñ', 'Ã': 'Ñ', 'Ã': 'Ñ',
  'Ã': 'Ü', 'Ã': 'Ü', 'Ã': 'Ü',
  
  // Signos de puntuación
  'Â¿': '¿', 'Â¡': '¡',
  'Â´': '´', 'Â¨': '¨', 'Â°': '°',
  'Âª': 'ª', 'Âº': 'º',
  
  // Caracteres especiales
  'â€“': '–', 'â€”': '—',
  'â€œ': '“', 'â€': '”',
  'â€˜': '‘', 'â€™': '’',
  'â€¦': '…', 'â€¢': '•',
  'â‚¬': '€', 'Â£': '£', 'Â¥': '¥',
  
  // Caracteres específicos encontrados en el archivo
  'Â¿': '¿', 'Â¡': '¡',
  'Ã³': 'ó', 'Ã¡': 'á', 'Ã©': 'é',
  'Ãº': 'ú', 'Ã±': 'ñ', 'Ã': 'í',
  'Ã': 'Á', 'Ã': 'É', 'Ã': 'Í',
  'Ã': 'Ó', 'Ã': 'Ú', 'Ã': 'Ñ',
  'Ã¼': 'ü', 'Ã': 'Ü',
  'â€“': '–', 'â€”': '—',
  'â€œ': '“', 'â€': '”',
  'â€˜': '‘', 'â€™': '’',
  'â€¦': '…',
  
  // Caracteres específicos adicionales
  'Â': '', // Eliminar caracteres Â sueltos
  'ï': 'í', 'Ã': 'í',
  '³': 'ó', 'º': 'ó', '¼': 'ü',
  'Ü': 'ú', '¡': 'í', '©': 'é',
  '¨': 'é', '¬': 'í', '¯': 'í',
  '»': '»', '¿': '¿', '½': 'í',
  '·': '·', '¹': 'í', '»': '»',
  '¼': 'ñ', '½': 'í', '¾': 'ó',
  '¿': '¿', 'À': 'À', 'Á': 'Á',
  'Â': 'Â', 'Ã': 'Ã', 'Ä': 'Ä',
  'Å': 'Å', 'Æ': 'Æ', 'Ç': 'Ç',
  'È': 'È', 'É': 'É', 'Ê': 'Ê',
  'Ë': 'Ë', 'Ì': 'Ì', 'Í': 'Í',
  'Î': 'Î', 'Ï': 'Ï', 'Ð': 'Ð',
  'Ñ': 'Ñ', 'Ò': 'Ò', 'Ó': 'Ó',
  'Ô': 'Ô', 'Õ': 'Õ', 'Ö': 'Ö',
  '×': '×', 'Ø': 'Ø', 'Ù': 'Ù',
  'Ú': 'Ú', 'Û': 'Û', 'Ü': 'Ü',
  'Ý': 'Ý', 'Þ': 'Þ', 'ß': 'ß',
  'à': 'à', 'á': 'á', 'â': 'â',
  'ã': 'ã', 'ä': 'ä', 'å': 'å',
  'æ': 'æ', 'ç': 'ç', 'è': 'è',
  'é': 'é', 'ê': 'ê', 'ë': 'ë',
  'ì': 'ì', 'í': 'í', 'î': 'î',
  'ï': 'ï', 'ð': 'ð', 'ñ': 'ñ',
  'ò': 'ò', 'ó': 'ó', 'ô': 'ô',
  'õ': 'õ', 'ö': 'ö', '÷': '÷',
  'ø': 'ø', 'ù': 'ù', 'ú': 'ú',
  'û': 'û', 'ü': 'ü', 'ý': 'ý',
  'þ': 'þ', 'ÿ': 'ÿ'
};

// Función para reemplazar caracteres en un string
function fixString(str) {
  if (typeof str !== 'string') return str;
  
  return str.split('').map(char => {
    return charMap[char] || char;
  }).join('');
}

// Función para procesar un objeto o array recursivamente
function fixEncoding(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => fixEncoding(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = fixEncoding(obj[key]);
      }
    }
    return result;
  } else if (typeof obj === 'string') {
    return fixString(obj);
  }
  return obj;
}

// Ruta al archivo questions.ts
const filePath = path.join(__dirname, 'src', 'data', 'questions.ts');

// Leer el archivo
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    // Extraer el contenido del archivo
    const fileContent = data;
    
    // Corregir la codificación
    const fixedContent = fixString(fileContent);
    
    // Escribir el archivo corregido
    fs.writeFile(filePath, fixedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
        return;
      }
      console.log('Archivo corregido exitosamente!');
    });
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
  }
});
