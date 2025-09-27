# Script para corregir el archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con codificación UTF-8
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Corregir el final del array QUESTIONS
$content = $content -replace '\/\/ Preguntas de Ofimática, Archivo y Redacción \(Primeras 10 de 100\)\s+const OFIMATICA_QUESTIONS = \[', ', // Preguntas de Ofimática, Archivo y Redacción (Primeras 10 de 100)'

# Eliminar la línea de export al final
$content = $content -replace '\s+export default OFIMATICA_QUESTIONS;', ''

# Guardar el contenido corregido con codificación UTF-8 sin BOM
[System.IO.File]::WriteAllText($filePath, $content, [System.Text.UTF8Encoding]::new($false))
