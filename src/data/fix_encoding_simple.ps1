# Script simple para corregir la codificación del archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con codificación UTF-8
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

# Guardar el archivo con codificación UTF-8 (sin BOM)
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllLines($filePath, $content, $utf8NoBom)

Write-Host "Codificación del archivo questions.ts corregida a UTF-8 sin BOM."

# Mostrar un ejemplo del contenido
Write-Host "`nEjemplo del contenido (primeras 10 líneas):"
Get-Content -Path $filePath -TotalCount 10
