# Script para agregar las preguntas de ofimática al final del archivo questions.ts

# Ruta al archivo questions.ts
$questionsFile = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido actual del archivo
$content = Get-Content -Path $questionsFile -Raw

# Verificar si el archivo ya tiene las preguntas de ofimática
if ($content -match "OFIMATICA_QUESTIONS") {
    Write-Host "El archivo ya contiene las preguntas de ofimática."
    exit 0
}

# Obtener el contenido del archivo de preguntas de ofimática
$ofimaticaContent = Get-Content -Path "c:\Users\ovall\Downloads\test\data\temp_ofimatica_questions.ts" -Raw

# Extraer solo el array de preguntas (excluyendo la declaración de la constante)
$ofimaticaQuestions = $ofimaticaContent -replace '^.*?\[([\s\S]*)\].*$', '$1'

# Crear el contenido a insertar
$insertContent = "`n  // Preguntas de Ofimática, Archivo y Redacción`n" + $ofimaticaQuestions.Trim()

# Insertar el contenido justo antes del cierre del array
$newContent = $content -replace '(\s*\];\s*)$', ",$($insertContent)`$1"

# Escribir el contenido actualizado de vuelta al archivo
$newContent | Set-Content -Path $questionsFile -NoNewline

Write-Host "Preguntas de ofimática agregadas exitosamente al archivo questions.ts"
