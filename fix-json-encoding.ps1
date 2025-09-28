# Script para corregir la codificación del archivo JSON
$inputFile = "src\data\more_questions.json"
$outputFile = "src\data\more_questions_fixed.json"

# Leer el archivo con la codificación correcta (probando diferentes codificaciones)
try {
    $content = Get-Content -Path $inputFile -Raw -Encoding UTF8
} catch {
    try {
        $content = Get-Content -Path $inputFile -Raw -Encoding Default
    } catch {
        $content = Get-Content -Path $inputFile -Raw -Encoding Unicode
    }
}

# Guardar con codificación UTF-8
[System.IO.File]::WriteAllText($outputFile, $content, [System.Text.Encoding]::UTF8)

Write-Host "Archivo corregido guardado como: $outputFile"
