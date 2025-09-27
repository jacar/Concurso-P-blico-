# Script para reconstruir el archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Crear el contenido inicial del archivo
$content = @'
// Importar preguntas
import { Question } from '../types/quiz';

// Definir ejes temáticos
export const THEMATIC_AXES = [
  { id: 1, name: 'Competencias Ciudadanas', description: 'Preguntas sobre derechos humanos, constitución y valores democráticos' },
  { id: 2, name: 'Razonamiento Lógico', description: 'Preguntas de razonamiento abstracto, numérico y espacial' },
  { id: 3, name: 'Manejo de Información', description: 'Preguntas sobre interpretación de datos, tablas y gráficos' },
  { id: 4, name: 'Ética Pública', description: 'Preguntas sobre régimen disciplinario y ética en la función pública' },
  { id: 5, name: 'Ofimática, Archivo y Redacción', description: 'Preguntas sobre herramientas ofimáticas, gestión documental y redacción' }
];

// Preguntas del cuestionario
export const QUESTIONS: Question[] = [
'@

# Agregar preguntas existentes (sin las de ofimática)
$existingQuestions = Get-Content -Path $filePath -Raw -Encoding UTF8
$existingQuestions = $existingQuestions -replace '(?s)const OFIMATICA_QUESTIONS = \[.*?\]', ''
$existingQuestions = $existingQuestions -replace 'export default OFIMATICA_QUESTIONS;', ''
$existingQuestions = $existingQuestions -replace '// Preguntas de Ofimática, Archivo y Redacción \(Primeras 10 de 100\)', ''

# Extraer solo las preguntas del array
if ($existingQuestions -match 'export const QUESTIONS: Question\[\] = \[(.*?)\];' -or 
    $existingQuestions -match 'const QUESTIONS = \[(.*?)\];') {
    $questions = $matches[1]
    $content += $questions
}

# Agregar las preguntas de ofimática correctamente formateadas
$content += @'
  // Preguntas de Ofimática, Archivo y Redacción (Primeras 10 de 100)
  {
    id: 451,
    axisId: 5,
    text: '¿Cuál de los siguientes NO es un componente principal de la suite ofimática Microsoft Office?',
    options: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Edge'
    ],
    correctOptionIndex: 3,
    explanation: 'Microsoft Edge es un navegador web, no forma parte de las herramientas principales de la suite ofimática Microsoft Office.'
  },
  {
    id: 452,
    axisId: 5,
    text: '¿Qué combinación de teclas permite copiar un texto seleccionado en la mayoría de los programas de Windows?',
    options: [
      'Ctrl + X',
      'Ctrl + C',
      'Ctrl + V',
      'Ctrl + Z'
    ],
    correctOptionIndex: 1,
    explanation: 'La combinación Ctrl + C permite copiar el texto seleccionado al portapapeles en la mayoría de los programas de Windows.'
  },
  {
    id: 453,
    axisId: 5,
    text: 'En Microsoft Word, ¿qué función cumple la tecla F7?',
    options: [
      'Abrir un documento existente',
      'Activar la revisión ortográfica y gramatical',
      'Guardar el documento actual',
      'Imprimir el documento'
    ],
    correctOptionIndex: 1,
    explanation: 'La tecla F7 en Microsoft Word activa la herramienta de revisión ortográfica y gramatical.'
  },
  {
    id: 454,
    axisId: 5,
    text: '¿Cuál es la extensión por defecto de los archivos de Microsoft Word 2016 y versiones posteriores?',
    options: [
      '.doc',
      '.docx',
      '.txt',
      '.rtf'
    ],
    correctOptionIndex: 1,
    explanation: 'La extensión .docx es el formato estándar para documentos de Word a partir de la versión 2007.'
  },
  {
    id: 455,
    axisId: 5,
    text: '¿Qué significa la sigla PDF?',
    options: [
      'Portable Document Format',
      'Personal Data File',
      'Printable Document Format',
      'Public Document File'
    ],
    correctOptionIndex: 0,
    explanation: 'PDF significa Portable Document Format (Formato de Documento Portátil), un formato desarrollado por Adobe Systems.'
  },
  {
    id: 456,
    axisId: 5,
    text: 'En Excel, ¿qué fórmula sumaría los valores de las celdas A1 hasta A10?',
    options: [
      '=SUMA(A1-A10)',
      '=TOTAL(A1:A10)',
      '=SUMA(A1:A10)',
      '=A1+A10'
    ],
    correctOptionIndex: 2,
    explanation: 'La fórmula correcta para sumar un rango de celdas en Excel es =SUMA(A1:A10).'
  },
  {
    id: 457,
    axisId: 5,
    text: '¿Cuál de las siguientes NO es una regla básica de redacción oficial?',
    options: [
      'Uso de lenguaje claro y preciso',
      'Estructura lógica y coherente',
      'Uso excesivo de tecnicismos',
      'Corrección gramatical y ortográfica'
    ],
    correctOptionIndex: 2,
    explanation: 'El uso excesivo de tecnicismos dificulta la comprensión del mensaje, por lo que no es una práctica recomendada en la redacción oficial.'
  },
  {
    id: 458,
    axisId: 5,
    text: '¿Qué tecla permite seleccionar varios archivos no consecutivos en el Explorador de Windows?',
    options: [
      'Shift',
      'Ctrl',
      'Alt',
      'Tab'
    ],
    correctOptionIndex: 1,
    explanation: 'La tecla Ctrl permite seleccionar múltiples archivos no consecutivos manteniéndola presionada mientras se hace clic en cada archivo.'
  },
  {
    id: 459,
    axisId: 5,
    text: 'En PowerPoint, ¿qué vista permite ver las diapositivas en miniatura en el panel izquierdo?',
    options: [
      'Vista Normal',
      'Vista Clasificador de diapositivas',
      'Vista Presentación con diapositivas',
      'Vista Patrón de diapositivas'
    ],
    correctOptionIndex: 0,
    explanation: 'La Vista Normal muestra las diapositivas en miniatura en el panel izquierdo y la diapositiva actual en el panel principal.'
  },
  {
    id: 460,
    axisId: 5,
    text: '¿Cuál de las siguientes NO es una función de un sistema de gestión documental?',
    options: [
      'Almacenamiento de documentos',
      'Control de versiones',
      'Edición de imágenes',
      'Búsqueda y recuperación de documentos'
    ],
    correctOptionIndex: 2,
    explanation: 'La edición de imágenes no es una función principal de un sistema de gestión documental, que se enfoca en el almacenamiento, control de versiones y recuperación de documentos.'
  }
];

// Exportar por defecto las preguntas
export default QUESTIONS;
'@

# Guardar el archivo reconstruido
$content | Out-File -FilePath $filePath -Encoding UTF8 -NoNewline

Write-Host "Archivo questions.ts reconstruido exitosamente."
