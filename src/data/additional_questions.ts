import type { Question } from '../types';

export const ADDITIONAL_QUESTIONS: Question[] = [
  // Preguntas adicionales para cada eje temático
  // Eje 1: Constitución Política de Colombia (IDs: 811-860)
  {
    id: 811,
    axisId: 1,
    text: 'Un ciudadano solicita información sobre un proyecto de infraestructura que afectaría su propiedad. La información está clasificada como reservada. ¿Cómo procede?',
    options: [
      'Proporcionar la información completa por ser de interés público.',
      'Negarse a entregar la información por estar clasificada.',
      'Solicitar autorización para revelar información no sensible.',
      'Derivar la solicitud a la oficina de atención al ciudadano.'
    ],
    correctOptionIndex: 2,
    explanation: 'Se debe buscar un equilibrio entre el derecho a la información y la protección de información sensible, siguiendo los protocolos establecidos.'
  },
  {
    id: 812,
    axisId: 1,
    text: 'Un grupo de manifestantes bloquea una vía principal exigiendo la construcción de un colegio. ¿Cuál es el procedimiento adecuado?',
    options: [
      'Llamar de inmediato al ESMAD para despejar la vía.',
      'Iniciar un diálogo para escuchar sus peticiones y buscar soluciones.',
      'Ignorar la manifestación hasta que se disuelva por sí sola.',
      'Amenazar con sanciones penales a los manifestantes.'
    ],
    correctOptionIndex: 1,
    explanation: 'El diálogo es fundamental para resolver conflictos sociales de manera pacífica y constructiva.'
  },
  
  // Eje 2: Estructura y Funcionamiento del Estado (IDs: 861-910)
  {
    id: 861,
    axisId: 2,
    text: 'Un subalterno le informa que ha recibido ofertas de soborno a cambio de agilizar trámites. ¿Qué debe hacer?',
    options: [
      'Ignorar la situación para evitar problemas.',
      'Reportarlo al comité de ética y a las autoridades competentes.',
      'Amonestarlo por no manejar la situación él mismo.',
      'Pedirle que guarde silencio mientras investiga.'
    ],
    correctOptionIndex: 1,
    explanation: 'Los actos de corrupción deben ser reportados de inmediato a las instancias correspondientes.'
  },
  
  // Eje 3: Servicio al Ciudadano y Contratación (IDs: 911-960)
  {
    id: 911,
    axisId: 3,
    text: 'Un proveedor le ofrece un descuento personal por adjudicarle un contrato. ¿Cómo reacciona?',
    options: [
      'Aceptar el descuento como un gesto de buena voluntad.',
      'Rechazar la oferta y reportar el hecho a su superior.',
      'Negociar un mejor descuento a cambio de favores.',
      'Ignorar la oferta pero continuar con el proceso normal.'
    ],
    correctOptionIndex: 1,
    explanation: 'Los descuentos personales pueden constituir actos de corrupción y deben ser reportados.'
  },
  
  // Eje 4: Gestión Documental y Archivo (IDs: 961-1010)
  {
    id: 961,
    axisId: 4,
    text: 'Al realizar una auditoría, descubre que documentos importantes fueron eliminados antes de cumplir su período de retención. ¿Qué hace?',
    options: [
      'Ignorar el hallazgo para evitar problemas.',
      'Reportar el hecho de inmediato a su superior y al archivo central.',
      'Eliminar los registros de la auditoría para evitar sanciones.',
      'Pedir a un compañero que reemplace los documentos faltantes.'
    ],
    correctOptionIndex: 1,
    explanation: 'La eliminación prematura de documentos debe ser reportada como una falta grave.'
  },
  
  // Eje 5: Ofimática y Herramientas Digitales (IDs: 1011-1060)
  {
    id: 1011,
    axisId: 5,
    text: 'Recibe un correo sospechoso que parece ser del banco pidiendo sus credenciales. ¿Qué hace?',
    options: [
      'Proporcionar la información solicitada para evitar problemas.',
      'Eliminar el correo sin abrirlo y reportarlo al área de TI.',
      'Reenviar el correo a sus contactos para advertirles.',
      'Contestar el correo pidiendo más información.'
    ],
    correctOptionIndex: 1,
    explanation: 'Los correos sospechosos deben ser reportados al área de TI y nunca se debe proporcionar información confidencial.'
  },
  
  // Eje 6: Ética y Transparencia (IDs: 1061-1110)
  {
    id: 1061,
    axisId: 6,
    text: 'Un familiar cercano se postula a un cargo en su entidad. Usted es parte del comité de selección. ¿Qué hace?',
    options: [
      'Participar normalmente en el proceso de selección.',
      'Declarar el conflicto de interés y abstenerse de participar.',
      'Influir en la decisión a favor de su familiar.',
      'No decir nada pero votar en contra de su familiar.'
    ],
    correctOptionIndex: 1,
    explanation: 'Ante un conflicto de interés, lo correcto es declararlo y abstenerse de participar en la decisión.'
  },
  
  // Eje 7: Atención a Poblaciones Especiales (IDs: 1111-1160)
  {
    id: 1111,
    axisId: 7,
    text: 'Una persona con movilidad reducida llega a su oficina, pero el ascensor no funciona. ¿Qué hace?',
    options: [
      'Pedirle que espere hasta que se repare el ascensor.',
      'Atenderlo en la planta baja o buscar una solución alternativa.',
      'Decirle que vuelva otro día.',
      'Pedirle que intente subir por las escaleras con ayuda.'
    ],
    correctOptionIndex: 1,
    explanation: 'Se deben buscar alternativas para garantizar la accesibilidad a las personas con discapacidad.'
  },
  
  // Continuar con más preguntas en bloques de 50 por eje
  // ... (repetir la estructura para completar las 300 preguntas)
];

export default ADDITIONAL_QUESTIONS;
