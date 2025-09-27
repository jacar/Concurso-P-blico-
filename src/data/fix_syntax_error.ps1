# Script para corregir el error de sintaxis en questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

# Corregir el formato de las preguntas de ofimática
$content = $content -replace '// Preguntas de OfimÃ¡tica, Archivo y RedacciÃ³n \(Primeras 10 de 100\)\s*\{', '  // Preguntas de Ofimática, Archivo y Redacción (Primeras 10 de 100)'
$content = $content -replace '\s+id:', '    id:'
$content = $content -replace '\s+axisId:', '    axisId:'
$content = $content -replace '\s+text:', '    text:'
$content = $content -replace '\s+options:', '    options:'
$content = $content -replace '\s+correctOptionIndex:', '    correctOptionIndex:'
$content = $content -replace '\s+explanation:', '    explanation:'

# Asegurarse de que no haya comas después del último elemento del array
$content = $content -replace '\},\s*\]', '}
]'

# Guardar los cambios
$content | Out-File -FilePath $filePath -Encoding UTF8 -NoNewline

Write-Host "Archivo questions.ts corregido exitosamente."
