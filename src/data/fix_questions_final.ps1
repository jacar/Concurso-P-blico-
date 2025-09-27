# Script para corregir el archivo questions.ts de manera segura

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

# Eliminar la declaración const OFIMATICA_QUESTIONS y agregar las preguntas al array QUESTIONS
$newContent = $content -replace '\/\/ Preguntas de Ofimática, Archivo y Redacción \(Primeras 10 de 100\)\s+const OFIMATICA_QUESTIONS = \[', ', // Preguntas de Ofimática, Archivo y Redacción (Primeras 10 de 100)'

# Eliminar la línea de export al final
$newContent = $newContent -replace '\s+export default OFIMATICA_QUESTIONS;', ''

# Guardar los cambios
$newContent | Set-Content -Path $filePath -NoNewline -Encoding UTF8

Write-Host "Archivo questions.ts corregido exitosamente."
