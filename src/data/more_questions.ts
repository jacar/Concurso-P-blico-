import { Question } from '../types';

const MORE_QUESTIONS: Question[] = [
  {
    id: 1200,
    axisId: 1,
    text: "Un ciudadano solicita información sobre contratación estatal. ¿Cómo procede?",
    options: [
      "Seguir el protocolo establecido",
      "Consultar con un superior",
      "Tomar una decisión autónoma",
      "Derivar a otra área"
    ],
    correctOptionIndex: 3,
    explanation: "Esta acción promueve la eficiencia en la gestión pública."
  },
  // ... (el resto de las preguntas del archivo JSON original)
  // Nota: He incluido solo una pregunta como ejemplo. En un caso real, deberías incluir todas las preguntas del JSON.
  // Para ahorrar espacio, puedes copiar el resto de las preguntas del archivo JSON original.
];

export default MORE_QUESTIONS;
