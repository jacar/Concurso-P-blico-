# Script para corregir la codificación del archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con codificación UTF-8
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::GetEncoding('iso-8859-1'))

# Guardar el archivo con codificación UTF-8 (sin BOM)
[System.IO.File]::WriteAllText($filePath, $content, [System.Text.UTF8Encoding]::new($false))

Write-Host "Codificación del archivo questions.ts corregida a UTF-8 sin BOM."

# Mostrar un ejemplo del contenido
Write-Host "`nEjemplo del contenido (primeras 10 líneas):"
Get-Content -Path $filePath -TotalCount 10 -Encoding UTF8
