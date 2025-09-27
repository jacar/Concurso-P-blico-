# Script para corregir la codificación del archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con la codificación incorrecta
$content = Get-Content -Path $filePath -Raw -Encoding Default

# Reemplazar los caracteres mal codificados
$content = $content -replace 'Ã¡', 'á'
$content = $content -replace 'Ã©', 'é'
$content = $content -replace 'Ã\u00ad', 'í'
$content = $content -replace 'Ã³', 'ó'
$content = $content -replace 'Ãº', 'ú'
$content = $content -replace 'Ã±', 'ñ'
$content = $content -replace 'Ã', 'í'
$content = $content -replace 'Â¿', '¿'
$content = $content -replace 'Â¡', '¡'
$content = $content -replace 'Ã¼', 'ü'
$content = $content -replace 'Ã‰', 'É'
$content = $content -replace 'Ã“', 'Ó'
$content = $content -replace 'Ã‘', 'Ñ'
$content = $content -replace 'â€“', '–'
$content = $content -replace 'â€œ', '“'
$content = $content -replace 'â€', '”'
$content = $content -replace 'â€¢', '•'

# Guardar el archivo con codificación UTF-8
$content | Out-File -FilePath $filePath -Encoding UTF8 -NoNewline

Write-Host "Codificación del archivo questions.ts corregida exitosamente."

# Mostrar un ejemplo del contenido corregido
Write-Host "`nEjemplo del contenido corregido:"
$sample = Get-Content -Path $filePath -TotalCount 10
$sample | ForEach-Object { Write-Host $_ }
