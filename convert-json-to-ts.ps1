# Script para convertir el archivo JSON a TypeScript
$jsonFile = "src\data\more_questions_fixed.json"
$outputFile = "src\data\generated_questions.ts"

# Leer el contenido del archivo JSON
$jsonContent = Get-Content -Path $jsonFile -Raw | ConvertFrom-Json

# Crear el contenido del archivo TypeScript
$tsContent = @"
// Este archivo fue generado automáticamente. No editar manualmente.
import { Question } from './types';

export const GENERATED_QUESTIONS: Question[] = 
$($jsonContent | ConvertTo-Json -Depth 10);

// Número total de preguntas: $($jsonContent.Count)
"@

# Guardar el archivo TypeScript
[System.IO.File]::WriteAllText($outputFile, $tsContent, [System.Text.Encoding]::UTF8)

Write-Host "Archivo TypeScript generado: $outputFile"
Write-Host "Total de preguntas procesadas: $($jsonContent.Count)"
