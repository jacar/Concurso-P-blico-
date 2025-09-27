# Script para corregir el archivo questions.ts

# Ruta al archivo questions.ts
$questionsFile = "c:\Users\ovall\Downloads\test\data\questions.ts"

# Leer el contenido actual del archivo
$content = Get-Content -Path $questionsFile -Raw

# Patrón para encontrar la última pregunta y la declaración OFIMATICA_QUESTIONS mal formada
$pattern = '(?s)(.*?\{ id: 450, axisId: 4, text: ''El \"archivo definitivo\" de una investigación disciplinaria procede cuando:'', options: \[''El investigado renuncia.'', ''El quejoso retira la queja.'', ''Está demostrado que la conducta no existió, que no es falta disciplinaria o que el investigado no la cometió.'', ''El proceso se vuelve muy largo y complejo\.''\], correctOptionIndex: 2, explanation: ''El archivo es una decisión de fondo que se toma cuando, tras la investigación, se llega a la certeza de que no hay mérito para continuar con el proceso y formular cargos, ya sea por atipicidad de la conducta, por una causal de justificación o porque no se pudo probar la autoría\.'' \},)// Preguntas de Ofimática, Archivo y Redacción \(Primeras 10 de 100\)\s+const OFIMATICA_QUESTIONS = \[(.*?)\]\s+export default OFIMATICA_QUESTIONS;'

# Reemplazar el patrón con la corrección
$newContent = $content -replace $pattern, '$1, // Preguntas de Ofimática, Archivo y Redacción (Primeras 10 de 100)$2'

# Escribir el contenido corregido de vuelta al archivo
$newContent | Set-Content -Path $questionsFile -NoNewline -Encoding UTF8

Write-Host "Archivo questions.ts corregido exitosamente."
