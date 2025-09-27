# Script final para corregir el archivo questions.ts

# Ruta al archivo questions.ts
$filePath = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido del archivo con codificación UTF-8
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

# Encontrar el final del array QUESTIONS (después de la pregunta 450)
$endOfQuestions = $content.IndexOf('  { id: 450,')
$endOfQuestions = $content.IndexOf("`n", $endOfQuestions) + 1

# Obtener la primera parte (hasta la pregunta 450)
$part1 = $content.Substring(0, $endOfQuestions)

# Encontrar la sección de preguntas de ofimática
$ofimaticaStart = $content.IndexOf('const OFIMATICA_QUESTIONS = [') + 'const OFIMATICA_QUESTIONS ='.Length
$ofimaticaEnd = $content.LastIndexOf('export default OFIMATICA_QUESTIONS;')
$ofimaticaContent = $content.Substring($ofimaticaStart, $ofimaticaEnd - $ofimaticaStart).Trim()

# Crear el nuevo contenido
$newContent = $part1.TrimEnd() + ",`n" + $ofimaticaContent + "`n];"

# Guardar el archivo corregido
[System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)

Write-Host "Archivo questions.ts corregido exitosamente."
