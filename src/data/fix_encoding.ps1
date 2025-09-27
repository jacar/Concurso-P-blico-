# Script para corregir la codificación del archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con la codificación actual
$content = Get-Content -Path $filePath -Raw -Encoding Default

# Guardar el contenido con codificación UTF-8
$content | Out-File -FilePath $filePath -Encoding utf8 -NoNewline

Write-Host "Codificación del archivo questions.ts corregida a UTF-8."
