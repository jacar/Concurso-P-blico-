# Script para corregir el archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con codificación UTF-8
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Encontrar la posición donde termina el array QUESTIONS
$endOfQuestions = $content.LastIndexOf('];')

# Si no se encuentra, salir con error
if ($endOfQuestions -eq -1) {
    Write-Host "No se pudo encontrar el final del array QUESTIONS en el archivo."
    exit 1
}

# Obtener el contenido hasta el final del array QUESTIONS
$part1 = $content.Substring(0, $endOfQuestions)

# Contenido de las preguntas de ofimática (las primeras 10)
$ofimaticaQuestions = @'
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
'@

# Crear el nuevo contenido
$newContent = $part1.TrimEnd() + "`n  " + $ofimaticaQuestions.Trim() + "`n"];"

# Guardar el archivo corregido con codificación UTF-8 sin BOM
[System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.UTF8Encoding]::new($false))

Write-Host "Archivo questions.ts corregido exitosamente con las preguntas de ofimática."
