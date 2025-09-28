import type { ThematicAxis, Question } from '../types';
import { ADDITIONAL_QUESTIONS } from './additional_questions';
import moreQuestionsJson from './more_questions.json';

// Convertir el JSON importado a un array de preguntas
const MORE_QUESTIONS: Question[] = moreQuestionsJson as Question[];

export const THEMATIC_AXES: ThematicAxis[] = [
  {
    id: 1,
    name: 'Constitución Política de Colombia',
    description: 'Casuosidades sobre derechos fundamentales, acciones constitucionales y estructura del Estado en situaciones reales.',
    icon: 'fa-landmark-flag',
  },
  {
    id: 2,
    name: 'Estructura y Funcionamiento del Estado',
    description: 'Dilemas prácticos sobre carrera administrativa, ética pública y gestión de personal.',
    icon: 'fa-building-columns',
  },
  {
    id: 3,
    name: 'Servicio al Ciudadano y Contratación',
    description: 'Casos reales de atención al público, contratación estatal y manejo de proveedores.',
    icon: 'fa-people-arrows',
  },
  {
    id: 4,
    name: 'Gestión Documental y Archivo',
    description: 'Situaciones prácticas sobre manejo de documentos, TRD y conservación documental.',
    icon: 'fa-folder',
  },
  {
    id: 5,
    name: 'Ofimática y Herramientas Digitales',
    description: 'Desafíos cotidianos en el uso de herramientas tecnológicas en la administración pública.',
    icon: 'fa-laptop',
  },
  {
    id: 6,
    name: 'Ética y Transparencia',
    description: 'Dilemas éticos y situaciones de conflicto de intereses en el servicio público.',
    icon: 'fa-scale-balanced',
  },
  {
    id: 7,
    name: 'Atención a Poblaciones Especiales',
    description: 'Casos sobre atención a grupos étnicos, víctimas del conflicto y personas con discapacidad.',
    icon: 'fa-hands-holding-heart',
  }
];

// Preguntas base
const BASE_QUESTIONS: Question[] = [
  // Constitución Política - Casos Prácticos
  {
    id: 1,
    axisId: 1,
    text: 'Usted es el secretario general de una alcaldía. Un ciudadano presenta una acción de tutela solicitando la entrega de un medicamento de alto costo no incluido en el POS. El médico tratante indica que es vital para salvarle la vida. ¿Cuál es el procedimiento a seguir?',
    options: [
      'Negar la solicitud porque el medicamento no está en el plan de beneficios.',
      'Entregar el medicamento de inmediato para proteger el derecho fundamental a la vida.',
      'Remitir al ciudadano a que compre el medicamento por sus propios medios.',
      'Solicitar al juez que se declare la emergencia sanitaria.'
    ],
    correctOptionIndex: 1,
    explanation: 'El derecho a la vida y a la salud son fundamentales. Aunque el medicamento no esté en el POS, la entidad debe garantizarlo si es vital para la supervivencia, según jurisprudencia de la Corte Constitucional.'
  },
  
  {
    id: 2,
    axisId: 1,
    text: 'Un periodista le solicita información sobre el salario del alcalde y los contratos de su despacho. Usted sabe que algunos documentos contienen información sensible sobre seguridad. ¿Cómo procede?',
    options: [
      'Entrega toda la información solicitada, incluyendo los documentos con datos sensibles.',
      'Niega toda la información alegando reserva legal.',
      'Entrega la información sobre salarios pero reserva los documentos con datos sensibles, explicando la razón.',
      'Le pide al periodista que espere a que el alcalde autorice la entrega.'
    ],
    correctOptionIndex: 2,
    explanation: 'El derecho de petición de información debe garantizarse, pero protegiendo los datos sensibles. Se debe entregar la información pública disponible y justificar cualquier reserva de acuerdo con la ley.'
  },

  // Estructura del Estado - Casos Prácticos
  {
    id: 101,
    axisId: 2,
    text: 'Usted es jefe de personal. Un empleado con 10 años de servicio ha sido citado a un proceso disciplinario. El abogado del empleado alega que no se le han garantizado los derechos al debido proceso. ¿Qué debe verificar primero?',
    options: [
      'Si el empleado ha tenido problemas disciplinarios anteriores.',
      'Si se notificó formalmente al empleado de los cargos en su contra y se le dio derecho de defensa.',
      'Si el superior jerárquico está de acuerdo con la sanción.',
      'Si el sindicato está al tanto del proceso.'
    ],
    correctOptionIndex: 1,
    explanation: 'El debido proceso exige que al funcionario se le notifiquen los cargos y se le permita ejercer su derecho de defensa. Es el primer aspecto que debe verificarse en cualquier proceso disciplinario.'
  },

  {
    id: 102,
    axisId: 2,
    text: 'Un funcionario de su equipo ha estado llegando sistemáticamente tarde. Al conversar con él, le confiesa que tiene problemas familiares graves. ¿Cómo manejaría esta situación?',
    options: [
      'Aplicar el reglamento de trabajo sin excepciones e iniciar proceso disciplinario.',
      'Concederle permiso no remunerado por una semana para que resuelva sus asuntos.',
      'Analizar si aplica para licencia por calamidad doméstica o buscar horario flexible temporal.',
      'Pedirle que renuncie si no puede cumplir con el horario.'
    ],
    correctOptionIndex: 2,
    explanation: 'Se debe buscar un equilibrio entre las necesidades del servicio y el bienestar del trabajador, explorando las alternativas legales disponibles como licencias o ajustes horarios temporales.'
  },

  // Servicio al Ciudadano y Contratación - Casos Prácticos
  {
    id: 201,
    axisId: 3,
    text: 'Un ciudadano llega furioso a la ventanilla porque lleva tres días intentando hacer un trámite sin éxito. ¿Cuál es la mejor forma de manejar la situación?',
    options: [
      'Indicarle que debe hacer fila como los demás.',
      'Escucharlo con atención, disculparse por las molestias y ofrecerle ayuda inmediata.',
      'Llamar a seguridad por si se pone violento.',
      'Decirle que el sistema está caído y que debe volver otro día.'
    ],
    correctOptionIndex: 1,
    explanation: 'Ante un ciudadano molesto, lo más efectivo es practicar la escucha activa, mostrar empatía y ofrecer soluciones concretas, manteniendo siempre la calma y el profesionalismo.'
  },

  {
    id: 202,
    axisId: 3,
    text: 'Está a cargo de un proceso de contratación. Una empresa que ha incumplido en contratos anteriores se presenta como la mejor oferta económica. ¿Qué hace?',
    options: [
      'Descartarla automáticamente por su historial.',
      'Evaluarla normalmente, ya que el precio es lo más importante.',
      'Verificar si está habilitada en el Registro Único de Proponentes y si cumple con los requisitos de capacidad.',
      'Llamar al representante legal para advertirle que esta vez sí debe cumplir.'
    ],
    correctOptionIndex: 2,
    explanation: 'Se debe verificar el cumplimiento de requisitos habilitantes, incluyendo la capacidad legal, técnica y financiera, así como el historial contractual en el SECOP.'
  },

  // Gestión Documental - Casos Prácticos
  {
    id: 301,
    axisId: 4,
    text: 'Recibe un oficio de otra entidad solicitando copia de un expediente de hace 8 años para un proceso judicial. Al revisar, nota que según la TRD el documento ya cumplió su tiempo de retención. ¿Qué hace?',
    options: [
      'Entrega el documento sin verificar su estado de conservación.',
      'Informa que el documento ya fue eliminado por cumplir su tiempo de retención.',
      'Verifica si el documento tiene valor secundario antes de proceder con la entrega.',
      'Pide permiso al jefe de archivo para eliminarlo antes de responder.'
    ],
    correctOptionIndex: 2,
    explanation: 'Aunque el tiempo de retención haya vencido, se debe verificar si el documento tiene valor histórico o legal antes de proceder, especialmente si está siendo requerido en un proceso judicial.'
  },

  // Ofimática - Casos Prácticos
  {
    id: 401,
    axisId: 5,
    text: 'Debe enviar un informe confidencial a un comité directivo. El archivo es muy grande y no puede adjuntarse al correo. ¿Cuál es la mejor opción?',
    options: [
      'Dividir el archivo en partes y enviarlas en correos separados.',
      'Subirlo a un servicio de almacenamiento en la nube personal y compartir el enlace.',
      'Utilizar el sistema seguro de transferencia de archivos de la entidad.',
      'Grabarlo en un USB y enviarlo por mensajería.'
    ],
    correctOptionIndex: 2,
    explanation: 'La información confidencial debe manejarse a través de los canales seguros autorizados por la entidad, nunca a través de servicios personales o medios no seguros.'
  },

  // Ética y Transparencia - Casos Prácticos
  {
    id: 501,
    axisId: 6,
    text: 'Un amigo cercano ha sido contratado como proveedor de su área. Usted no tuvo participación en la selección. ¿Qué debe hacer?',
    options: [
      'Mantener la relación profesional sin intervenir en las decisiones que le competan.',
      'Informar al comité de ética sobre la relación de amistad.',
      'Solicitar ser removido de cualquier decisión relacionada con ese contrato.',
      'Todas las anteriores.'
    ],
    correctOptionIndex: 3,
    explanation: 'Ante un conflicto de intereses real o aparente, lo correcto es declararlo, abstenerse de participar en decisiones relacionadas y notificar a las instancias correspondientes.'
  },

  // Atención a Poblaciones Especiales - Casos Prácticos
  {
    id: 601,
    axisId: 7,
    text: 'Una persona sorda llega a realizar un trámite. No hay intérprete de señas disponible. ¿Cómo procede?',
    options: [
      'Le pide que regrese cuando haya un intérprete disponible.',
      'Se comunica por escrito, asegurándose de que entienda la información.',
      'Le pide que traiga a un familiar que pueda interpretar.',
      'Le indica que debe presentar una solicitud por escrito.'
    ],
    correctOptionIndex: 1,
    explanation: 'Se deben implementar ajustes razonables para garantizar la accesibilidad. La comunicación por escrito es una solución inmediata, aunque lo ideal es contar con intérpretes de señas.'
  },

  // Más casos prácticos variados...
  {
    id: 701,
    axisId: 1,
    text: 'Un grupo de ciudadanos se manifiesta frente a la alcaldía exigiendo la construcción de un colegio. Algunos comienzan a bloquear la vía. ¿Qué debe hacer como funcionario encargado?',
    options: [
      'Llamar de inmediato al ESMAD para desalojar la vía.',
      'Salir a dialogar con los líderes de la protesta, escuchar sus peticiones y buscar puntos de encuentro.',
      'Cerrar las instalaciones y no atender a nadie hasta que se calme la situación.',
      'Grabar a los manifestantes para presentar denuncia penal.'
    ],
    correctOptionIndex: 1,
    explanation: 'El diálogo es la herramienta fundamental. Se debe escuchar a la comunidad, explicar los procedimientos institucionales y buscar soluciones conjuntas, garantizando el derecho a la protesta pacífica.'
  },

  {
    id: 702,
    axisId: 2,
    text: 'Descubre que un compañero de trabajo está utilizando recursos de la entidad (impresora, internet, teléfono) para su negocio particular. ¿Qué debe hacer?',
    options: [
      'Hacer la vista gorda, no es asunto suyo.',
      'Reportar inmediatamente a recursos humanos para que inicien investigación.',
      'Hablar directamente con su compañero para que deje de hacerlo.',
      'Esperar a la próxima reunión de equipo para mencionarlo sin nombres.'
    ],
    correctOptionIndex: 1,
    explanation: 'El uso indebido de recursos públicos debe ser reportado a través de los canales establecidos. No denunciarlo podría hacerlo cómplice de la falta.'
  },

  // Casos de Gestión de Crisis
  {
    id: 801,
    axisId: 2,
    text: 'Se declara una emergencia invernal en su municipio. Como jefe de gestión del riesgo, recibe reportes de que varios barrios están inundados. ¿Cuál es su primera acción?',
    options: [
      'Convocar de inmediato al Comité Municipal de Gestión del Riesgo.',
      'Solicitar recursos a la gobernación sin evaluar daños.',
      'Iniciar la evacuación sin coordinación con otras entidades.',
      'Esperar instrucciones del alcalde para actuar.'
    ],
    correctOptionIndex: 0,
    explanation: 'El Comité de Gestión del Riesgo es el espacio interinstitucional para coordinar la respuesta. Activar este mecanismo permite una respuesta organizada y efectiva.'
  },

  // Casos de Contratación Pública
  {
    id: 802,
    axisId: 3,
    text: 'Durante la apertura de sobres de una licitación, se da cuenta que un miembro del comité es familiar de uno de los proponentes. ¿Qué debe hacer?',
    options: [
      'Continuar con el proceso si el familiar se excusa de evaluar esa propuesta.',
      'Declarar impedido al miembro del comité y reemplazarlo antes de continuar.',
      'Pedirle al proponente que se retire voluntariamente.',
      'Suspender todo el proceso de contratación.'
    ],
    correctOptionIndex: 1,
    explanation: 'Ante un conflicto de intereses, el miembro del comité debe declararse impedido y ser reemplazado para garantizar la transparencia del proceso.'
  },

  // Casos de Atención al Ciudadano
  {
    id: 803,
    axisId: 3,
    text: 'Un ciudadano llega a la oficina exigiendo hablar con el alcalde porque no ha recibido respuesta a su derecho de petición. Se muestra agresivo. ¿Cómo maneja la situación?',
    options: [
      'Llamar a seguridad para que lo retire de las instalaciones.',
      'Escucharlo con calma, verificar el estado de su solicitud y ofrecerle una respuesta clara.',
      'Decirle que el alcalde no está disponible y pedirle que deje sus datos.',
      'Asegurarle que su petición será atendida sin verificar su estado actual.'
    ],
    correctOptionIndex: 1,
    explanation: 'Mantener la calma, escuchar activamente y ofrecer información precisa es clave. Si el derecho de petición está vencido, explicar las vías de recurso.'
  },

  // Casos de Ética Pública
  {
    id: 804,
    axisId: 6,
    text: 'Un proveedor le ofrece un bono en efectivo por agilizar el pago de una factura atrasada. ¿Qué hace?',
    options: [
      'Aceptar el bono si realmente necesita el dinero.',
      'Rechazar el ofrecimiento y reportar el hecho al comité de ética.',
      'Aceptar el dinero pero donarlo a una fundación.',
      'Pedir que el pase se haga en especie en lugar de efectivo.'
    ],
    correctOptionIndex: 1,
    explanation: 'Aceptar cualquier tipo de retribución por realizar actos propios del cargo constituye un acto de corrupción. Debe rechazarse y reportarse.'
  },

  // Casos de Gestión Documental
  {
    id: 805,
    axisId: 4,
    text: 'Al realizar una auditoría, descubre que documentos importantes de contratos antiguos fueron eliminados antes de cumplir su tiempo de retención. ¿Qué acción toma?',
    options: [
      'No hacer nada, ya fueron eliminados.',
      'Reportar el hallazgo al jefe de archivo y al área de control interno.',
      'Solicitar al personal que intente recuperar los documentos de la papelera de reciclaje.',
      'Eliminar también los registros de la eliminación para evitar problemas.'
    ],
    correctOptionIndex: 1,
    explanation: 'La eliminación prematura de documentos es una falta grave que debe ser reportada a las instancias de control para que determinen las responsabilidades.'
  },

  // Casos de Comunicación Institucional
  {
    id: 806,
    axisId: 3,
    text: 'Un medio de comunicación le pide información sobre una investigación interna en curso que podría afectar la imagen de la entidad. ¿Cómo responde?',
    options: [
      'Proporcionar toda la información para ser transparente.',
      'Negarse a dar cualquier información sobre el tema.',
      'Indicar que la información está en proceso de recolección y ofrecer una respuesta posterior.',
      'Derivar al periodista al asesor de comunicaciones sin más comentarios.'
    ],
    correctOptionIndex: 3,
    explanation: 'Las investigaciones internas deben manejarse con confidencialidad. El asesor de comunicaciones es el encargado de manejar la relación con los medios.'
  },

  // Casos de Manejo de Recursos Públicos
  {
    id: 807,
    axisId: 2,
    text: 'Su jefe le pide que utilice los recursos de la oficina para imprimir material de su campaña política. ¿Qué hace?',
    options: [
      'Negarse rotundamente y explicar que es un uso indebido de recursos públicos.',
      'Hacer la impresión pero pedirle que reponga el material utilizado.',
      'Hacer la impresión para evitar problemas con su jefe.',
      'Ofrecerse a ayudarle después de horas de trabajo con recursos personales.'
    ],
    correctOptionIndex: 0,
    explanation: 'El uso de recursos públicos para actividades particulares o políticas está estrictamente prohibido. Se debe negar la solicitud y explicar la normativa.'
  },

  // Casos de Inclusión y Diversidad
  {
    id: 808,
    axisId: 7,
    text: 'Una persona transgénero llega a realizar un trámite, pero sus documentos de identidad no coinciden con su expresión de género. ¿Cómo procede?',
    options: [
      'Negarse a atenderla hasta que actualice sus documentos.',
      'Atenderla con el nombre que aparece en su documento, aunque no coincida con su identidad.',
      'Atenderla usando el nombre con el que se identifica y verificar la identidad con otros documentos.',
      'Pedirle que regrese con un familiar que pueda identificarla.'
    ],
    correctOptionIndex: 2,
    explanation: 'Se debe garantizar el derecho a la identidad de género. La persona puede ser atendida con el nombre con el que se identifica, verificando su identidad con la fotografía y datos biométricos.'
  },

  // Casos de Seguridad de la Información
  {
    id: 809,
    axisId: 5,
    text: 'Recibe un correo que parece ser del área de sistemas, pidiendo sus credenciales de acceso para una "actualización de seguridad". ¿Qué hace?',
    options: [
      'Responder inmediatamente con sus credenciales solicitadas.',
      'Reenviar el correo al área de TI para verificación sin responderlo.',
      'Hacer clic en los enlaces del correo para verificar su autenticidad.',
      'Eliminar el correo sin más acciones.'
    ],
    correctOptionIndex: 1,
    explanation: 'Este es un intento clásico de phishing. Nunca se deben compartir credenciales por correo. Lo correcto es reportarlo al área de TI sin interactuar con los enlaces.'
  },

  // Caso Final - Dilema Ético Complejo
  {
    id: 810,
    axisId: 6,
    text: 'Descubre que un compañero cercano ha estado desviando pequeños montos de dinero de proyectos comunitarios. Al confrontarlo, le explica que lo hace para completar su salario, que no le alcanza para mantener a su familia. ¿Qué hace?',
    options: [
      'Hacer la vista gorda porque entiende su situación económica.',
      'Reportarlo inmediatamente a las autoridades competentes.',
      'Ofrecerle ayuda económica personal a cambio de que deje de hacerlo.',
      'Darle un plazo para que reponga el dinero antes de tomar acciones.'
    ],
    correctOptionIndex: 1,
    explanation: 'El desvío de recursos públicos es un delito que debe ser reportado, independientemente del monto o la justificación. No denunciarlo podría hacerlo cómplice de la falta.'
  }
];

// Combinar todas las preguntas
export const QUESTIONS: Question[] = [
  ...BASE_QUESTIONS,
  ...ADDITIONAL_QUESTIONS,
  ...MORE_QUESTIONS
].map((q, index) => ({
  ...q,
  // Asegurarse de que los IDs sean únicos y secuenciales
  id: index + 1
}));

export default QUESTIONS;
