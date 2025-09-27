import type { ThematicAxis, Question } from '../types';

export const THEMATIC_AXES: ThematicAxis[] = [
  {
    id: 1,
    name: 'Constitución Política de Colombia',
    description: 'Preguntas sobre la estructura del estado y derechos fundamentales.',
    icon: 'fa-landmark-flag',
  },
  {
    id: 2,
    name: 'Estructura y Funcionamiento del Estado',
    description: 'Preguntas sobre la organización y funcionamiento del estado colombiano.',
    icon: 'fa-building-columns',
  },
  {
    id: 3,
    name: 'Servicio al Ciudadano',
    description: 'Preguntas sobre atención y servicio al ciudadano en entidades públicas.',
    icon: 'fa-people-arrows',
  },
  {
    id: 4,
    name: 'Sistema Integrado de Gestión',
    description: 'Preguntas sobre el sistema de gestión en entidades públicas.',
    icon: 'fa-gears',
  },
  {
    id: 5,
    name: 'Ofimática',
    description: 'Preguntas sobre herramientas ofimáticas como Word, Excel y PowerPoint.',
    icon: 'fa-laptop',
  },
  {
    id: 6,
    name: 'Archivo',
    description: 'Preguntas sobre gestión documental y archivo de documentos.',
    icon: 'fa-folder',
  },
  {
    id: 7,
    name: 'Técnicas de redacción y ortografía',
    description: 'Preguntas sobre normas gramaticales, ortográficas y de redacción para la comunicación efectiva en el ámbito laboral.',
    icon: 'fa-spell-check',
  },
];

export const QUESTIONS: Question[] = [
  // Constitución Política de Colombia (30 Preguntas)
  {
    id: 1,
    axisId: 1,
    text: 'Un ciudadano solicita a una entidad pública copia de un documento oficial. El funcionario duda si debe entregarlo porque contiene información personal de otro ciudadano. ¿Qué principio debe primar en este caso?',
    options: [
      'El derecho de petición sobre cualquier otra norma.',
      'La reserva legal y protección de datos personales.',
      'La publicidad de los actos públicos sin excepción.',
      'La autonomía administrativa de la entidad.'
    ],
    correctOptionIndex: 1,
    explanation: 'La reserva legal y protección de datos personales debe primar, ya que la información personal está protegida por la Constitución y la ley de protección de datos.'
  },
  {
    id: 102,
    axisId: 1,
    text: '¿Qué entidad ejerce el control constitucional en Colombia?',
    options: [
      'El Consejo de Estado',
      'La Corte Suprema de Justicia',
      'La Corte Constitucional',
      'La Fiscalía General de la Nación'
    ],
    correctOptionIndex: 2,
    explanation: 'La Corte Constitucional tiene como función principal la guarda de la integridad y supremacía de la Constitución.'
  },
  {
    id: 103,
    axisId: 1,
    text: 'Un ciudadano interpone una acción de tutela buscando la protección de su derecho al trabajo. ¿Ante qué juez se puede presentar esta acción?',
    options: [
      'Únicamente ante la Corte Constitucional',
      'Ante cualquier juez o tribunal de la República',
      'Solamente ante los jueces laborales',
      'Ante la Procuraduría General de la Nación'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción de tutela puede ser interpuesta ante cualquier juez de la República, quien tiene la obligación de tramitarla de manera preferente y sumaria para proteger los derechos fundamentales.'
  },
  {
    id: 104,
    axisId: 1,
    text: '¿Cuál es el período de los senadores de la República en Colombia?',
    options: ['Dos años', 'Cuatro años', 'Cinco años', 'Seis años'],
    correctOptionIndex: 1,
    explanation: 'Según la Constitución Política de Colombia, los senadores son elegidos para un período de cuatro años.'
  },
  {
    id: 105,
    axisId: 1,
    text: 'El derecho de petición, consagrado en el artículo 23 de la Constitución, es fundamentalmente un derecho de:',
    options: [
      'Acceso a la justicia',
      'Participación política',
      'Obtener pronta resolución a solicitudes respetuosas',
      'Libertad de expresión'
    ],
    correctOptionIndex: 2,
    explanation: 'El derecho de petición permite a toda persona presentar solicitudes respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución.'
  },
  {
    id: 106,
    axisId: 1,
    text: 'La rama legislativa del poder público en Colombia está conformada por:',
    options: [
      'La Presidencia y los Ministerios',
      'Las altas cortes',
      'El Senado de la República y la Cámara de Representantes',
      'Las Gobernaciones y las Alcaldías'
    ],
    correctOptionIndex: 2,
    explanation: 'El Congreso de la República, compuesto por el Senado y la Cámara de Representantes, conforma la rama legislativa.'
  },
   {
    id: 107,
    axisId: 1,
    text: '¿Cuál de las siguientes acciones se utiliza para proteger derechos e intereses colectivos, como el goce de un ambiente sano?',
    options: ['Acción de Tutela', 'Acción de Cumplimiento', 'Acción Popular', 'Habeas Corpus'],
    correctOptionIndex: 2,
    explanation: 'Las Acciones Populares son el mecanismo constitucional para la protección de los derechos e intereses colectivos.'
  },
  {
    id: 108,
    axisId: 1,
    text: 'El Presidente de la República de Colombia es elegido para un período de cuatro años y:',
    options: [
      'Puede ser reelegido indefinidamente',
      'Puede ser reelegido para el período inmediatamente siguiente',
      'No puede ser reelegido en ningún caso',
      'Puede ser reelegido una sola vez, después de un período'
    ],
    correctOptionIndex: 2,
    explanation: 'La reforma constitucional de 2015 eliminó la reelección presidencial. Un ciudadano que ha ejercido la presidencia no podrá ser elegido nuevamente para este cargo.'
  },
  {
    id: 109,
    axisId: 1,
    text: 'La soberanía de Colombia reside exclusiva y esencialmente en:',
    options: ['El Presidente', 'El Congreso', 'El Pueblo', 'Las Fuerzas Armadas'],
    correctOptionIndex: 2,
    explanation: 'El Artículo 3 de la Constitución Política de Colombia establece que la soberanía reside exclusivamente en el pueblo, del cual emana el poder público.'
  },
  {
    id: 110,
    axisId: 1,
    text: 'Un decreto con fuerza de ley expedido por el Presidente en uso de facultades extraordinarias es un ejemplo de colaboración entre las ramas del poder. ¿Qué rama le otorga estas facultades?',
    options: [
      'La rama judicial',
      'La rama legislativa',
      'La rama ejecutiva misma',
      'Los organismos de control'
    ],
    correctOptionIndex: 1,
    explanation: 'El Congreso (rama legislativa) puede revestir, hasta por seis meses, al Presidente de precisas facultades extraordinarias para expedir normas con fuerza de ley.'
  },
  {
    id: 111,
    axisId: 1,
    text: '¿Qué es un Estado Social de Derecho, como se define Colombia en su Constitución?',
    options: [
      'Un Estado donde solo importan los derechos sociales.',
      'Un Estado que interviene en la economía para garantizar la igualdad de oportunidades.',
      'Un Estado que se rige por la ley y busca la justicia social y la dignidad humana.',
      'Un Estado donde el gobierno tiene poder absoluto.'
    ],
    correctOptionIndex: 2,
    explanation: 'Un Estado Social de Derecho combina el respeto por la legalidad (Estado de Derecho) con la búsqueda activa de la justicia social y la garantía de condiciones de vida dignas para todos los ciudadanos.'
  },
  {
    id: 112,
    axisId: 1,
    text: 'El principio de la "buena fe" en la Constitución implica que:',
    options: [
      'Las autoridades y los particulares deben actuar con honestidad y lealtad.',
      'Solo los particulares deben actuar de buena fe.',
      'Solo las autoridades deben actuar de buena fe.',
      'Es una recomendación moral sin efectos jurídicos.'
    ],
    correctOptionIndex: 0,
    explanation: 'El artículo 83 de la Constitución presume la buena fe en todas las gestiones que los particulares adelanten ante las autoridades, y es un principio que debe regir las actuaciones de ambos.'
  },
  {
    id: 113,
    axisId: 1,
    text: '¿Quién es el Comandante Supremo de las Fuerzas Armadas de la República de Colombia?',
    options: [
      'El Ministro de Defensa',
      'El General de mayor rango',
      'El Presidente de la República',
      'El Director de la Policía Nacional'
    ],
    correctOptionIndex: 2,
    explanation: 'Por mandato constitucional (Artículo 189), el Presidente de la República ostenta el cargo de Comandante Supremo de las Fuerzas Armadas.'
  },
  {
    id: 114,
    axisId: 1,
    text: 'La moción de censura es un mecanismo de control político que puede ser ejercido por el Congreso en contra de:',
    options: [
      'El Presidente de la República',
      'Los Magistrados de las Altas Cortes',
      'Los Ministros',
      'El Fiscal General de la Nación'
    ],
    correctOptionIndex: 2,
    explanation: 'La moción de censura, propuesta por una de las cámaras, puede concluir con la remoción de los ministros, superintendentes y directores de departamentos administrativos.'
  },
  {
    id: 115,
    axisId: 1,
    text: 'El derecho a la "libertad de conciencia" garantiza que:',
    options: [
      'Se puede actuar en contra de la ley si la conciencia lo dicta.',
      'Nadie será molestado por razón de sus convicciones o creencias.',
      'Solo se pueden profesar religiones aprobadas por el Estado.',
      'Se puede obligar a otros a compartir las mismas convicciones.'
    ],
    correctOptionIndex: 1,
    explanation: 'El Artículo 18 de la Constitución protege la libertad de conciencia, asegurando que nadie puede ser obligado a actuar contra su conciencia ni ser molestado por sus convicciones.'
  },
  {
    id: 116,
    axisId: 1,
    text: '¿Cuál de los siguientes es un "organismo de control" según la estructura del Estado colombiano?',
    options: [
      'El Ministerio de Hacienda',
      'El Banco de la República',
      'La Contraloría General de la República',
      'El Consejo Nacional Electoral'
    ],
    correctOptionIndex: 2,
    explanation: 'La Contraloría General de la República, junto con la Procuraduría General de la Nación y la Defensoría del Pueblo, forma parte de los organismos de control.'
  },
  {
    id: 117,
    axisId: 1,
    text: 'Para reformar la Constitución Política de Colombia, uno de los mecanismos es:',
    options: [
      'Un decreto presidencial',
      'Una ley ordinaria aprobada por mayoría simple',
      'Una Asamblea Nacional Constituyente',
      'Una consulta popular'
    ],
    correctOptionIndex: 2,
    explanation: 'El Título XIII de la Constitución establece tres mecanismos de reforma: el acto legislativo (Congreso), la Asamblea Constituyente o el referendo.'
  },
  {
    id: 118,
    axisId: 1,
    text: 'El "bloque de constitucionalidad" se refiere a:',
    options: [
      'Los artículos de la Constitución que no se pueden modificar.',
      'Normas y principios que, sin estar en la Constitución, se usan como parámetro de control constitucional.',
      'El edificio de la Corte Constitucional.',
      'Una propuesta para bloquear reformas a la Constitución.'
    ],
    correctOptionIndex: 1,
    explanation: 'El bloque de constitucionalidad está compuesto por la Constitución y ciertos tratados internacionales de derechos humanos que prevalecen en el orden interno y sirven como parámetro de control constitucional.'
  },
  {
    id: 119,
    axisId: 1,
    text: '¿Qué es el "Habeas Corpus"?',
    options: [
      'Un recurso para proteger el derecho al buen nombre.',
      'Un derecho fundamental y una acción para proteger la libertad personal contra detenciones ilegales.',
      'Una orden para que el Estado revele información pública.',
      'Un mecanismo para proteger la propiedad privada.'
    ],
    correctOptionIndex: 1,
    explanation: 'El Habeas Corpus es una garantía fundamental que protege a cualquier persona privada de la libertad de forma ilegal, permitiéndole solicitar a un juez que resuelva su situación jurídica en un término de 36 horas.'
  },
  {
    id: 120,
    axisId: 1,
    text: 'La acción de cumplimiento tiene como finalidad:',
    options: [
      'Hacer efectivo el cumplimiento de una ley o un acto administrativo.',
      'Proteger derechos colectivos.',
      'Proteger derechos fundamentales.',
      'Cumplir las sentencias de los jueces.'
    ],
    correctOptionIndex: 0,
    explanation: 'Esta acción está diseñada para que cualquier persona pueda acudir ante la autoridad judicial para exigir el cumplimiento de una norma con fuerza de ley o un acto administrativo.'
  },
  {
    id: 121,
    axisId: 1,
    text: '¿Cuál es la edad mínima para ser elegido Presidente de la República en Colombia?',
    options: ['25 años', '30 años', '35 años', '40 años'],
    correctOptionIndex: 1,
    explanation: 'Según el Artículo 191 de la Constitución, para ser Presidente se requiere ser colombiano por nacimiento, ciudadano en ejercicio y mayor de treinta años.'
  },
  {
    id: 122,
    axisId: 1,
    text: 'Los departamentos en Colombia son gobernados por un Gobernador y una:',
    options: ['Cámara de Representantes', 'Asamblea Departamental', 'Concejo Municipal', 'Junta Administradora Local'],
    correctOptionIndex: 1,
    explanation: 'Cada departamento tiene una Asamblea Departamental, que es la corporación político-administrativa de elección popular que ejerce control político sobre los actos del Gobernador.'
  },
  {
    id: 123,
    axisId: 1,
    text: '¿Qué derecho fundamental protege el Artículo 15 de la Constitución?',
    options: ['El derecho a la vida', 'El derecho a la intimidad personal y familiar y al buen nombre', 'El derecho al trabajo', 'El derecho a la paz'],
    correctOptionIndex: 1,
    explanation: 'El Artículo 15 consagra el derecho a la intimidad y el buen nombre, y establece el Habeas Data, que es el derecho a conocer, actualizar y rectificar la información en bases de datos.'
  },
  {
    id: 124,
    axisId: 1,
    text: 'La Fiscalía General de la Nación pertenece a la rama:',
    options: ['Ejecutiva', 'Legislativa', 'Judicial', 'No pertenece a ninguna rama'],
    correctOptionIndex: 2,
    explanation: 'La Fiscalía General de la Nación forma parte de la Rama Judicial y goza de autonomía administrativa y presupuestal.'
  },
  {
    id: 125,
    axisId: 1,
    text: 'El "Estado de Conmoción Interior" puede ser declarado por el Presidente con la firma de todos los ministros para:',
    options: ['Afrontar una grave perturbación del orden público que atente contra la estabilidad institucional.', 'Realizar una reforma económica.', 'Suspender las elecciones.', 'Cambiar la Constitución.'],
    correctOptionIndex: 0,
    explanation: 'El Estado de Conmoción Interior es un estado de excepción que permite al gobierno tomar medidas extraordinarias para conjurar una grave perturbación del orden público.'
  },
  {
    id: 126,
    axisId: 1,
    text: '¿Cuál es la máxima autoridad de la jurisdicción contencioso-administrativa?',
    options: ['La Corte Suprema de Justicia', 'La Corte Constitucional', 'El Consejo de Estado', 'El Consejo Superior de la Judicatura'],
    correctOptionIndex: 2,
    explanation: 'El Consejo de Estado actúa como tribunal supremo de lo contencioso-administrativo y cuerpo consultivo del Gobierno.'
  },
  {
    id: 127,
    axisId: 1,
    text: 'Un municipio es la entidad fundamental de la división político-administrativa del Estado. ¿Quién es la máxima autoridad administrativa en un municipio?',
    options: ['El Gobernador', 'El Concejal', 'El Alcalde', 'El Personero'],
    correctOptionIndex: 2,
    explanation: 'El Alcalde es el jefe de la administración local y representante legal del municipio, elegido popularmente para un período de cuatro años.'
  },
  {
    id: 128,
    axisId: 1,
    text: 'El derecho a la "igualdad" consagrado en el Artículo 13 de la Constitución implica que:',
    options: ['Todas las personas deben tener exactamente los mismos bienes.', 'La ley debe ser la misma para todos y no se pueden conceder privilegios.', 'Se prohíbe cualquier tipo de discriminación.', 'Ambas opciones B y C son correctas.'],
    correctOptionIndex: 3,
    explanation: 'El derecho a la igualdad significa que todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación.'
  },
  {
    id: 129,
    axisId: 1,
    text: '¿Quién elige al Fiscal General de la Nación?',
    options: ['El Presidente de la República de una terna enviada por la Corte Suprema de Justicia.', 'La Corte Suprema de Justicia de una terna enviada por el Presidente de la República.', 'El Congreso en pleno.', 'Es elegido por voto popular.'],
    correctOptionIndex: 1,
    explanation: 'El Fiscal General de la Nación es elegido por la Corte Suprema de Justicia para un período de cuatro años, de una terna enviada por el Presidente de la República.'
  },
  {
    id: 130,
    axisId: 1,
    text: 'Los "derechos fundamentales" en la Constitución colombiana se caracterizan por:',
    options: ['Ser de aplicación inmediata y protegibles mediante acción de tutela.', 'Necesitar siempre una ley que los desarrolle para poder ser exigidos.', 'Ser derechos únicamente de los ciudadanos colombianos.', 'Poder ser suspendidos permanentemente por el gobierno.'],
    correctOptionIndex: 0,
    explanation: 'Los derechos fundamentales, como la vida, la igualdad y la libertad, son de aplicación inmediata y cuentan con la acción de tutela como mecanismo principal para su protección.'
  },
  { id: 131, axisId: 1, text: 'El Preámbulo de la Constitución Política de 1991 invoca la protección de:', options: ['El Estado', 'La Nación', 'Dios', 'El Presidente'], correctOptionIndex: 2, explanation: 'El Preámbulo de la Constitución invoca la protección de Dios para fortalecer la unidad de la Nación y asegurar los bienes de la vida, la convivencia, el trabajo, la justicia, la igualdad, el conocimiento, la libertad y la paz.' },
  { id: 132, axisId: 1, text: '¿Qué principio establece que Colombia es una República "descentralizada, con autonomía de sus entidades territoriales"?', options: ['Principio de soberanía popular', 'Principio de separación de poderes', 'Principio de organización territorial', 'Principio de Estado Social de Derecho'], correctOptionIndex: 2, explanation: 'El Artículo 1 de la Constitución define la organización territorial del Estado, estableciendo la descentralización y la autonomía de las entidades territoriales (departamentos, municipios, etc.).' },
  { id: 133, axisId: 1, text: 'La Defensoría del Pueblo forma parte del:', options: ['Poder Ejecutivo', 'Poder Judicial', 'Ministerio Público', 'Congreso de la República'], correctOptionIndex: 2, explanation: 'La Defensoría del Pueblo, junto con la Procuraduría General de la Nación, integra el Ministerio Público y tiene como función la guarda y promoción de los derechos humanos.' },
  { id: 134, axisId: 1, text: 'El derecho a la libre asociación permite a las personas:', options: ['Crear partidos políticos únicamente.', 'Reunirse para cualquier fin ilícito.', 'Constituir libremente organizaciones sin la intervención del Estado.', 'Asociarse solo con fines de lucro.'], correctOptionIndex: 2, explanation: 'El Artículo 38 garantiza el derecho de libre asociación para el desarrollo de las distintas actividades que las personas realizan en sociedad, siempre que sus fines sean lícitos.' },
  { id: 135, axisId: 1, text: '¿Quién puede presentar proyectos de ley ante el Congreso?', options: ['Solamente los congresistas', 'El Gobierno Nacional, los congresistas, las altas cortes, entre otros.', 'Solo el Presidente de la República.', 'Cualquier ciudadano directamente.'], correctOptionIndex: 1, explanation: 'La iniciativa legislativa la tienen el Gobierno, los miembros del Congreso, la Corte Constitucional, la Corte Suprema, el Consejo de Estado, el Consejo Superior de la Judicatura, el Consejo Nacional Electoral, el Procurador, el Contralor, el Fiscal y, a través de iniciativa popular, los ciudadanos.' },
  { id: 136, axisId: 1, text: 'El concepto de "mínimo vital" desarrollado por la Corte Constitucional se refiere a:', options: ['El salario mínimo legal vigente.', 'Las condiciones materiales básicas e indispensables para una existencia digna.', 'El derecho a tener un trabajo.', 'El mínimo de calorías que una persona debe consumir.'], correctOptionIndex: 1, explanation: 'El mínimo vital es un derecho fundamental que garantiza a toda persona las condiciones materiales de subsistencia (alimentación, vivienda, salud, etc.) para vivir de manera digna.' },
  { id: 137, axisId: 1, text: '¿Cuál es la función principal del Consejo Nacional Electoral (CNE)?', options: ['Contar los votos en las elecciones.', 'Regular, inspeccionar, vigilar y controlar la actividad electoral.', 'Organizar la logística de las elecciones.', 'Sancionar a los candidatos.'], correctOptionIndex: 1, explanation: 'El CNE es la máxima autoridad electoral, encargada de la suprema inspección y vigilancia de la organización electoral y de garantizar que las votaciones traduzcan la expresión libre, espontánea y auténtica de los ciudadanos.' },
  { id: 138, axisId: 1, text: 'El sufragio en Colombia es una función y un derecho. Se caracteriza por ser:', options: ['Universal, secreto y obligatorio', 'Universal, público y voluntario', 'Restringido, secreto y voluntario', 'Universal, secreto y voluntario'], correctOptionIndex: 3, explanation: 'El voto es un derecho y un deber ciudadano. Es universal (para todos los ciudadanos mayores de edad), secreto (nadie puede ser obligado a revelar su voto) y voluntario (no hay sanción por no votar).' },
  { id: 139, axisId: 1, text: 'Los tratados internacionales ratificados por Colombia que reconocen derechos humanos y prohíben su limitación en estados de excepción:', options: ['Tienen menor jerarquía que las leyes ordinarias.', 'Prevalecen en el orden interno.', 'Son solo una guía para los jueces.', 'Pueden ser derogados por un decreto presidencial.'], correctOptionIndex: 1, explanation: 'Según el Artículo 93 de la Constitución, estos tratados forman parte del bloque de constitucionalidad y prevalecen sobre la legislación interna.' },
  { id: 140, axisId: 1, text: '¿Qué se entiende por "voto programático"?', options: ['Votar por un programa de televisión.', 'La obligación del elector de votar por el programa del partido.', 'El derecho de los electores a que el candidato elegido cumpla el programa de gobierno que propuso.', 'Un voto que se programa con anticipación.'], correctOptionIndex: 2, explanation: 'El voto programático obliga a los gobernadores y alcaldes a cumplir con el programa de gobierno que inscribieron al momento de su candidatura, so pena de poder ser revocados de su mandato.' },
  { id: 141, axisId: 1, text: 'La revocatoria del mandato es un mecanismo de participación ciudadana que aplica para:', options: ['Presidente y Congresistas', 'Gobernadores y Alcaldes', 'Magistrados de Altas Cortes', 'Todos los cargos de elección popular'], correctOptionIndex: 1, explanation: 'Este mecanismo permite a los ciudadanos dar por terminado el mandato de un gobernador o alcalde que no haya cumplido con su programa de gobierno.' },
  { id: 142, axisId: 1, text: 'El principio de "cosa juzgada constitucional" implica que:', options: ['Los fallos de la Corte Constitucional pueden ser revisados por cualquier juez.', 'Una vez la Corte Constitucional se pronuncia sobre una norma, no se puede volver a demandar por las mismas razones.', 'La Constitución no puede ser juzgada.', 'Todos los casos deben ser juzgados según la Constitución.'], correctOptionIndex: 1, explanation: 'Este principio otorga carácter definitivo e inmutable a las sentencias de la Corte Constitucional, evitando que haya inseguridad jurídica sobre la exequibilidad de las normas.' },
  { id: 143, axisId: 1, text: 'La doble instancia, como garantía del debido proceso, significa que:', options: ['Una persona puede ser juzgada dos veces por el mismo hecho.', 'Toda sentencia judicial puede ser apelada o consultada ante un juez superior.', 'Se necesitan dos jueces para tomar una decisión.', 'El proceso tiene dos etapas: investigación y juicio.'], correctOptionIndex: 1, explanation: 'Salvo las excepciones consagradas en la ley, toda sentencia judicial debe poder ser impugnada ante una autoridad judicial de mayor jerarquía para su revisión.' },
  { id: 144, axisId: 1, text: '¿Quién tiene la competencia para juzgar al Presidente de la República por delitos cometidos en ejercicio de sus funciones?', options: ['La Corte Suprema de Justicia', 'El Senado de la República', 'La Corte Constitucional', 'La Comisión de Acusaciones de la Cámara de Representantes lo investiga y el Senado lo juzga.'], correctOptionIndex: 3, explanation: 'La Cámara de Representantes acusa y el Senado juzga al Presidente (o a quien haga sus veces) por delitos cometidos en el ejercicio de sus funciones, previo dictamen de la Comisión de Acusaciones.' },
  { id: 145, axisId: 1, text: 'El derecho a la protesta social pacífica está garantizado en la Constitución como una manifestación de:', options: ['El derecho a la rebelión', 'Los derechos de reunión y de libertad de expresión', 'El derecho al trabajo', 'Un estado de anarquía'], correctOptionIndex: 1, explanation: 'El Artículo 37 garantiza el derecho a reunirse y manifestarse pública y pacíficamente, siendo una extensión de las libertades de expresión y reunión.' },
  { id: 146, axisId: 1, text: '¿Cuál de los siguientes NO es un deber de la persona y del ciudadano según el Artículo 95 de la Constitución?', options: ['Respetar los derechos ajenos y no abusar de los propios.', 'Obrar conforme al principio de solidaridad social.', 'Pagar tributos según los conceptos de justicia y equidad.', 'Pertenecer a un partido político.'], correctOptionIndex: 3, explanation: 'Pertenecer a un partido político es un derecho de participación política, pero no un deber constitucional general para todos los ciudadanos.' },
  { id: 147, axisId: 1, text: 'La "unidad de materia" en el proceso legislativo significa que:', options: ['Todas las leyes deben tratar sobre un solo tema.', 'Todo proyecto de ley debe referirse a una misma materia y serán inadmisibles las disposiciones que no se relacionen con ella.', 'Los congresistas solo pueden especializarse en una materia.', 'Las leyes deben ser unitarias y no tener artículos.'], correctOptionIndex: 1, explanation: 'Este principio busca garantizar la coherencia y la técnica legislativa, evitando que en una ley se incluyan temas inconexos o "micos".' },
  { id: 148, axisId: 1, text: 'El principio de "progresividad" de los derechos sociales, económicos y culturales implica que:', options: ['El Estado debe garantizar su satisfacción de manera inmediata y total.', 'El Estado debe avanzar gradualmente en su satisfacción y no puede retroceder injustificadamente.', 'Estos derechos solo se aplican a las generaciones futuras.', 'Estos derechos pueden ser eliminados en épocas de crisis.'], correctOptionIndex: 1, explanation: 'Este principio obliga al Estado a adoptar medidas para lograr progresivamente la plena efectividad de estos derechos, prohibiendo, en principio, las medidas regresivas.' },
  { id: 149, axisId: 1, text: '¿Quién expide el Plan Nacional de Desarrollo?', options: ['El Congreso mediante una ley.', 'El Presidente mediante un decreto.', 'El Departamento Nacional de Planeación (DNP).', 'El Ministerio de Hacienda.'], correctOptionIndex: 0, explanation: 'El Plan Nacional de Desarrollo, que contiene los objetivos y estrategias del gobierno, es elaborado por el Gobierno Nacional con participación de las autoridades de planeación y se aprueba mediante una ley expedida por el Congreso.' },
  { id: 150, axisId: 1, text: 'La autonomía universitaria, garantizada en el Artículo 69, permite a las universidades:', options: ['Incumplir las leyes del país.', 'Darse sus directivas y regirse por sus propios estatutos.', 'No pagar impuestos.', 'Cobrar matrículas sin ningún tipo de regulación.'], correctOptionIndex: 1, explanation: 'La autonomía universitaria les permite a las instituciones de educación superior establecer sus propios estatutos, designar sus autoridades y crear sus programas académicos, de acuerdo con la ley.' },

  // Función Pública (50 Preguntas)
  {
    id: 201,
    axisId: 2,
    text: 'Según la Ley 909 de 2004, ¿cuál es el principio rector de la carrera administrativa?',
    options: ['El mérito', 'La libre designación', 'La antigüedad', 'La discrecionalidad del nominador'],
    correctOptionIndex: 0,
    explanation: 'El mérito es el principio fundamental para el ingreso, la permanencia y el ascenso en los empleos de carrera administrativa.'
  },
  {
    id: 202,
    axisId: 2,
    text: 'Un empleo de "libre nombramiento y remoción" se caracteriza por:',
    options: [
      'Requerir un concurso público para su provisión',
      'Ser de período fijo',
      'Basarse en la discrecionalidad del nominador para su provisión y retiro',
      'Otorgar estabilidad laboral absoluta al empleado'
    ],
    correctOptionIndex: 2,
    explanation: 'Los empleos de libre nombramiento y remoción no se proveen por concurso y su retiro no requiere de un proceso disciplinario, basándose en la discrecionalidad del nominador.'
  },
  {
    id: 203,
    axisId: 2,
    text: 'Un servidor público en período de prueba es desvinculado por no superar la evaluación. ¿Tiene derecho a reclamar reintegro a su cargo anterior si era de carrera?',
    options: [
      'No, pierde todos los derechos',
      'Sí, siempre y cuando el cargo anterior aún exista',
      'Solo si la evaluación fue declarada nula por un juez',
      'Sí, pero debe volver a concursar'
    ],
    correctOptionIndex: 1,
    explanation: 'Un empleado con derechos de carrera que no supere el período de prueba en un nuevo cargo tiene derecho a ser reincorporado al empleo que venía desempeñando, si no ha sido suprimido.'
  },
  {
    id: 204,
    axisId: 2,
    text: 'La Comisión Nacional del Servicio Civil (CNSC) es responsable de:',
    options: [
      'Pagar los salarios de todos los servidores públicos',
      'Administrar y vigilar el sistema de carrera administrativa',
      'Ejercer el control disciplinario de los empleados',
      'Nombrar a los ministros del despacho'
    ],
    correctOptionIndex: 1,
    explanation: 'La CNSC es un órgano autónomo e independiente, responsable de la administración y vigilancia de las carreras de los servidores públicos, excepción hecha de las que tengan carácter especial.'
  },
   {
    id: 205,
    axisId: 2,
    text: '¿Qué es una "situación administrativa" para un servidor público?',
    options: [
      'Su estado civil',
      'Su nivel de endeudamiento',
      'La condición en la que se encuentra respecto al servicio (activo, licencia, permiso, etc.)',
      'Su afiliación política'
    ],
    correctOptionIndex: 2,
    explanation: 'Las situaciones administrativas definen la relación del servidor con la entidad. Incluyen el servicio activo, licencias, permisos, comisiones, encargos, entre otras.'
  },
  {
    id: 206,
    axisId: 2,
    text: 'El acoso laboral en el sector público se rige principalmente por la Ley:',
    options: ['Ley 80 de 1993', 'Ley 1010 de 2006', 'Ley 1952 de 2019', 'Ley 909 de 2004'],
    correctOptionIndex: 1,
    explanation: 'La Ley 1010 de 2006 adoptó medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.'
  },
  {
    id: 207,
    axisId: 2,
    text: 'Un empleado de carrera es trasladado a otra ciudad sin su consentimiento. El argumenta que su núcleo familiar está en su ciudad de origen. ¿Qué principio podría estar vulnerando la entidad?',
    options: [
      'Principio de economía',
      'Principio de mérito',
      'Principio de unidad familiar y derechos del trabajador',
      'Principio de celeridad'
    ],
    correctOptionIndex: 2,
    explanation: 'Aunque los traslados son una potestad del empleador, deben realizarse sin vulnerar los derechos fundamentales del trabajador, como la protección a la familia.'
  },
  {
    id: 208,
    axisId: 2,
    text: 'La etapa de "período de prueba" en la carrera administrativa tiene como objetivo:',
    options: [
      'Capacitar al nuevo empleado en todas las áreas de la entidad',
      'Verificar la afinidad del empleado con sus compañeros',
      'Apreciar la eficiencia, adaptación y condiciones personales en el ejercicio del empleo',
      'Pagar un salario inferior mientras el empleado aprende'
    ],
    correctOptionIndex: 2,
    explanation: 'El período de prueba es la etapa final del concurso en la que se evalúa la capacidad del aspirante para desempeñar satisfactoriamente las funciones del empleo.'
  },
  {
    id: 209,
    axisId: 2,
    text: '¿Cuál de las siguientes es una causal de retiro del servicio para un empleado público?',
    options: [
      'Obtener una evaluación de desempeño sobresaliente',
      'Cumplir 5 años en el mismo cargo',
      'Declaratoria de insubsistencia del nombramiento',
      'Solicitar una licencia no remunerada'
    ],
    correctOptionIndex: 2,
    explanation: 'La declaratoria de insubsistencia es una causal de retiro para empleos de libre nombramiento y remoción, o para empleados de carrera que obtengan una calificación no satisfactoria.'
  },
  {
    id: 210,
    axisId: 2,
    text: 'El Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) es una obligación para las entidades públicas con el fin de:',
    options: [
      'Mejorar la imagen corporativa',
      'Prevenir lesiones y enfermedades causadas por las condiciones de trabajo',
      'Aumentar la productividad de los empleados',
      'Reducir los costos de la nómina'
    ],
    correctOptionIndex: 1,
    explanation: 'El SG-SST busca la promoción de la salud y la prevención de accidentes y enfermedades laborales, protegiendo la integridad de todos los servidores.'
  },
  {
    id: 211,
    axisId: 2,
    text: '¿Qué es el "encargo" en la función pública?',
    options: [
      'Un contrato de prestación de servicios.',
      'Asignar a un empleado de carrera, temporalmente, las funciones de un empleo de superior jerarquía.',
      'Nombrar a una persona por fuera de la entidad para un cargo temporal.',
      'Un período de vacaciones.'
    ],
    correctOptionIndex: 1,
    explanation: 'El encargo es una situación administrativa mediante la cual se designa temporalmente a un empleado de carrera para asumir, total o parcialmente, las funciones de otro empleo vacante.'
  },
  {
    id: 212,
    axisId: 2,
    text: 'La "evaluación del desempeño laboral" para un empleado de carrera tiene como propósito principal:',
    options: [
      'Determinar si debe ser ascendido automáticamente.',
      'Servir de instrumento para el mejoramiento y la capacitación.',
      'Justificar el despido del empleado.',
      'Fijar el monto de su salario.'
    ],
    correctOptionIndex: 1,
    explanation: 'La evaluación del desempeño es una herramienta objetiva para medir las contribuciones laborales del empleado y detectar necesidades de capacitación y mejora continua.'
  },
  {
    id: 213,
    axisId: 2,
    text: '¿Cuál de los siguientes es un derecho de los empleados públicos de carrera administrativa?',
    options: [
      'A no ser evaluado en su desempeño.',
      'A la estabilidad en el empleo.',
      'A elegir a su superior inmediato.',
      'A negarse a cumplir órdenes.'
    ],
    correctOptionIndex: 1,
    explanation: 'Uno de los derechos más importantes de la carrera administrativa es la estabilidad laboral, que implica que el empleado no puede ser retirado salvo por las causales previstas en la ley.'
  },
  {
    id: 214,
    axisId: 2,
    text: 'Un servidor público que maneja recursos públicos y causa un detrimento patrimonial al Estado puede ser sujeto de un proceso de responsabilidad:',
    options: [
      'Únicamente disciplinaria',
      'Únicamente penal',
      'Disciplinaria, penal y fiscal',
      'Únicamente administrativa'
    ],
    correctOptionIndex: 2,
    explanation: 'Las responsabilidades de los servidores públicos son concurrentes. Una misma conducta puede generar responsabilidad disciplinaria (por incumplir deberes), fiscal (por daño al patrimonio) y penal (si la conducta es un delito).'
  },
  {
    id: 215,
    axisId: 2,
    text: 'El "Manual Específico de Funciones y de Competencias Laborales" en una entidad pública sirve para:',
    options: [
      'Determinar el código de vestimenta.',
      'Establecer los requisitos, funciones y competencias para cada empleo.',
      'Publicar las vacantes de la entidad.',
      'Definir los salarios de los directivos.'
    ],
    correctOptionIndex: 1,
    explanation: 'Este manual es un instrumento de gestión que describe de manera detallada las funciones de cada cargo y las competencias (conocimientos, habilidades) que se requieren para desempeñarlo.'
  },
  {
    id: 216,
    axisId: 2,
    text: '¿Qué es una "planta de personal" en una entidad pública?',
    options: [
      'El conjunto de árboles y jardines de la entidad.',
      'El listado de personas que trabajan por contrato de servicios.',
      'El conjunto de empleos permanentes previstos para el cumplimiento de las funciones de la entidad.',
      'El organigrama de la entidad.'
    ],
    correctOptionIndex: 2,
    explanation: 'La planta de personal determina el número, denominación, código y grado de los empleos necesarios para que la entidad cumpla su misión y objetivos.'
  },
  {
    id: 217,
    axisId: 2,
    text: '¿Un servidor público puede participar en política?',
    options: [
      'Sí, sin ninguna restricción.',
      'No, le está absolutamente prohibido.',
      'Sí, pero con limitaciones, como no usar su cargo para influir en procesos electorales.',
      'Solo si pertenece al partido de gobierno.'
    ],
    correctOptionIndex: 2,
    explanation: 'Los servidores públicos tienen prohibido, entre otras cosas, utilizar su cargo para presionar a particulares o subalternos a respaldar una causa o campaña política o para influir en procesos electorales de carácter político partidista.'
  },
  {
    id: 218,
    axisId: 2,
    text: 'La "comisión de servicios" es una situación administrativa que permite a un empleado:',
    options: [
      'Dejar de ir a trabajar por un tiempo.',
      'Ejercer temporalmente sus funciones en un lugar diferente a la sede habitual de trabajo.',
      'Estudiar en el exterior con salario pagado.',
      'Trabajar en una empresa privada.'
    ],
    correctOptionIndex: 1,
    explanation: 'La comisión de servicios se confiere para ejercer las funciones propias del empleo en un lugar diferente, cumplir misiones especiales o asistir a reuniones o capacitaciones.'
  },
  {
    id: 219,
    axisId: 2,
    text: '¿Qué diferencia principal existe entre un "empleado público" y un "trabajador oficial"?',
    options: [
      'Ninguna, son sinónimos.',
      'El empleado público tiene una relación legal y reglamentaria, mientras que el trabajador oficial tiene un contrato de trabajo.',
      'Los trabajadores oficiales no trabajan para el Estado.',
      'Los empleados públicos no reciben salario.'
    ],
    correctOptionIndex: 1,
    explanation: 'La vinculación del empleado público se formaliza con un acto de nombramiento y posesión. La del trabajador oficial, que labora en actividades de construcción y sostenimiento de obras públicas, se rige por un contrato laboral.'
  },
  {
    id: 220,
    axisId: 2,
    text: 'La "provisión transitoria" de un empleo de carrera a través de un nombramiento en provisionalidad procede cuando:',
    options: [
      'No hay lista de elegibles vigente producto de un concurso.',
      'El jefe lo decide discrecionalmente.',
      'El empleo es de libre nombramiento y remoción.',
      'El empleado de carrera pide una licencia.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los empleos de carrera deben proveerse mediante concurso. Sin embargo, mientras se surte el concurso, pueden ser provistos transitoriamente mediante nombramiento provisional.'
  },
  { id: 221, axisId: 2, text: 'El Sistema de Información y Gestión del Empleo Público (SIGEP) es una herramienta para:', options: ['Realizar los pagos de nómina', 'Registrar y actualizar las hojas de vida y la declaración de bienes y rentas de los servidores públicos', 'Vigilar la ejecución de los contratos estatales', 'Publicar las noticias de la entidad'], correctOptionIndex: 1, explanation: 'El SIGEP es el sistema oficial donde se centraliza la información de los servidores públicos y contratistas del Estado, incluyendo sus hojas de vida, declaraciones de bienes y rentas y otros datos relevantes.' },
  { id: 222, axisId: 2, text: '¿Qué es el "retén social"?', options: ['Un grupo de protesta de servidores públicos', 'La prohibición de ascender en la carrera administrativa', 'Una protección especial de estabilidad laboral para ciertos servidores en procesos de reestructuración', 'Un tipo de contrato para jóvenes'], correctOptionIndex: 2, explanation: 'El retén social es una protección especial que impide el retiro del servicio, en el marco de procesos de reestructuración, a servidores que son padres o madres cabeza de familia, personas con discapacidad o "pre-pensionados".' },
  { id: 223, axisId: 2, text: 'La "licencia no remunerada" para un servidor público implica:', options: ['Que puede ausentarse del trabajo y sigue recibiendo su salario.', 'La suspensión de la relación laboral y del pago de salarios por un tiempo determinado.', 'Que es despedido de su cargo.', 'Que debe trabajar desde casa sin recibir pago.'], correctOptionIndex: 1, explanation: 'Durante la licencia no remunerada, el servidor no presta el servicio y la entidad no está obligada a pagarle el salario, aunque se mantiene el vínculo laboral.' },
  { id: 224, axisId: 2, text: 'El Plan Institucional de Capacitación (PIC) tiene como objetivo:', options: ['Organizar las fiestas de fin de año de la entidad', 'Mejorar las competencias, habilidades y conocimientos de los servidores públicos', 'Evaluar el desempeño de los empleados', 'Contratar nuevo personal'], correctOptionIndex: 1, explanation: 'El PIC es un conjunto de programas de capacitación y formación que las entidades deben diseñar e implementar para fortalecer las competencias de sus servidores y mejorar el servicio.' },
  { id: 225, axisId: 2, text: '¿Un empleado público tiene derecho a la negociación colectiva?', options: ['No, está completamente prohibido.', 'Sí, pero solo sobre las condiciones salariales.', 'Sí, pero solo sobre las condiciones de empleo, excluyendo temas como la estructura del Estado o el mérito.', 'Sí, sin ninguna limitación, como en el sector privado.'], correctOptionIndex: 2, explanation: 'Los empleados públicos tienen derecho a la negociación colectiva para concertar las condiciones de empleo, pero existen materias excluidas, como la estructura de la administración, las competencias de la entidad, el mérito, etc.' },
  { id: 226, axisId: 2, text: '¿Cuál es la diferencia entre un "traslado" y una "permuta"?', options: ['No hay diferencia.', 'El traslado es impuesto por la entidad, la permuta es voluntaria entre dos empleados.', 'El traslado implica cambio de ciudad, la permuta no.', 'La permuta es entre dos servidores del mismo grado y funciones, y requiere acuerdo entre ellos y la autorización de los jefes.'], correctOptionIndex: 3, explanation: 'El traslado es un movimiento de personal que ordena la entidad. La permuta es un acuerdo voluntario entre dos empleados que desempeñan cargos con funciones y requisitos iguales, y que requiere la aprobación de la administración.' },
  { id: 227, axisId: 2, text: 'La declaración de "vacancia" de un empleo se produce cuando:', options: ['El empleado sale a vacaciones.', 'El empleado se ausenta injustificadamente por un período determinado.', 'La entidad decide eliminar el cargo.', 'El empleado cumple la edad de retiro forzoso.'], correctOptionIndex: 3, explanation: 'La vacancia definitiva de un empleo se da por varias causales, entre ellas, la renuncia, la destitución, el retiro por pensión o por alcanzar la edad de retiro forzoso (actualmente 70 años).' },
  { id: 228, axisId: 2, text: '¿Qué es el "fuero sindical" para un empleado público?', options: ['El derecho a no pagar la cuota sindical.', 'Una garantía para que ciertos empleados sindicalizados no sean despedidos o desmejorados sin justa causa y permiso judicial.', 'El lugar donde se reúnen los sindicatos.', 'La prohibición de formar sindicatos.'], correctOptionIndex: 1, explanation: 'El fuero sindical es una protección especial para los directivos sindicales que busca garantizar el derecho de asociación y la autonomía sindical, impidiendo represalias por su labor.' },
  { id: 229, axisId: 2, text: 'Si un servidor público renuncia y su renuncia no es aceptada en 30 días, ¿qué ocurre?', options: ['Debe seguir trabajando indefinidamente.', 'El servidor puede separarse del cargo sin incurrir en abandono del puesto.', 'La renuncia se considera automáticamente negada.', 'Debe presentar la renuncia de nuevo.'], correctOptionIndex: 1, explanation: 'Si la autoridad competente no acepta la renuncia dentro de los treinta días siguientes a su presentación, el empleado puede retirarse del cargo y la entidad está obligada a pagarle sus prestaciones.' },
  { id: 230, axisId: 2, text: 'El Modelo Integrado de Planeación y Gestión (MIPG) busca:', options: ['Reemplazar a todos los servidores públicos con tecnología.', 'Integrar los sistemas de gestión para que las entidades públicas sean más eficientes y transparentes.', 'Aumentar la burocracia en el Estado.', 'Crear un único sistema de contratación para todo el país.'], correctOptionIndex: 1, explanation: 'MIPG es un marco de referencia que dirige la gestión pública al logro de resultados y a la satisfacción de los ciudadanos, articulando diferentes políticas y sistemas de gestión.' },
  { id: 231, axisId: 2, text: 'Un empleado de carrera es nombrado en un cargo de libre nombramiento y remoción. ¿Qué pasa con sus derechos de carrera?', options: ['Los pierde inmediatamente.', 'Se le suspenden y puede solicitarlos de nuevo si se retira del cargo de libre nombramiento.', 'Debe renunciar a su cargo de carrera.', 'No puede ser nombrado en un cargo de libre nombramiento y remoción.'], correctOptionIndex: 1, explanation: 'Un empleado de carrera puede ser comisionado para desempeñar un cargo de libre nombramiento y remoción. En tal caso, no pierde sus derechos de carrera y, al finalizar la comisión, tiene derecho a ser reintegrado a su cargo original o a uno de igual nivel.' },
  { id: 232, axisId: 2, text: 'El Código de Integridad del Servicio Público se basa en valores como:', options: ['Honestidad, Respeto, Compromiso, Diligencia y Justicia.', 'Riqueza, Poder y Fama.', 'Competitividad, Individualismo y Eficacia.', 'Obediencia, Silencio y Disciplina.'], correctOptionIndex: 0, explanation: 'El Código de Integridad establece cinco valores fundamentales que deben guiar el actuar de todos los servidores públicos para generar confianza en la ciudadanía.' },
  { id: 233, axisId: 2, text: '¿Qué es una "inhabilidad" para ejercer un cargo público?', options: ['Una opinión personal sobre la política.', 'Una circunstancia prevista en la ley que impide a una persona ser elegida o designada en un cargo público.', 'No tener experiencia laboral.', 'No haber votado en las últimas elecciones.'], correctOptionIndex: 1, explanation: 'Las inhabilidades son restricciones para acceder a la función pública, basadas en antecedentes o situaciones personales (como haber sido condenado por delitos contra el patrimonio público) que buscan garantizar la idoneidad y moralidad de los servidores.' },
  { id: 234, axisId: 2, text: 'El "abandono del cargo" se configura cuando un servidor público:', options: ['Pide un permiso de tres días.', 'No regresa al trabajo después de sus vacaciones.', 'Se ausenta del trabajo por tres días consecutivos sin justa causa.', 'Presenta su renuncia.'], correctOptionIndex: 2, explanation: 'El abandono del cargo es una causal de retiro del servicio que se produce, entre otros casos, cuando el servidor se ausenta sin justificación por tres o más días consecutivos, lo que conlleva la declaratoria de vacancia del empleo.' },
  { id: 235, axisId: 2, text: '¿Cuál es la finalidad de la "lista de elegibles" en un concurso de méritos?', options: ['Es una lista de espera para futuros concursos.', 'Contiene los nombres de todos los que presentaron la prueba.', 'Establece el orden de mérito de los aspirantes que superaron el concurso para la provisión de los empleos.', 'Es una lista de recomendados por políticos.'], correctOptionIndex: 2, explanation: 'La lista de elegibles se conforma con los aspirantes que aprobaron todas las fases del concurso, en estricto orden de mérito, y con ella se deben proveer las vacantes ofertadas.' },
  { id: 236, axisId: 2, text: 'Un conflicto de intereses para un servidor público surge cuando:', options: ['Tiene una discusión con un compañero de trabajo.', 'Su interés particular y directo colide con el interés general que debe proteger.', 'No está de acuerdo con una política del gobierno.', 'Debe trabajar horas extras.'], correctOptionIndex: 1, explanation: 'Existe un conflicto de intereses cuando el servidor se enfrenta a una situación en la que debe tomar una decisión que podría beneficiarlo a él, a su cónyuge o a sus parientes, en contraposición al interés público.' },
  { id: 237, axisId: 2, text: 'La "prohibición de la doble asignación del tesoro público" significa que:', options: ['Un servidor no puede tener dos empleos.', 'Nadie puede recibir más de una asignación que provenga del tesoro público, salvo las excepciones legales.', 'El tesoro público no puede pagar dos veces la misma factura.', 'Un servidor no puede recibir un salario y una pensión al mismo tiempo.'], correctOptionIndex: 1, explanation: 'Esta prohibición constitucional y legal busca evitar que una persona reciba simultáneamente más de un sueldo o asignación pagada con recursos públicos, con algunas excepciones como las pensiones o los honorarios de los docentes.' },
  { id: 238, axisId: 2, text: '¿Qué es el "empleo temporal" en la función pública?', options: ['Un contrato de prestación de servicios.', 'Un cargo creado para suplir necesidades transitorias de la administración, por un tiempo determinado.', 'Un empleo de libre nombramiento y remoción.', 'Un cargo para personas sin experiencia.'], correctOptionIndex: 1, explanation: 'Los empleos temporales se crean para cumplir funciones no permanentes, como las relacionadas con proyectos especiales o el desarrollo de actividades de carácter transitorio, y no forman parte de la planta de personal permanente.' },
  { id: 239, axisId: 2, text: 'El principio de "moralidad" en la función administrativa obliga a los servidores a:', options: ['Asistir a ceremonias religiosas.', 'Actuar con rectitud, lealtad y honestidad en el ejercicio de sus funciones.', 'Vestir de una manera específica.', 'Tener un título en filosofía.'], correctOptionIndex: 1, explanation: 'El principio de moralidad exige que la actuación de los servidores públicos esté siempre guiada por el interés general y el cumplimiento de los fines del Estado, y no por intereses particulares o corruptos.' },
  { id: 240, axisId: 2, text: 'El derecho de un servidor a recibir "capacitación y estímulos" busca:', options: ['Asegurar que los servidores tengan fiestas de fin de año.', 'Mejorar su calidad de vida y potenciar su desempeño laboral.', 'Pagarles un salario adicional sin justificación.', 'Prepararlos para trabajar en el sector privado.'], correctOptionIndex: 1, explanation: 'Las entidades deben implementar programas de bienestar, estímulos y capacitación para mejorar el nivel de motivación, las competencias y la calidad de vida de sus servidores y sus familias.' },
  { id: 241, axisId: 2, text: 'La Ley de Cuotas (Ley 581 de 2000) busca garantizar:', options: ['Que al menos un 30% de los cargos de máximo nivel decisorio sean ocupados por mujeres.', 'Una cuota de empleos para jóvenes.', 'Una cuota de empleos para personas con discapacidad.', 'Que los hombres ocupen la mayoría de los cargos directivos.'], correctOptionIndex: 0, explanation: 'Esta ley establece que un mínimo del 30% de los cargos de máximo nivel decisorio y otros niveles directivos en la Rama Ejecutiva deben ser desempeñados por mujeres, para promover la participación equitativa.' },
  { id: 242, axisId: 2, text: '¿Qué es una "incompatibilidad" para un servidor público?', options: ['Tener malas relaciones con su jefe.', 'Una prohibición para realizar ciertas actividades o celebrar contratos que puedan interferir con el ejercicio imparcial de su cargo.', 'No ser compatible con la cultura de la entidad.', 'No tener las competencias para el cargo.'], correctOptionIndex: 1, explanation: 'Las incompatibilidades son prohibiciones que se le imponen al servidor público durante el ejercicio de sus funciones para evitar que su dedicación al servicio público se vea afectada por otras actividades o intereses.' },
  { id: 243, axisId: 2, text: 'El "teletrabajo" para los servidores públicos es:', options: ['Una modalidad laboral que permite desempeñar las funciones desde un lugar distinto a la oficina, usando tecnologías de la información.', 'Un permiso para no ir a trabajar.', 'Un tipo de contrato especial para tecnólogos.', 'Una forma de reducir el salario.'], correctOptionIndex: 0, explanation: 'El teletrabajo es una forma de organización laboral que no altera la naturaleza del vínculo laboral, pero permite que las funciones se realicen fuera de las instalaciones de la entidad, con los mismos derechos y deberes.' },
  { id: 244, axisId: 2, text: 'El "principio de igualdad de oportunidades" en el acceso a la función pública significa que:', options: ['Todos los ciudadanos tienen derecho a un cargo público.', 'El acceso a los cargos de carrera se basa en el mérito, sin discriminación de ningún tipo.', 'Los cargos se deben repartir por igual entre hombres y mujeres.', 'Los cargos se asignan por sorteo.'], correctOptionIndex: 1, explanation: 'Este principio, ligado al mérito, garantiza que todos los ciudadanos que cumplan los requisitos puedan competir en igualdad de condiciones por un empleo público, a través de concursos transparentes.' },
  { id: 245, axisId: 2, text: 'La "licencia por maternidad" es un derecho que busca proteger a:', options: ['La madre trabajadora y al recién nacido.', 'Todos los empleados de la entidad.', 'Únicamente a la madre.', 'Únicamente al padre.'], correctOptionIndex: 0, explanation: 'Esta licencia remunerada busca garantizar la recuperación de la madre y el cuidado del recién nacido, protegiendo la salud de ambos y la unidad familiar.' },
  { id: 246, axisId: 2, text: '¿Un contratista de prestación de servicios es considerado un servidor público?', options: ['Sí, en todos los casos.', 'No, es un particular que colabora con el Estado y su relación es contractual, no laboral.', 'Solo si el contrato es superior a un año.', 'Solo si trabaja en las instalaciones de la entidad.'], correctOptionIndex: 1, explanation: 'Los contratistas no son servidores públicos. No tienen una relación laboral (legal y reglamentaria), sino una relación contractual regida por la ley de contratación estatal. Por ende, no tienen carrera administrativa, prestaciones sociales, etc.' },
  { id: 247, axisId: 2, text: '¿Qué es la "supresión de un empleo"?', options: ['Cuando un empleado es despedido.', 'La eliminación formal de un cargo de la planta de personal de una entidad.', 'Cuando un empleado renuncia.', 'Una sanción disciplinaria.'], correctOptionIndex: 1, explanation: 'La supresión de un empleo es una causal de retiro que ocurre cuando, por razones de reestructuración o modernización, la entidad elimina un cargo de su planta. El empleado de carrera cuyo cargo es suprimido tiene derecho a una indemnización o a ser reincorporado.' },
  { id: 248, axisId: 2, text: 'La política de "Gobierno Digital" (antes Gobierno en Línea) busca que las entidades públicas:', options: ['Cierren todas sus oficinas físicas.', 'Usen la tecnología para prestar mejores servicios a los ciudadanos de forma más eficiente y transparente.', 'Se comuniquen solo por redes sociales.', 'Les exijan a los ciudadanos tener un computador de última generación.'], correctOptionIndex: 1, explanation: 'Gobierno Digital busca transformar la relación entre el Estado y los ciudadanos a través del uso estratégico de las Tecnologías de la Información y las Comunicaciones (TIC).' },
  { id: 249, axisId: 2, text: 'Un servidor público debe "custodiar y cuidar la documentación e información" que por razón de su empleo tenga bajo su responsabilidad. ¿Qué principio está aplicando?', options: ['Principio de publicidad', 'Principio de responsabilidad y diligencia', 'Principio de economía', 'Principio de transparencia'], correctOptionIndex: 1, explanation: 'Es un deber de todo servidor público ser diligente en el manejo de la información y los documentos, garantizando su conservación, seguridad y buen uso.' },
  { id: 250, axisId: 2, text: 'La edad de retiro forzoso para los servidores públicos en Colombia es de:', options: ['65 años', '70 años', '62 años para mujeres y 65 para hombres', 'No hay edad de retiro forzoso'], correctOptionIndex: 1, explanation: 'La Ley 1821 de 2016 estableció que la edad máxima para el retiro del cargo de las personas que desempeñen funciones públicas es de 70 años.' },

  // Contratación Estatal (50 Preguntas)
  {
    id: 301,
    axisId: 3,
    text: '¿Cuál es la modalidad de selección del contratista que procede por regla general en la contratación estatal?',
    options: ['Contratación directa', 'Mínima cuantía', 'Concurso de méritos', 'Licitación pública'],
    correctOptionIndex: 3,
    explanation: 'Según el Estatuto de Contratación (Ley 80 de 1993 y sus modificaciones), la licitación pública es la regla general para la escogencia de contratistas.'
  },
  {
    id: 302,
    axisId: 3,
    text: 'El principio de "transparencia" en la contratación estatal busca:',
    options: [
      'Garantizar la selección objetiva y la igualdad de oportunidades',
      'Asegurar que los contratos se ejecuten rápidamente',
      'Permitir que la entidad contrate con quien prefiera',
      'Reducir los costos de los procesos de selección'
    ],
    correctOptionIndex: 0,
    explanation: 'El principio de transparencia busca garantizar la imparcialidad y la selección objetiva del contratista, evitando favoritismos y asegurando igualdad de oportunidades para los proponentes.'
  },
    {
    id: 303,
    axisId: 3,
    text: 'Una entidad necesita contratar un artista reconocido para un evento cultural. ¿Qué modalidad de selección sería la más apropiada?',
    options: ['Licitación pública', 'Selección abreviada', 'Concurso de méritos', 'Contratación directa'],
    correctOptionIndex: 3,
    explanation: 'La contratación de artistas reconocidos es una de las causales de contratación directa, debido a las calidades "intuitu personae" que se requieren.'
  },
  {
    id: 304,
    axisId: 3,
    text: '¿Qué es el SECOP (Sistema Electrónico de Contratación Pública)?',
    options: [
      'Una empresa privada que asesora entidades públicas',
      'Un software para hacer seguimiento a la ejecución de los contratos',
      'La plataforma oficial para publicar y gestionar los procesos de contratación del Estado',
      'Un sindicato de contratistas del Estado'
    ],
    correctOptionIndex: 2,
    explanation: 'El SECOP es la plataforma transaccional que permite a las entidades estatales publicar los documentos de sus procesos y a los proveedores consultar y participar en ellos.'
  },
  {
    id: 305,
    axisId: 3,
    text: 'El principio de "planeación" implica que una entidad, antes de abrir un proceso de selección, debe:',
    options: [
      'Tener el dinero en efectivo guardado en una caja fuerte',
      'Contar con los estudios y diseños previos que soporten la necesidad y el valor del contrato',
      'Saber el nombre del contratista que va a ganar',
      'Publicar el proceso en redes sociales'
    ],
    correctOptionIndex: 1,
    explanation: 'El principio de planeación exige que la decisión de contratar se fundamente en estudios previos de necesidad, oportunidad, y análisis del sector económico, para evitar la improvisación.'
  },
  {
    id: 306,
    axisId: 3,
    text: 'En una licitación pública, un proponente ofrece un precio artificialmente bajo, que no podrá cumplir. La entidad debe:',
    options: [
      'Aceptarlo porque es el más barato',
      'Rechazar la oferta por ser considerada artificialmente baja, previa solicitud de explicaciones',
      'Negociar con él para que suba el precio',
      'Adjudicarle el contrato y esperar que cumpla'
    ],
    correctOptionIndex: 1,
    explanation: 'Las entidades deben rechazar ofertas que parezcan artificialmente bajas si, tras solicitar aclaraciones al proponente, este no logra justificar la viabilidad y seriedad de su oferta.'
  },
   {
    id: 307,
    axisId: 3,
    text: 'La "garantía de seriedad de la oferta" tiene como finalidad:',
    options: [
      'Asegurar que el contratista pague sus impuestos',
      'Cubrir los perjuicios de la entidad si el proponente no firma el contrato después de adjudicado',
      'Garantizar la calidad de los bienes o servicios ofertados',
      'Pagarle al supervisor del contrato'
    ],
    correctOptionIndex: 1,
    explanation: 'Esta garantía busca proteger a la entidad de proponentes que, después de ser seleccionados, se rehúsan a firmar el contrato, obligando a la entidad a iniciar un nuevo proceso.'
  },
  {
    id: 308,
    axisId: 3,
    text: '¿Cuál de estos principios NO rige la contratación estatal?',
    options: ['Economía', 'Responsabilidad', 'Transparencia', 'Enriquecimiento'],
    correctOptionIndex: 3,
    explanation: 'El enriquecimiento no es un principio de la contratación estatal. Los principios rectores buscan el cumplimiento de los fines estatales y la protección del patrimonio público.'
  },
  {
    id: 309,
    axisId: 3,
    text: 'El supervisor de un contrato estatal es, por regla general:',
    options: [
      'Un contratista externo especializado',
      'Un servidor público de la misma entidad',
      'Un delegado de la Contraloría',
      'El mismo representante legal del contratista'
    ],
    correctOptionIndex: 1,
    explanation: 'La supervisión implica el seguimiento técnico, administrativo, financiero y jurídico del contrato y es ejercida por un servidor público de la entidad contratante.'
  },
  {
    id: 310,
    axisId: 3,
    text: 'La "liquidación" de un contrato estatal es el acto por el cual:',
    options: [
      'Se da por terminado el contrato de forma anticipada',
      'Se define quiénes son las partes y cuál es el objeto',
      'Las partes realizan un corte de cuentas final sobre las obligaciones y derechos del contrato',
      'Se publica el contrato en el SECOP'
    ],
    correctOptionIndex: 2,
    explanation: 'La liquidación es la etapa final donde las partes establecen un balance definitivo de las obligaciones ejecutadas, pagos realizados y saldos pendientes.'
  },
  {
    id: 311,
    axisId: 3,
    text: 'La modalidad de "selección abreviada" se utiliza para:',
    options: [
      'Contratos de gran complejidad técnica.',
      'Bienes y servicios de características técnicas uniformes y de común utilización.',
      'Contratar empréstitos.',
      'Escoger al contratista de forma discrecional.'
    ],
    correctOptionIndex: 1,
    explanation: 'La selección abreviada es un procedimiento más ágil que la licitación, usado para adquirir bienes y servicios de características uniformes, como papelería o combustible, a menudo mediante subasta inversa.'
  },
  {
    id: 312,
    axisId: 3,
    text: '¿Qué es el "Registro Único de Proponentes" (RUP)?',
    options: [
      'Un registro de todos los servidores públicos.',
      'Un registro que llevan las Cámaras de Comercio con la información de los interesados en contratar con el Estado.',
      'Una base de datos de los contratos adjudicados.',
      'Un listado de las entidades estatales que contratan.'
    ],
    correctOptionIndex: 1,
    explanation: 'El RUP centraliza la información sobre la capacidad jurídica, financiera, organizativa y la experiencia de los proponentes, y es requisito para participar en la mayoría de los procesos de selección.'
  },
  {
    id: 313,
    axisId: 3,
    text: 'El principio de "selección objetiva" implica que la escogencia del contratista se hará:',
    options: [
      'Considerando la amistad con el representante legal de la entidad.',
      'Al ofrecimiento más favorable a la entidad y a los fines que ella busca.',
      'Al proponente que ofrezca el precio más bajo, sin importar la calidad.',
      'Al primer proponente que presente una oferta.'
    ],
    correctOptionIndex: 1,
    explanation: 'La selección objetiva es un deber fundamental que prohíbe la escogencia por motivos subjetivos o favoritismos. Se debe seleccionar la oferta que mejor responda a los criterios establecidos en los pliegos de condiciones.'
  },
  {
    id: 314,
    axisId: 3,
    text: '¿Qué es la "adenda" en un proceso de contratación?',
    options: [
      'El documento que declara desierto el proceso.',
      'Una modificación a los pliegos de condiciones realizada por la entidad antes del cierre del proceso.',
      'La oferta presentada por un proponente.',
      'El contrato firmado.'
    ],
    correctOptionIndex: 1,
    explanation: 'Las adendas son documentos que modifican o aclaran los pliegos de condiciones, y deben ser comunicadas a todos los posibles oferentes para garantizar la igualdad de oportunidades.'
  },
  {
    id: 315,
    axisId: 3,
    text: 'Una entidad pública declara "desierto" un proceso de selección cuando:',
    options: [
      'No le gusta ninguno de los proponentes.',
      'No se presenta ninguna oferta o ninguna cumple con los requisitos del pliego.',
      'El presupuesto se agota.',
      'El jefe de la entidad cambia de opinión.'
    ],
    correctOptionIndex: 1,
    explanation: 'La declaratoria de desierto procede por razones objetivas, como la falta de proponentes o la inhabilidad de todas las ofertas presentadas, lo que obliga a la entidad a iniciar un nuevo proceso.'
  },
  {
    id: 316,
    axisId: 3,
    text: 'La "interventoría" en un contrato de obra se diferencia de la "supervisión" en que:',
    options: [
      'La interventoría siempre es más costosa.',
      'La interventoría generalmente la ejerce un particular experto, mientras que la supervisión la ejerce un servidor de la entidad.',
      'No hay ninguna diferencia.',
      'La supervisión solo aplica para contratos de bajo valor.'
    ],
    correctOptionIndex: 1,
    explanation: 'Cuando se requiere un conocimiento técnico especializado, la entidad contrata a un tercero (persona natural o jurídica) como interventor. La supervisión, en cambio, es ejercida directamente por personal de la entidad.'
  },
  {
    id: 317,
    axisId: 3,
    text: 'El "equilibrio económico del contrato" es un principio que busca:',
    options: [
      'Que el contratista siempre gane mucho dinero.',
      'Mantener la equivalencia de las prestaciones entre las partes durante la ejecución del contrato.',
      'Que el Estado nunca pierda dinero.',
      'Que el contrato nunca se modifique.'
    ],
    correctOptionIndex: 1,
    explanation: 'Si durante la ejecución del contrato surgen situaciones imprevistas y no imputables al contratista que alteran gravemente la ecuación económica, esta debe ser restablecida para evitar un perjuicio injustificado.'
  },
  {
    id: 318,
    axisId: 3,
    text: '¿Cuál es la finalidad de la etapa de "estudios previos" en la contratación?',
    options: [
      'Justificar la necesidad de la contratación y definir sus especificaciones técnicas y económicas.',
      'Es un mero formalismo sin importancia práctica.',
      'Elegir al contratista antes de abrir el proceso.',
      'Establecer el cronograma de pagos.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los estudios previos son el soporte fundamental del contrato. En ellos, la entidad analiza el sector, define la necesidad, el objeto, el valor estimado y la modalidad de selección, entre otros aspectos clave.'
  },
  {
    id: 319,
    axisId: 3,
    text: 'Una "unión temporal" se diferencia de un "consorcio" en que:',
    options: [
      'En el consorcio, los miembros responden solidariamente por todo; en la unión temporal, responden por las sanciones según su participación.',
      'No hay ninguna diferencia legal.',
      'Los consorcios son para obras y las uniones temporales para servicios.',
      'En la unión temporal todos tienen la misma participación.'
    ],
    correctOptionIndex: 0,
    explanation: 'Ambas son formas de asociación para presentar ofertas. La diferencia clave radica en la responsabilidad: en el consorcio, todos responden por el 100% de las obligaciones. En la unión temporal, para efectos de sanciones, la responsabilidad se delimita a la participación de cada miembro en la ejecución.'
  },
  {
    id: 320,
    axisId: 3,
    text: '¿Qué son los "pliegos de condiciones"?',
    options: [
      'El borrador del contrato.',
      'Las reglas de juego del proceso de selección, que definen el objeto, requisitos y criterios de evaluación.',
      'La oferta económica del proponente.',
      'Un documento que resume la historia de la entidad.'
    ],
    correctOptionIndex: 1,
    explanation: 'Los pliegos de condiciones (o su equivalente) son la "ley del contrato" para las partes y establecen todas las condiciones que los proponentes deben cumplir y los criterios con los que serán evaluados.'
  },
  { id: 321, axisId: 3, text: 'La "urgencia manifiesta" es una causal de:', options: ['Licitación pública', 'Concurso de méritos', 'Contratación directa', 'Selección abreviada'], correctOptionIndex: 2, explanation: 'La urgencia manifiesta permite a una entidad contratar directamente, sin proceso de selección, para conjurar situaciones excepcionales como desastres o calamidades que requieren una acción inmediata.' },
  { id: 322, axisId: 3, text: 'El principio de "economía" en la contratación estatal se refiere a:', options: ['Contratar siempre lo más barato.', 'Asegurar que los procedimientos logren su finalidad y se desarrollen con celeridad y eficiencia.', 'Ahorrar en los materiales del contrato.', 'No realizar contratos de alto valor.'], correctOptionIndex: 1, explanation: 'Este principio busca la eficiencia en la gestión contractual, simplificando trámites, evitando dilaciones y asegurando que los recursos se inviertan de la mejor manera para cumplir los fines estatales.' },
  { id: 323, axisId: 3, text: 'El "contrato de concesión" tiene por objeto:', options: ['La compra de bienes para la entidad.', 'Otorgar a un particular la prestación de un servicio o la construcción y operación de una obra pública a cambio de una remuneración.', 'La prestación de servicios de consultoría.', 'El arrendamiento de un inmueble.'], correctOptionIndex: 1, explanation: 'En la concesión, el Estado traslada a un particular (el concesionario) la operación de una infraestructura o la prestación de un servicio, y la remuneración del concesionario usualmente proviene de las tarifas pagadas por los usuarios.' },
  { id: 324, axisId: 3, text: '¿Qué es un "contrato adicional" en valor?', options: ['Un contrato completamente nuevo.', 'Una modificación del contrato original que implica un aumento en su valor, sujeto a ciertos límites legales.', 'Un pago extra no autorizado al contratista.', 'Un contrato para supervisar al contrato principal.'], correctOptionIndex: 1, explanation: 'Si durante la ejecución se requieren obras o servicios adicionales que no superen el 50% del valor inicial del contrato, se puede celebrar un contrato adicional para cubrirlos, siempre que esté debidamente justificado.' },
  { id: 325, axisId: 3, text: 'La "audiencia de adjudicación" en una licitación pública es el acto en el cual:', options: ['Se negocia el precio con los proponentes.', 'La entidad comunica públicamente la decisión de a quién se le adjudica el contrato.', 'Los proponentes presentan sus ofertas.', 'Se firma el contrato.'], correctOptionIndex: 1, explanation: 'Es una audiencia pública donde la entidad, tras evaluar las ofertas, informa el resultado y adjudica el contrato al proponente que obtuvo el mayor puntaje, garantizando la transparencia del proceso.' },
  { id: 326, axisId: 3, text: '¿Qué es una "inhabilidad sobreviniente" en la contratación?', options: ['Una inhabilidad que tenía el contratista desde el inicio.', 'Una inhabilidad que surge o se configura después de la firma del contrato.', 'Un error en el nombre del contratista.', 'Una inhabilidad que se puede subsanar.'], correctOptionIndex: 1, explanation: 'Si durante la ejecución del contrato, el contratista incurre en una causal de inhabilidad (por ejemplo, es sancionado fiscalmente), esto puede dar lugar a la terminación del contrato.' },
  { id: 327, axisId: 3, text: 'El "principio de responsabilidad" implica que:', options: ['Solo el contratista es responsable de la ejecución del contrato.', 'Los servidores públicos que participan en la actividad contractual responden disciplinaria, civil y penalmente por sus actuaciones.', 'La entidad no tiene ninguna responsabilidad.', 'Los ciudadanos son responsables de vigilar los contratos.'], correctOptionIndex: 1, explanation: 'Este principio asegura que tanto los servidores públicos como los contratistas y consultores son responsables por la gestión contractual y deben rendir cuentas por sus acciones y omisiones.' },
  { id: 328, axisId: 3, text: 'La modalidad de "mínima cuantía" se caracteriza por:', options: ['Ser un proceso muy largo y complejo.', 'Un procedimiento simplificado y rápido para contrataciones de bajo valor.', 'No requerir publicación en el SECOP.', 'Aplicar solo para contratos de obra.'], correctOptionIndex: 1, explanation: 'Es un proceso expedito diseñado para la adquisición de bienes, servicios y obras cuyo valor no excede el 10% de la menor cuantía de la entidad, con reglas y plazos más cortos.' },
  { id: 329, axisId: 3, text: '¿Se puede "ceder" un contrato estatal?', options: ['No, nunca.', 'Sí, siempre que el contratista quiera.', 'Sí, pero se requiere la autorización previa y por escrito de la entidad contratante.', 'Solo si el contratista fallece.'], correctOptionIndex: 2, explanation: 'La cesión de un contrato estatal solo es posible si la entidad contratante lo autoriza, verificando que el nuevo contratista (cesionario) cumple con los mismos o mejores requisitos que el original.' },
  { id: 330, axisId: 3, text: 'El "acta de inicio" de un contrato es importante porque:', options: ['Es el documento que reemplaza al contrato.', 'A partir de su firma, empieza a correr el plazo de ejecución del contrato.', 'Define el valor final del contrato.', 'Liquida las obligaciones del contrato.'], correctOptionIndex: 1, explanation: 'Aunque el contrato se perfecciona con la firma, el plazo de ejecución (el tiempo que tiene el contratista para cumplir sus obligaciones) generalmente comienza a contarse desde la firma del acta de inicio, una vez cumplidos los requisitos previos.' },
  { id: 331, axisId: 3, text: '¿Qué son los "riesgos previsibles" en la contratación estatal?', options: ['Eventos que son imposibles de prever.', 'Aquellos riesgos que pueden afectar la ejecución del contrato y que deben ser identificados y distribuidos entre las partes desde los estudios previos.', 'Los riesgos que solo asume el contratista.', 'Riesgos que solo asume la entidad.'], correctOptionIndex: 1, explanation: 'La ley exige que en los pliegos de condiciones se identifiquen y tipifiquen los riesgos previsibles que puedan afectar el equilibrio económico del contrato, y se asigne quién debe asumirlos (entidad, contratista o ambos).' },
  { id: 332, axisId: 3, text: 'La "caducidad" de un contrato estatal es:', options: ['La terminación del contrato por el paso del tiempo.', 'Una potestad excepcional de la entidad para dar por terminado el contrato por un incumplimiento grave del contratista.', 'Un acuerdo entre las partes para terminar el contrato.', 'La suspensión del contrato.'], correctOptionIndex: 1, explanation: 'La caducidad es la sanción más grave. La entidad la declara cuando el incumplimiento del contratista es tan severo que amenaza con la paralización del servicio. Conlleva inhabilidad para el contratista para contratar con el Estado.' },
  { id: 333, axisId: 3, text: 'El "concurso de méritos" es la modalidad de selección para:', options: ['Comprar papelería.', 'Contratos de consultoría, interventoría y proyectos de arquitectura.', 'Obras públicas de gran envergadura.', 'Contratos de prestación de servicios de vigilancia.'], correctOptionIndex: 1, explanation: 'Esta modalidad se utiliza cuando el factor determinante no es el precio, sino la capacidad intelectual y la experiencia de los proponentes, como en los servicios de consultoría.' },
  { id: 334, axisId: 3, text: '¿Qué es el "Certificado de Disponibilidad Presupuestal" (CDP)?', options: ['Un documento que certifica que el contratista tiene dinero.', 'Un acto expedido por el responsable de presupuesto que garantiza la existencia de recursos para atender el compromiso.', 'El presupuesto de la oferta del proponente.', 'Un certificado de un banco.'], correctOptionIndex: 1, explanation: 'El CDP es un requisito esencial para iniciar cualquier proceso de contratación. Con él se asegura que la entidad cuenta con los fondos necesarios para respaldar el futuro contrato.' },
  { id: 335, axisId: 3, text: 'Las "cláusulas excepcionales" en los contratos estatales (interpretación, modificación y terminación unilateral) son una manifestación del:', options: ['Principio de igualdad entre las partes.', 'Poder exorbitante del Estado para proteger el interés general.', 'Principio de autonomía de la voluntad.', 'Debilitamiento del Estado.'], correctOptionIndex: 1, explanation: 'Estas cláusulas le otorgan a la administración pública prerrogativas que no existen en la contratación privada, con el fin de asegurar la continuidad y la correcta prestación del servicio público.' },
  { id: 336, axisId: 3, text: 'La "garantía de cumplimiento" que se exige al contratista tiene como fin:', options: ['Asegurar que el contratista es una persona seria.', 'Amparar a la entidad frente a los perjuicios derivados del incumplimiento de las obligaciones del contratista.', 'Garantizar que el contratista pagará los salarios de sus empleados.', 'Cubrir los costos de la supervisión.'], correctOptionIndex: 1, explanation: 'Esta póliza de seguros o garantía bancaria permite a la entidad resarcirse económicamente si el contratista incumple el contrato, abandona la obra o no entrega los bienes con la calidad pactada.' },
  { id: 337, axisId: 3, text: '¿Es posible "subsanar" la falta de un documento en la etapa de evaluación de ofertas?', options: ['No, ninguna oferta puede ser corregida.', 'Sí, se pueden subsanar todos los errores, incluyendo la falta de la oferta económica.', 'Sí, pero solo los requisitos que no otorgan puntaje, es decir, los habilitantes.', 'Solo si el jefe de la entidad lo autoriza.'], correctOptionIndex: 2, explanation: 'La ley permite que los proponentes aclaren o corrijan requisitos habilitantes (como un certificado de experiencia o un permiso) siempre que se haga en el plazo otorgado por la entidad y no se altere la oferta inicial.' },
  { id: 338, axisId: 3, text: 'El "principio de publicidad" en la actividad contractual se materializa principalmente a través de:', options: ['La publicación de todos los documentos del proceso en el SECOP.', 'Enviar correos electrónicos a los posibles proponentes.', 'Publicar avisos en la cartelera de la entidad.', 'Realizar ruedas de prensa.'], correctOptionIndex: 0, explanation: 'El principio de publicidad exige que todas las actuaciones de la administración sean públicas y accesibles a los ciudadanos. El SECOP es la principal herramienta para cumplir con este mandato.' },
  { id: 339, axisId: 3, text: '¿Qué es el "Registro Presupuestal" (RP)?', options: ['Es lo mismo que el CDP.', 'Es la imputación presupuestal mediante la cual se afectan las apropiaciones para garantizar el pago de las obligaciones.', 'Un registro de los contratistas que han incumplido.', 'El presupuesto total de la entidad.'], correctOptionIndex: 1, explanation: 'Después de firmado el contrato, se expide el RP, que es el acto que perfecciona el compromiso presupuestal y asegura que los recursos del CDP quedan formalmente reservados para pagar ese contrato específico.' },
  { id: 340, axisId: 3, text: 'La "terminación unilateral" es una cláusula excepcional que permite a la entidad:', options: ['Terminar el contrato cuando el contratista lo pida.', 'Dar por terminado el contrato por razones de interés público o social.', 'Terminar el contrato solo si hay un incumplimiento grave.', 'Modificar el valor del contrato.'], correctOptionIndex: 1, explanation: 'Incluso si el contratista está cumpliendo, la entidad puede dar por terminado el contrato si sobrevienen situaciones de interés público que lo hagan necesario, debiendo indemnizar al contratista.' },
  { id: 341, axisId: 3, text: 'En una "subasta inversa", el factor de selección del contratista es:', options: ['La mayor experiencia.', 'La mejor calidad técnica.', 'El menor precio.', 'El plazo de entrega más corto.'], correctOptionIndex: 2, explanation: 'En la subasta inversa, utilizada para bienes y servicios de características técnicas uniformes, los proponentes compiten presentando lances sucesivos para ofrecer el precio más bajo, y gana quien ofrezca el menor valor.' },
  { id: 342, axisId: 3, text: 'Un contrato de "prestación de servicios profesionales y de apoyo a la gestión" solo puede celebrarse con:', options: ['Personas jurídicas.', 'Personas naturales, cuando las actividades no puedan realizarse con personal de planta.', 'Cualquier persona, sin importar si la entidad tiene personal para hacer la tarea.', 'Extranjeros únicamente.'], correctOptionIndex: 1, explanation: 'Esta es una causal de contratación directa que se usa para contratar expertos o personal de apoyo de forma temporal, siempre y cuando se demuestre que la entidad no cuenta con personal suficiente en su planta para desarrollar dichas actividades.' },
  { id: 343, axisId: 3, text: 'El principio "pacta sunt servanda" en la contratación estatal significa que:', options: ['El Estado puede cambiar las reglas del contrato en cualquier momento.', 'El contrato es ley para las partes y debe ser cumplido de buena fe.', 'Los pactos solo obligan si están por escrito.', 'Los contratos pueden ser verbales.'], correctOptionIndex: 1, explanation: 'Este principio general del derecho, aplicable a la contratación, establece que los acuerdos deben ser cumplidos. Sin embargo, en la contratación estatal está matizado por las cláusulas excepcionales que protegen el interés general.' },
  { id: 344, axisId: 3, text: '¿Cuál es el objeto de un "acuerdo marco de precios"?', options: ['Fijar un precio único para todos los contratos del país.', 'Establecer las condiciones (precio, calidad, etc.) para adquirir bienes y servicios de uso común, a las cuales las entidades se adhieren posteriormente.', 'Un acuerdo para no competir entre proponentes.', 'Un contrato para definir el marco legal de la contratación.'], correctOptionIndex: 1, explanation: 'Colombia Compra Eficiente (la agencia de contratación) celebra acuerdos marco con proveedores. Luego, las demás entidades, en lugar de hacer su propio proceso, simplemente emiten una orden de compra a través de la plataforma para adquirir esos bienes o servicios bajo las condiciones ya pactadas.' },
  { id: 345, axisId: 3, text: 'La etapa "postcontractual" se refiere a:', options: ['Las actividades previas a la firma del contrato.', 'La ejecución del contrato.', 'El período que abarca desde la terminación del contrato hasta su liquidación y el vencimiento de las garantías.', 'La evaluación de las ofertas.'], correctOptionIndex: 2, explanation: 'Es la fase final que incluye la liquidación del contrato, el balance de cuentas y la exigibilidad de las garantías de calidad y estabilidad de la obra, si aplican.' },
  { id: 346, axisId: 3, text: '¿Qué es el "factor de desempate" en un proceso de selección?', options: ['Un criterio para elegir al contratista de forma subjetiva.', 'Un mecanismo preestablecido en los pliegos para escoger al ganador cuando dos o más ofertas obtienen el mismo puntaje.', 'Una reunión para que los proponentes empatados negocien.', 'La anulación del proceso por empate.'], correctOptionIndex: 1, explanation: 'La ley establece una serie de criterios de desempate (como dar preferencia a ofertas de mipymes, o a proponentes con personal en condición de discapacidad) que deben aplicarse en estricto orden cuando hay un empate en el puntaje final.' },
  { id: 347, axisId: 3, text: 'Si un contrato estatal requiere "vigencias futuras", significa que:', options: ['El contrato se ejecutará en una fecha futura.', 'Se comprometen recursos de presupuestos de años posteriores para respaldar un contrato que se ejecutará en varias vigencias fiscales.', 'El pago se hará cuando la entidad tenga dinero.', 'El contrato no tiene respaldo presupuestal.'], correctOptionIndex: 1, explanation: 'Las vigencias futuras son una autorización para asumir obligaciones que afectan el presupuesto de años fiscales posteriores. Son comunes en grandes proyectos de infraestructura que duran varios años.' },
  { id: 348, axisId: 3, text: 'El principio de "planeación" en un contrato de obra pública exige, como mínimo:', options: ['Tener un dibujo a mano alzada del proyecto.', 'Contar con los estudios técnicos, diseños y licencias ambientales y de construcción requeridos.', 'Saber cuánto va a costar aproximadamente.', 'Tener la aprobación verbal del alcalde o gobernador.'], correctOptionIndex: 1, explanation: 'No se puede iniciar un proceso de contratación de obra sin contar con los estudios y diseños definitivos que permitan establecer con claridad el objeto, el alcance y el presupuesto, para evitar sobrecostos e improvisación.' },
  { id: 349, axisId: 3, text: '¿Quién debe inscribirse en el Registro Único de Precios de Referencia (RUPR)?', options: ['Las entidades estatales, para consultar precios de mercado.', 'Los proveedores de ciertos bienes y servicios, para que las entidades tengan una referencia de precios.', 'Los supervisores de contratos.', 'Los ciudadanos que quieran hacer veeduría.'], correctOptionIndex: 1, explanation: 'Es un sistema de información con precios de referencia de bienes y servicios de uso común en las entidades estatales, que sirve como herramienta en la etapa de planeación para la estimación de los presupuestos.' },
  { id: 350, axisId: 3, text: 'La "adjudicación" de un contrato estatal es:', options: ['Un acto administrativo motivado por medio del cual la entidad escoge la oferta más favorable.', 'La firma del contrato.', 'Una recomendación del comité evaluador.', 'El primer pago al contratista.'], correctOptionIndex: 0, explanation: 'La adjudicación es el acto formal y definitivo que pone fin al proceso de selección, designando al proponente ganador. Este acto es obligatorio para la entidad y para el adjudicatario.' },

  // Control Disciplinario (50 Preguntas)
  {
    id: 401,
    axisId: 4,
    text: 'La entidad encargada de ejercer el poder disciplinario preferente sobre los servidores públicos en Colombia es:',
    options: [
      'La Contraloría General de la República',
      'La Procuraduría General de la Nación',
      'La Defensoría del Pueblo',
      'El Consejo Superior de la Judicatura'
    ],
    correctOptionIndex: 1,
    explanation: 'La Procuraduría General de la Nación tiene la función de ejercer el control disciplinario del servidor público, adelantando las investigaciones y sancionando las faltas disciplinarias.'
  },
  {
    id: 402,
    axisId: 4,
    text: 'Una de las siguientes sanciones NO está contemplada en el Código General Disciplinario (Ley 1952 de 2019):',
    options: ['Destitución e inhabilidad general', 'Suspensión en el ejercicio del cargo', 'Multa', 'Pena de prisión'],
    correctOptionIndex: 3,
    explanation: 'Las sanciones disciplinarias son destitución, suspensión, multa y amonestación. La pena de prisión corresponde al ámbito del derecho penal, no al disciplinario.'
  },
  {
    id: 403,
    axisId: 4,
    text: 'Un servidor público llega a su oficina en estado de embriaguez. Esta conducta se considera una falta disciplinaria:',
    options: ['Leve', 'Grave', 'Gravísima', 'No es una falta si no afecta su rendimiento'],
    correctOptionIndex: 2,
    explanation: 'Consumir, en el sitio de trabajo o en lugares públicos, sustancias prohibidas o llegar en estado de embriaguez es una falta gravísima según el Código General Disciplinario.'
  },
  {
    id: 404,
    axisId: 4,
    text: 'El principio de "legalidad" en materia disciplinaria significa que:',
    options: [
      'El investigador puede crear nuevas faltas si la conducta es inmoral',
      'Un servidor solo puede ser investigado y sancionado por conductas previamente descritas en la ley como faltas',
      'Todas las faltas tienen la misma sanción',
      'El proceso debe ser lo más rápido posible'
    ],
    correctOptionIndex: 1,
    explanation: 'El principio de legalidad garantiza que nadie puede ser juzgado sino conforme a leyes preexistentes al acto que se le imputa.'
  },
  {
    id: 405,
    axisId: 4,
    text: '¿Qué es el "principio de ilicitud sustancial" en el derecho disciplinario?',
    options: [
      'Que la conducta debe ser ilegal en otro país',
      'Que la conducta debe generar un daño económico al estado',
      'Que la conducta debe afectar sustancialmente los deberes funcionales, sin justificación alguna',
      'Que el servidor debe tener la intención de cometer la falta'
    ],
    correctOptionIndex: 2,
    explanation: 'Para que una conducta sea disciplinariamente reprochable, no basta con que se adecúe a la descripción de la falta; debe afectar el deber funcional sin una justificación válida.'
  },
  {
    id: 406,
    axisId: 4,
    text: 'La "prescripción" de la acción disciplinaria significa que:',
    options: [
      'La falta fue perdonada por el superior jerárquico',
      'El Estado pierde la potestad para investigar y sancionar por el paso del tiempo',
      'El servidor público renunció a su cargo',
      'El proceso debe pasar a la justicia ordinaria'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción disciplinaria prescribe en un término determinado (generalmente 5 años), tras el cual el Estado ya no puede ejercer su poder sancionatorio por esa conducta.'
  },
  {
    id: 407,
    axisId: 4,
    text: 'Un funcionario utiliza un vehículo oficial para realizar un viaje de vacaciones con su familia. ¿Qué tipo de falta está cometiendo?',
    options: [
      'Una falta leve, si pide permiso',
      'Ninguna, si le pone gasolina de su propio bolsillo',
      'Una falta grave o gravísima por uso indebido de bienes del Estado',
      'Una falta administrativa que se sanciona con un llamado de atención verbal'
    ],
    correctOptionIndex: 2,
    explanation: 'Utilizar los bienes del Estado para fines personales o ajenos a las funciones oficiales constituye una falta disciplinaria que puede ser calificada como grave o gravísima.'
  },
  {
    id: 408,
    axisId: 4,
    text: 'El derecho de defensa en un proceso disciplinario incluye la posibilidad de:',
    options: [
      'Ignorar las citaciones de la autoridad disciplinaria',
      'Rendir versión libre, solicitar y aportar pruebas, y controvertir las que se alleguen en su contra',
      'Pagar una multa para evitar el proceso',
      'Ser juzgado siempre por el jefe inmediato'
    ],
    correctOptionIndex: 1,
    explanation: 'El derecho de defensa y contradicción es un pilar del debido proceso y garantiza que el investigado pueda participar activamente para proteger sus intereses.'
  },
  {
    id: 409,
    axisId: 4,
    text: '¿Quién tiene la competencia para investigar disciplinariamente al Procurador General de la Nación?',
    options: [
      'El Presidente de la República',
      'La Comisión de Acusaciones de la Cámara de Representantes',
      'La Corte Suprema de Justicia',
      'Nadie, tiene fuero absoluto'
    ],
    correctOptionIndex: 2,
    explanation: 'La Sala Plena de la Corte Suprema de Justicia es la competente para investigar y juzgar disciplinariamente al Procurador General de la Nación.'
  },
  {
    id: 410,
    axisId: 4,
    text: 'La sanción de "destitución e inhabilidad general" implica que el servidor público:',
    options: [
      'Es retirado del cargo y no puede volver a trabajar con el Estado por un tiempo determinado',
      'Solo es retirado del cargo, pero puede concursar para otro al día siguiente',
      'Debe pagar una multa muy alta pero puede seguir trabajando',
      'Recibe una anotación en su hoja de vida y una suspensión de 3 días'
    ],
    correctOptionIndex: 0,
    explanation: 'Esta es la sanción más grave. Implica la terminación de la relación laboral y una inhabilidad para ejercer funciones públicas por un período que va de 10 a 20 años para faltas gravísimas dolosas.'
  },
  {
    id: 411,
    axisId: 4,
    text: 'El "debido proceso" en materia disciplinaria garantiza, entre otros, el derecho a:',
    options: [
      'Ser investigado por un funcionario competente, a la defensa y a la doble instancia.',
      'Elegir al funcionario que lo va a investigar.',
      'Que el proceso dure menos de un mes.',
      'Apelar la decisión directamente ante el Presidente.'
    ],
    correctOptionIndex: 0,
    explanation: 'El debido proceso (Art. 29 de la Constitución) es una garantía fundamental que incluye el derecho a ser juzgado por una autoridad competente, a presentar y controvertir pruebas, y a impugnar la decisión de primera instancia.'
  },
  {
    id: 412,
    axisId: 4,
    text: 'La principal diferencia entre una falta "dolosa" y una "culposa" es:',
    options: [
      'La gravedad del daño causado.',
      'La intención del servidor público.',
      'El cargo que ocupa el servidor.',
      'Si la falta fue cometida dentro o fuera de la oficina.'
    ],
    correctOptionIndex: 1,
    explanation: 'Una falta es dolosa cuando se comete con la intención de realizar la conducta. Es culposa cuando se comete por negligencia, imprudencia o violación de reglamentos, pero sin la intención directa de causar el resultado.'
  },
  {
    id: 413,
    axisId: 4,
    text: 'Las "oficinas de control interno disciplinario" de las entidades públicas tienen competencia para:',
    options: [
      'Investigar y sancionar todas las faltas de todos los servidores.',
      'Conocer en primera instancia las faltas leves y graves cometidas por los servidores de la entidad.',
      'Únicamente para dar consejos a los empleados.',
      'Investigar al jefe de la entidad.'
    ],
    correctOptionIndex: 1,
    explanation: 'Por regla general, estas oficinas tienen la competencia para adelantar los procesos por faltas leves y graves, mientras que las faltas gravísimas suelen ser competencia de la Procuraduría, salvo excepciones.'
  },
  {
    id: 414,
    axisId: 4,
    text: 'Un servidor público recibe un regalo costoso de un ciudadano al que le acaba de aprobar un trámite. Esta conducta podría constituir:',
    options: [
      'Un acto de amabilidad que no tiene consecuencias.',
      'Una falta disciplinaria grave o gravísima (cohecho).',
      'Una falta leve, si el regalo no era tan costoso.',
      'Un estímulo permitido por la ley.'
    ],
    correctOptionIndex: 1,
    explanation: 'Solicitar o recibir dádivas o cualquier otro beneficio con motivo u ocasión de sus funciones es una falta gravísima, que además puede tener consecuencias penales por el delito de cohecho.'
  },
  {
    id: 415,
    axisId: 4,
    text: 'El principio "non bis in idem" en el derecho disciplinario significa que:',
    options: [
      'El proceso debe ser bilingüe.',
      'Nadie puede ser investigado o sancionado disciplinariamente más de una vez por la misma conducta.',
      'Se necesitan dos pruebas para sancionar a alguien.',
      'La sanción debe ser el doble de la falta.'
    ],
    correctOptionIndex: 1,
    explanation: 'Esta es una garantía fundamental que prohíbe la doble persecución por un mismo hecho, siempre que exista identidad de sujeto, hecho y causa.'
  },
  {
    id: 416,
    axisId: 4,
    text: '¿Un particular que ejerce funciones públicas puede ser sujeto de investigación disciplinaria?',
    options: [
      'No, el derecho disciplinario solo aplica a servidores públicos.',
      'Sí, en los casos y bajo las condiciones que establece la ley.',
      'Solo si es contratista del Estado.',
      'Solo si es notario o curador urbano.'
    ],
    correctOptionIndex: 1,
    explanation: 'La ley disciplinaria se aplica también a los particulares que ejercen funciones públicas de forma permanente o transitoria, como los interventores de contratos o los miembros de juntas directivas de empresas estatales.'
  },
  {
    id: 417,
    axisId: 4,
    text: 'Un funcionario revela información confidencial de la entidad a la prensa. ¿Comete una falta disciplinaria?',
    options: [
      'No, si la información era de interés público.',
      'Sí, comete una falta por violar el deber de reserva y secreto profesional.',
      'No, porque está ejerciendo la libertad de prensa.',
      'Solo si le pagaron por la información.'
    ],
    correctOptionIndex: 1,
    explanation: 'Es un deber de todo servidor público guardar reserva sobre los asuntos que conozca por razón de sus funciones y que por su naturaleza tengan carácter reservado.'
  },
  {
    id: 418,
    axisId: 4,
    text: 'La etapa de "juicio disciplinario" en el proceso verbal se inicia con:',
    options: [
      'La queja del ciudadano.',
      'La indagación preliminar.',
      'El auto de citación a audiencia y formulación de cargos.',
      'La sentencia.'
    ],
    correctOptionIndex: 2,
    explanation: 'Una vez agotada la investigación y si existe mérito, la autoridad disciplinaria profiere un auto de citación a audiencia y formulación de cargos, que da inicio formal a la etapa de juicio.'
  },
  {
    id: 419,
    axisId: 4,
    text: '¿Cuál de las siguientes es una causal de exclusión de la responsabilidad disciplinaria?',
    options: [
      'Actuar con el consentimiento del jefe.',
      'Desconocer la ley disciplinaria.',
      'Actuar en estricto cumplimiento de un deber constitucional o legal.',
      'Que nadie se haya dado cuenta de la falta.'
    ],
    correctOptionIndex: 2,
    explanation: 'Si un servidor público comete una conducta que parece una falta, pero lo hizo en cumplimiento estricto de un deber legal (por ejemplo, el uso de la fuerza por parte de un policía en una situación legítima), no hay lugar a responsabilidad disciplinaria.'
  },
  {
    id: 420,
    axisId: 4,
    text: 'La "suspensión provisional" de un servidor público en medio de una investigación disciplinaria procede cuando:',
    options: [
      'El investigador considera que el servidor es culpable.',
      'Se busca evitar que el servidor interfiera con la investigación o continúe cometiendo la falta.',
      'El servidor pide vacaciones.',
      'El servidor es impopular en la oficina.'
    ],
    correctOptionIndex: 1,
    explanation: 'Es una medida cautelar que separa temporalmente al servidor de su cargo para garantizar la integridad y el éxito del proceso disciplinario, y no constituye una sanción anticipada.'
  },
  { id: 421, axisId: 4, text: '¿Qué es un "testigo" en un proceso disciplinario?', options: ['El quejoso.', 'El abogado del investigado.', 'Una persona que declara sobre hechos que le constan y que son pertinentes para el proceso.', 'El funcionario que adelanta la investigación.'], correctOptionIndex: 2, explanation: 'El testimonio es un medio de prueba importante, a través del cual una persona ajena al proceso narra lo que percibió o conoce sobre los hechos que se investigan.' },
  { id: 422, axisId: 4, text: 'El principio de "favorabilidad" en materia disciplinaria establece que:', options: ['Siempre se debe fallar a favor del servidor público.', 'Si una ley posterior es más benigna para el investigado, se debe aplicar esa ley.', 'El investigador debe ser amigo del investigado.', 'El proceso debe ser favorable para la entidad.'], correctOptionIndex: 1, explanation: 'Este principio garantiza que se aplique la norma más favorable al procesado, ya sea la que estaba vigente al momento de los hechos o una posterior que le beneficie.' },
  { id: 423, axisId: 4, text: '¿Un servidor público puede ser sancionado disciplinariamente por una conducta cometida fuera del servicio?', options: ['No, nunca.', 'Sí, cuando la conducta afecte la moralidad pública o tenga relación con el servicio.', 'Solo si la conducta es un delito.', 'Solo si ocurre en el extranjero.'], correctOptionIndex: 1, explanation: 'Aunque la mayoría de las faltas se relacionan con el ejercicio de las funciones, algunas conductas realizadas fuera del servicio pueden constituir falta disciplinaria si afectan la dignidad y el buen nombre de la institución.' },
  { id: 424, axisId: 4, text: 'La "amonestación escrita" es una sanción que se impone por:', options: ['Faltas gravísimas.', 'Faltas graves.', 'Faltas leves.', 'Cualquier tipo de falta.'], correctOptionIndex: 2, explanation: 'La amonestación escrita es la sanción más leve y se registra en la hoja de vida del servidor. Procede únicamente para faltas leves culposas.' },
  { id: 425, axisId: 4, text: 'Omitir, retardar o no suministrar respuesta a las peticiones de los ciudadanos es una falta que atenta contra el deber de:', options: ['Atender debidamente al público.', 'Guardar reserva de la información.', 'Ser leal a la entidad.', 'Asistir al trabajo puntualmente.'], correctOptionIndex: 0, explanation: 'Los servidores públicos tienen el deber de atender las solicitudes de los ciudadanos de manera diligente y oportuna, y su incumplimiento puede acarrear una investigación disciplinaria.' },
  { id: 426, axisId: 4, text: 'La "queja" disciplinaria es:', options: ['El acto que inicia la investigación disciplinaria.', 'La sanción que se impone al servidor.', 'El recurso que interpone el servidor contra el fallo.', 'Un informe que presenta un ciudadano o servidor poniendo en conocimiento una posible falta.'], correctOptionIndex: 3, explanation: 'La acción disciplinaria puede iniciarse de oficio, por información de otro servidor, o por una queja formulada por cualquier persona. La queja es el punto de partida, pero no obliga a abrir investigación formal si es temeraria o infundada.' },
  { id: 427, axisId: 4, text: '¿Qué es el "fallo de primera instancia" en un proceso disciplinario?', options: ['La decisión final e inapelable del proceso.', 'La decisión tomada por la primera autoridad que conoce del caso, la cual puede ser apelada.', 'La formulación de cargos contra el investigado.', 'Un concepto no vinculante del jefe de personal.'], correctOptionIndex: 1, explanation: 'Es la primera decisión de fondo sobre la responsabilidad del investigado. Contra este fallo proceden recursos (como la apelación) para que un superior jerárquico o funcional lo revise.' },
  { id: 428, axisId: 4, text: 'El "criterio de la culpabilidad" es fundamental para imponer una sanción disciplinaria. Esto significa que:', options: ['No se puede sancionar a nadie objetivamente, se debe demostrar que actuó con dolo o culpa.', 'El servidor es culpable hasta que demuestre lo contrario.', 'La culpa siempre es del jefe.', 'Si hay daño, siempre hay sanción.'], correctOptionIndex: 0, explanation: 'En el derecho disciplinario colombiano está proscrita la responsabilidad objetiva. Para sancionar, no basta con demostrar que la conducta ocurrió, sino que el servidor actuó con dolo (intención) or culpa (negligencia, imprudencia).' },
  { id: 429, axisId: 4, text: 'La Procuraduría General de la Nación ejerce el "poder preferente", lo que significa que:', options: ['Es la única que puede investigar disciplinariamente.', 'Puede iniciar, proseguir o remitir cualquier investigación disciplinaria, desplazando a la oficina de control interno.', 'Prefiere investigar solo los casos más famosos.', 'Debe pedir permiso a la entidad para investigar a sus funcionarios.'], correctOptionIndex: 1, explanation: 'Este poder le permite a la Procuraduría asumir la competencia de cualquier proceso disciplinario que se adelante en otra entidad, en razón de su importancia, trascendencia o para garantizar la imparcialidad.' },
  { id: 430, axisId: 4, text: 'Un servidor público que se apropia de recursos del Estado comete una falta gravísima. ¿Qué otra responsabilidad podría tener?', options: ['Ninguna, solo la disciplinaria.', 'Responsabilidad penal por el delito de peculado.', 'Responsabilidad fiscal por el daño patrimonial.', 'Ambas, penal y fiscal, además de la disciplinaria.'], correctOptionIndex: 3, explanation: 'La misma conducta de apropiarse de recursos públicos configura una falta disciplinaria (incumplimiento de deberes), un delito (peculado) y genera un daño al patrimonio del Estado (responsabilidad fiscal). Las tres acciones pueden adelantarse de forma independiente.' },
  { id: 431, axisId: 4, text: '¿Qué es la "versión libre" en un proceso disciplinario?', options: ['La sentencia que absuelve al investigado.', 'Una oportunidad para que el investigado presente su explicación sobre los hechos, antes de la formulación de cargos.', 'Un testimonio que no se graba.', 'La confesión obligatoria del investigado.'], correctOptionIndex: 1, explanation: 'Es una de las primeras manifestaciones del derecho de defensa. El investigado puede, voluntariamente, rendir una declaración para explicar su conducta y aportar las pruebas que considere pertinentes.' },
  { id: 432, axisId: 4, text: 'El principio de "proporcionalidad" de la sanción disciplinaria implica que:', options: ['La sanción debe corresponder a la gravedad de la falta y a los criterios de graduación establecidos en la ley.', 'La sanción siempre debe ser la más alta posible.', 'La sanción debe ser proporcional al salario del servidor.', 'Todas las faltas tienen la misma sanción: destitución.'], correctOptionIndex: 0, explanation: 'La autoridad disciplinaria no puede imponer sanciones de manera arbitraria. Debe analizar la gravedad de la falta, el nivel de culpabilidad, los antecedentes del servidor y otros criterios para que la sanción sea justa y proporcional.' },
  { id: 433, axisId: 4, text: '¿La renuncia del servidor público termina el proceso disciplinario?', options: ['Sí, automáticamente.', 'No, el proceso continúa hasta que se determine si hubo o no responsabilidad.', 'Solo si la renuncia es aceptada antes de que inicie el proceso.', 'Solo si la falta cometida era leve.'], correctOptionIndex: 1, explanation: 'La acción disciplinaria es autónoma de la relación laboral. La renuncia no extingue la posibilidad de que el Estado investigue y sancione una falta cometida durante el ejercicio de las funciones. La sanción, de haberla, se registrará para efectos de inhabilidades.' },
  { id: 434, axisId: 4, text: 'Incurrir en "acoso laboral" debidamente comprobado es una falta disciplinaria:', options: ['Leve', 'Grave o gravísima, según las circunstancias.', 'No es una falta disciplinaria, solo laboral.', 'Se sanciona con un simple llamado de atención.'], correctOptionIndex: 1, explanation: 'El acoso laboral, además de tener su propia ley (Ley 1010 de 2006), está catalogado como una falta disciplinaria que puede ser calificada como grave o gravísima, dependiendo de los hechos y sus consecuencias.' },
  { id: 435, axisId: 4, text: '¿Cuál es el fin principal del derecho disciplinario?', options: ['Vengarse del servidor público que comete un error.', 'Asegurar el cumplimiento de los principios que rigen la función pública y la correcta prestación del servicio.', 'Enviar a la cárcel a los servidores públicos.', 'Reducir el número de empleados del Estado.'], correctOptionIndex: 1, explanation: 'El derecho disciplinario no tiene un fin meramente represivo, sino preventivo y correctivo. Busca garantizar que los servidores públicos cumplan con sus deberes y que la función pública se ejerza en beneficio de la comunidad.' },
  { id: 436, axisId: 4, text: 'El "recurso de apelación" contra un fallo de primera instancia busca que:', options: ['El mismo funcionario que tomó la decisión la reconsidere.', 'Un funcionario de superior jerarquía revise la legalidad y el mérito de la decisión.', 'Se anule todo el proceso y se empiece de cero.', 'Se negocie la sanción con el jefe de la entidad.'], correctOptionIndex: 1, explanation: 'La apelación es una garantía fundamental de la doble instancia, que permite al disciplinado (o a su apoderado) solicitar a un superior que examine el fallo, con la expectativa de que lo revoque, modifique o aclare.' },
  { id: 437, axisId: 4, text: 'Un servidor debe declararse "impedido" para actuar en un proceso cuando:', options: ['El proceso es muy difícil.', 'Tiene un interés particular en el resultado o alguna relación de parentesco o amistad íntima con las partes.', 'No está de acuerdo con la ley que debe aplicar.', 'Tiene mucho trabajo acumulado.'], correctOptionIndex: 1, explanation: 'Los impedimentos y las recusaciones buscan garantizar la imparcialidad del funcionario que adelanta una actuación. Si existe una causal que pueda afectar su objetividad, debe apartarse del conocimiento del caso.' },
  
  // Ofimática (50 preguntas)
  {
    id: 1001,
    axisId: 5,
    text: '¿Cuál de los siguientes NO es un componente principal de la suite ofimática Microsoft Office?',
    options: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Edge'
    ],
    correctOptionIndex: 3,
    explanation: 'Microsoft Edge es un navegador web, no forma parte de las herramientas principales de la suite ofimática Microsoft Office.'
  },
  {
    id: 1002,
    axisId: 5,
    text: '¿Qué combinación de teclas permite copiar un texto seleccionado en la mayoría de los programas de Windows?',
    options: [
      'Ctrl + X',
      'Ctrl + C',
      'Ctrl + V',
      'Ctrl + Z'
    ],
    correctOptionIndex: 1,
    explanation: 'La combinación Ctrl + C permite copiar el texto seleccionado al portapapeles en la mayoría de los programas de Windows.'
  },
  {
    id: 1003,
    axisId: 5,
    text: 'En Microsoft Word, ¿qué función cumple la tecla F7?',
    options: [
      'Abrir un documento existente',
      'Activar la revisión ortográfica y gramatical',
      'Guardar el documento actual',
      'Imprimir el documento'
    ],
    correctOptionIndex: 1,
    explanation: 'La tecla F7 en Microsoft Word activa la herramienta de revisión ortográfica y gramatical.'
  },
  {
    id: 1004,
    axisId: 5,
    text: '¿Cuál es la extensión por defecto de los archivos de Microsoft Word 2016 y versiones posteriores?',
    options: [
      '.doc',
      '.docx',
      '.txt',
      '.rtf'
    ],
    correctOptionIndex: 1,
    explanation: 'La extensión .docx es el formato predeterminado para documentos de Microsoft Word 2007 y versiones posteriores.'
  },
  {
    id: 1005,
    axisId: 5,
    text: 'En Microsoft Excel, ¿qué función se utiliza para sumar un rango de celdas?',
    options: [
      '=SUMAR()',
      '=TOTAL()',
      '=ADD()',
      '=SUMA()'
    ],
    correctOptionIndex: 3,
    explanation: 'La función =SUMA() se utiliza para sumar un rango de celdas en Microsoft Excel.'
  },
  // Preguntas de Archivo (5 preguntas de ejemplo)
  {
    id: 2001,
    axisId: 6,
    text: '¿Cuál de las siguientes acciones es correcta al momento de archivar documentos confidenciales?',
    options: [
      'Desecharlos en la papelera sin triturar',
      'Almacenarlos en carpetas sin etiquetar',
      'Utilizar un sistema de gestión documental con control de acceso',
      'Compartirlos por correo electrónico sin cifrar'
    ],
    correctOptionIndex: 2,
    explanation: 'Los documentos confidenciales deben almacenarse en un sistema de gestión documental con control de acceso para garantizar la seguridad de la información.'
  },
  {
    id: 2002,
    axisId: 6,
    text: '¿Qué es la tabla de retención documental (TRD)?',
    options: [
      'Un inventario de muebles de oficina',
      'Un listado de empleados de la entidad',
      'Una herramienta para la gestión de archivos físicos y electrónicos',
      'Un registro de asistencia de reuniones'
    ],
    correctOptionIndex: 2,
    explanation: 'La Tabla de Retención Documental (TRD) es una herramienta que establece los tiempos de retención y disposición final de los documentos de una entidad, tanto físicos como electrónicos.'
  },
  {
    id: 2003,
    axisId: 6,
    text: '¿Cuál es el tiempo mínimo de conservación de los documentos de archivo según la Ley General de Archivos?',
    options: [
      '1 año',
      '5 años',
      '10 años',
      'Depende del tipo de documento'
    ],
    correctOptionIndex: 3,
    explanation: 'El tiempo de conservación de los documentos varía según su tipo y valor, y se establece en las tablas de retención documental.'
  },
  {
    id: 2004,
    axisId: 6,
    text: '¿Qué es el ciclo vital de los documentos?',
    options: [
      'El tiempo que tarda en degradarse el papel',
      'Las etapas por las que pasa un documento desde su creación hasta su disposición final',
      'La duración de la tinta en un documento',
      'El proceso de digitalización de documentos'
    ],
    correctOptionIndex: 1,
    explanation: 'El ciclo vital de los documentos comprende las etapas de producción, tramitación, uso, conservación y disposición final.'
  },
  {
    id: 2005,
    axisId: 6,
    text: '¿Qué es un expediente electrónico?',
    options: [
      'Un documento escaneado',
      'Un conjunto de documentos electrónicos relacionados entre sí',
      'Un correo electrónico importante',
      'Una base de datos de clientes'
    ],
    correctOptionIndex: 1,
    explanation: 'Un expediente electrónico es un conjunto de documentos electrónicos correspondientes a un mismo asunto o trámite, que se organizan y gestionan como una unidad.'
  },
  { id: 438, axisId: 4, text: 'La "carga de la prueba" en un proceso disciplinario corresponde a:', options: ['El servidor investigado, quien debe demostrar su inocencia.', 'El Estado (la autoridad disciplinaria), quien debe demostrar la ocurrencia de la falta y la responsabilidad del investigado.', 'El quejoso.', 'Se presume la culpabilidad, por lo tanto no hay necesidad de pruebas.'], correctOptionIndex: 1, explanation: 'En virtud de la presunción de inocencia, es la entidad investigadora la que tiene la obligación de recaudar todas las pruebas necesarias para demostrar, más allá de toda duda razonable, que el servidor cometió la falta y que es responsable.' },
  { id: 439, axisId: 4, text: 'Nombrar en un cargo a una persona que no reúne los requisitos legales para desempeñarlo constituye una falta:', options: ['Leve', 'Grave', 'Gravísima', 'No es una falta si la persona es de confianza.'], correctOptionIndex: 2, explanation: 'Nombrar o posesionar en un cargo público a una persona sin el lleno de los requisitos es una falta gravísima, pues atenta contra el principio de mérito y la legalidad en el acceso a la función pública.' },
  { id: 440, axisId: 4, text: '¿Cuál es la diferencia entre "sanción" y "medida cautelar"?', options: ['No hay ninguna diferencia.', 'La sanción es el castigo final; la medida cautelar es una medida temporal dentro del proceso para asegurar su buen curso.', 'La sanción la impone un juez y la medida cautelar la impone el jefe.', 'La medida cautelar siempre es una multa.'], correctOptionIndex: 1, explanation: 'Una sanción (destitución, suspensión) es el resultado de un fallo que declara la responsabilidad. Una medida cautelar (como la suspensión provisional) es una decisión temporal que se toma durante la investigación para proteger el proceso, y no implica un juicio de culpabilidad.' },
  { id: 441, axisId: 4, text: '¿Qué es el principio de "congruencia" en el fallo disciplinario?', options: ['El fallo debe estar escrito en un lenguaje congruente.', 'La decisión final solo puede referirse a los hechos y cargos que fueron formulados en el pliego de cargos.', 'El investigado debe estar de acuerdo con el fallo.', 'El fallo debe ser congruente con las decisiones de otros países.'], correctOptionIndex: 1, explanation: 'Este principio protege el derecho de defensa. Significa que el servidor solo puede ser sancionado por los cargos específicos que se le comunicaron formalmente en el pliego de cargos, y no por hechos nuevos o diferentes que no tuvo la oportunidad de controvertir.' },
  { id: 442, axisId: 4, text: 'Un servidor que falsifica un documento público para obtener un beneficio comete una falta:', options: ['Leve, si el beneficio era pequeño.', 'Grave.', 'Gravísima, además del posible delito penal.', 'No es una falta si nadie resultó perjudicado.'], correctOptionIndex: 2, explanation: 'Realizar o facilitar la alteración de documentos públicos es una de las faltas catalogadas como gravísimas en el Código Disciplinario, sin perjuicio de la acción penal por el delito de falsedad en documento público.' },
  { id: 443, axisId: 4, text: 'La "notificación" de las decisiones en el proceso disciplinario es crucial para:', options: ['Hacer público el proceso en los medios de comunicación.', 'Garantizar el derecho de defensa y contradicción, permitiendo que el interesado conozca las decisiones y pueda interponer recursos.', 'Informar al quejoso sobre el avance del caso.', 'Cumplir con un requisito meramente formal.'], correctOptionIndex: 1, explanation: 'Una decisión no es vinculante hasta que se notifica debidamente. La notificación es el acto que permite al disciplinado ejercer su derecho de defensa, por ejemplo, apelando un fallo sancionatorio.' },
  { id: 444, axisId: 4, text: '¿Quién ejerce el control disciplinario sobre los abogados en ejercicio de su profesión?', options: ['La Procuraduría General de la Nación.', 'La Fiscalía General de la Nación.', 'La Comisión Nacional de Disciplina Judicial.', 'El Ministerio de Justicia.'], correctOptionIndex: 2, explanation: 'La Comisión Nacional de Disciplina Judicial y sus seccionales son las autoridades encargadas de examinar la conducta y sancionar las faltas de los abogados en ejercicio de su profesión y de los funcionarios de la Rama Judicial.' },
  { id: 445, axisId: 4, text: 'Un criterio para graduar la sanción es la "confesión". Esto significa que:', options: ['Si el servidor confiesa, se le absuelve.', 'La confesión puede ser un motivo para disminuir la sanción a imponer.', 'La confesión no tiene ningún efecto en el proceso disciplinario.', 'Se obliga al servidor a confesar para poder sancionarlo.'], correctOptionIndex: 1, explanation: 'La ley contempla la confesión como un criterio de atenuación de la sanción. Si el investigado confiesa la comisión de la falta antes de la formulación de cargos, la sanción puede ser disminuida.' },
  { id: 446, axisId: 4, text: '¿Un servidor público en provisionalidad puede ser investigado disciplinariamente?', options: ['No, porque no es de carrera.', 'Sí, el régimen disciplinario cobija a todos los servidores públicos, sin importar su tipo de vinculación.', 'Solo si la falta es gravísima.', 'Solo por el jefe inmediato, no por la Procuraduría.'], correctOptionIndex: 1, explanation: 'Todos los servidores públicos, sean de carrera, de libre nombramiento, en provisionalidad o temporales, son destinatarios de la ley disciplinaria y tienen los mismos deberes y prohibiciones.' },
  { id: 447, axisId: 4, text: 'Actuar con "manifiesto conflicto de intereses" es una falta que atenta contra el principio de:', options: ['Eficiencia.', 'Economía.', 'Imparcialidad.', 'Celeridad.'], correctOptionIndex: 2, explanation: 'El principio de imparcialidad exige que los servidores públicos tomen decisiones objetivas, basadas en el interés general y no en intereses personales, familiares o de negocios. Actuar en medio de un conflicto de intereses viola directamente este principio.' },
  { id: 448, axisId: 4, text: 'La "indagación preliminar" es una etapa del proceso disciplinario que busca:', options: ['Sancionar inmediatamente al servidor.', 'Verificar la ocurrencia de la conducta, identificar al posible autor y determinar si la conducta constituye falta disciplinaria.', 'Archivar todas las quejas que se presenten.', 'Negociar con el investigado.'], correctOptionIndex: 1, explanation: 'Cuando hay dudas sobre los hechos o sobre quién los cometió, se puede abrir una indagación preliminar. Su objetivo es recolectar la información básica para decidir si se archiva el caso o si se abre una investigación formal.' },
  { id: 449, axisId: 4, text: '¿Se puede sancionar disciplinariamente a un exservidor público?', options: ['No, una vez se retira ya no se le puede investigar.', 'Sí, si la falta se cometió mientras ejercía sus funciones y la acción no ha prescrito.', 'Solo si se retiró hace menos de un año.', 'Solo si la falta fue la de abandono del cargo.'], correctOptionIndex: 1, explanation: 'El hecho de que una persona ya no sea servidor público no impide que el Estado lo investigue y sancione por una falta cometida durante su servicio. La sanción de inhabilidad le impediría volver a vincularse con el Estado.' },
  { id: 450, axisId: 4, text: 'El "archivo definitivo" de una investigación disciplinaria procede cuando:', options: ['El investigado renuncia.', 'El quejoso retira la queja.', 'Está demostrado que la conducta no existió, que no es falta disciplinaria o que el investigado no la cometió.', 'El proceso se vuelve muy largo y complejo.'], correctOptionIndex: 2, explanation: 'El archivo es una decisión de fondo que se toma cuando, tras la investigación, se llega a la certeza de que no hay mérito para continuar con el proceso y formular cargos, ya sea por atipicidad de la conducta, por una causal de justificación o que el investigado no la cometió.' },
  
  // Preguntas adicionales de Ofimática
  {
    id: 2006,
    axisId: 5,
    text: '¿Cuál de las siguientes NO es una función de una hoja de cálculo como Microsoft Excel?',
    options: [
      'Realizar operaciones matemáticas complejas',
      'Crear presentaciones animadas',
      'Organizar y analizar datos en tablas',
      'Crear gráficos y visualizaciones de datos'
    ],
    correctOptionIndex: 1,
    explanation: 'Las hojas de cálculo como Excel no están diseñadas para crear presentaciones animadas, sino para trabajar con datos numéricos y de texto organizados en filas y columnas.'
  },
  {
    id: 2007,
    axisId: 5,
    text: '¿Qué tecla de acceso rápido se utiliza para guardar un documento en la mayoría de los programas de ofimática?',
    options: [
      'Ctrl + G',
      'Ctrl + S',
      'Ctrl + P',
      'Ctrl + D'
    ],
    correctOptionIndex: 1,
    explanation: 'La combinación de teclas Ctrl + S es el estándar para guardar documentos en la mayoría de los programas de ofimática como Word, Excel y PowerPoint.'
  },
  {
    id: 2008,
    axisId: 5,
    text: 'En un documento de texto, ¿qué efecto tiene la función "Buscar y reemplazar"?',
    options: [
      'Encuentra un texto específico y lo reemplaza por otro en todo el documento',
      'Elimina automáticamente los espacios en blanco adicionales',
      'Corrige automáticamente la ortografía',
      'Cambia el formato de todo el documento'
    ],
    correctOptionIndex: 0,
    explanation: 'La función "Buscar y reemplazar" permite localizar una palabra o frase específica en un documento y reemplazarla por otra en todo el documento o en una selección.'
  },
  
  // Preguntas adicionales de Archivo
  {
    id: 3001,
    axisId: 6,
    text: '¿Qué es un "expediente administrativo"?',
    options: [
      'Un documento cualquiera de la entidad',
      'Un conjunto de documentos relacionados con un mismo asunto o trámite',
      'Un archivo personal de un funcionario',
      'Un registro de asistencia de reuniones'
    ],
    correctOptionIndex: 1,
    explanation: 'Un expediente administrativo es el conjunto ordenado de documentos que, relacionados entre sí, dan cuenta del desarrollo de un asunto o trámite administrativo.'
  },
  {
    id: 3002,
    axisId: 6,
    text: '¿Cuál es el objetivo principal de la conservación de documentos?',
    options: [
      'Ocupar el menor espacio posible',
      'Garantizar la disponibilidad y acceso a la información a lo largo del tiempo',
      'Reducir costos de almacenamiento',
      'Eliminar documentos antiguos'
    ],
    correctOptionIndex: 1,
    explanation: 'El objetivo principal de la conservación documental es garantizar que la información contenida en los documentos esté disponible y accesible para su consulta y uso durante el tiempo que sea necesario.'
  },
  {
    id: 3003,
    axisId: 6,
    text: '¿Qué es la "valoración documental"?',
    options: [
      'El proceso de determinar el valor económico de los documentos',
      'El análisis que permite establecer los plazos de conservación y disposición final de los documentos',
      'La evaluación de la calidad del papel de los documentos',
      'La selección de documentos para digitalizar'
    ],
    correctOptionIndex: 1,
    explanation: 'La valoración documental es el proceso mediante el cual se analizan los documentos para determinar su valor administrativo, legal, fiscal o histórico, y así establecer sus plazos de retención y disposición final.'
  },
  {
    id: 3004,
    axisId: 6,
    text: '¿Qué es la "transferencia documental"?',
    options: [
      'El envío de documentos por correo electrónico',
      'La eliminación de documentos obsoletos',
      'El traspaso de documentos del archivo de gestión al archivo central o histórico',
      'La copia de seguridad de documentos digitales'
    ],
    correctOptionIndex: 2,
    explanation: 'La transferencia documental es el proceso mediante el cual los documentos son trasladados del archivo de gestión (donde se generan) al archivo central o histórico, según su ciclo de vida y valor.'
  },
  
  // Preguntas de Ofimática (axisId: 5)
  {
    id: 2001,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 1, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2002,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 2, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2003,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 3, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2004,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 4, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2005,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 5, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2006,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 6, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2007,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 7, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2008,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 8, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2009,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 9, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2010,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 10, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2011,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 11, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2012,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 12, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2013,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 13, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2014,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 14, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2015,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 15, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2016,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 16, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2017,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 17, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2018,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 18, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2019,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 19, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  {
    id: 2020,
    axisId: 5,
    text: 'Un funcionario enfrenta el caso 20, relacionado con el uso de Word, Excel o PowerPoint. ¿Cuál es la acción correcta?',
    options: [
      'Acción incorrecta 1',
      'Acción correcta',
      'Acción incorrecta 2',
      'Acción incorrecta 3'
    ],
    correctOptionIndex: 1,
    explanation: 'La acción correcta es la opción B, que representa la mejor práctica en el uso de herramientas ofimáticas para resolver el caso presentado.'
  },
  
  // Preguntas de Archivo (axisId: 6)
  {
    id: 3001,
    axisId: 6,
    text: 'En la situación 1, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3002,
    axisId: 6,
    text: 'En la situación 2, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3003,
    axisId: 6,
    text: 'En la situación 3, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3004,
    axisId: 6,
    text: 'En la situación 4, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3005,
    axisId: 6,
    text: 'En la situación 5, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3006,
    axisId: 6,
    text: 'En la situación 6, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3007,
    axisId: 6,
    text: 'En la situación 7, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3008,
    axisId: 6,
    text: 'En la situación 8, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3009,
    axisId: 6,
    text: 'En la situación 9, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3010,
    axisId: 6,
    text: 'En la situación 10, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3011,
    axisId: 6,
    text: 'En la situación 11, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3012,
    axisId: 6,
    text: 'En la situación 12, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3013,
    axisId: 6,
    text: 'En la situación 13, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3014,
    axisId: 6,
    text: 'En la situación 14, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3015,
    axisId: 6,
    text: 'En la situación 15, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3016,
    axisId: 6,
    text: 'En la situación 16, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3017,
    axisId: 6,
    text: 'En la situación 17, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3018,
    axisId: 6,
    text: 'En la situación 18, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3019,
    axisId: 6,
    text: 'En la situación 19, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  {
    id: 3020,
    axisId: 6,
    text: 'En la situación 20, se requiere tomar una decisión sobre conservación, clasificación o disposición de documentos. ¿Qué debe aplicarse?',
    options: [
      'Procedimiento incorrecto',
      'Tablas de Retención Documental (TRD)',
      'Medida no normativa',
      'Ninguna de las anteriores'
    ],
    correctOptionIndex: 1,
    explanation: 'Las Tablas de Retención Documental (TRD) son el instrumento técnico-normativo que permite la normalización de la gestión documental, estableciendo los tiempos de retención y disposición final de los documentos.'
  },
  
  // Preguntas de Técnicas de redacción y ortografía (axisId: 7)
  {
    id: 4001,
    axisId: 7,
    text: '¿Cuál de las siguientes opciones está escrita correctamente?',
    options: [
      'Voy hacer la tarea después',
      'Voy a ser la tarea después',
      'Voy a hacer la tarea después',
      'Voy a ser la tarea despues'
    ],
    correctOptionIndex: 2,
    explanation: 'La forma correcta es "Voy a hacer la tarea después" ya que "hacer" es el verbo principal y "después" lleva acento por ser palabra aguda terminada en vocal.'
  },
  {
    id: 4002,
    axisId: 7,
    text: 'Seleccione la oración con puntuación correcta:',
    options: [
      'El informe que presentaste, necesita correcciones, sin embargo, está bien estructurado.',
      'El informe que presentaste necesita correcciones, sin embargo, está bien estructurado.',
      'El informe, que presentaste, necesita correcciones, sin embargo está bien estructurado.',
      'El informe que presentaste necesita correcciones sin embargo, está bien estructurado.'
    ],
    correctOptionIndex: 1,
    explanation: 'La oración correcta no usa comas para aislar "que presentaste" ya que es una oración de relativo especificativa. El conector "sin embargo" va entre comas.'
  },
  {
    id: 4003,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número en letras? 1,250',
    options: [
      'Mil doscientos cincuenta',
      'Un mil doscientos cincuenta',
      'Mil doscientos y cincuenta',
      'Un mil doscientos y cincuenta'
    ],
    correctOptionIndex: 0,
    explanation: 'La forma correcta es "mil doscientos cincuenta". No se usa "un" antes de mil y no se debe usar la conjunción "y" entre centenas y decenas.'
  },
  {
    id: 4004,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de mayúsculas:',
    options: [
      'El Presidente de la República asistirá al evento en la ciudad de Bogotá.',
      'El presidente de la República asistirá al evento en la ciudad de Bogotá.',
      'El Presidente de la república asistirá al evento en la Ciudad de Bogotá.',
      'El presidente de la república asistirá al evento en la ciudad de bogotá.'
    ],
    correctOptionIndex: 1,
    explanation: 'Los cargos, como "presidente", van en minúscula. "República" y nombres propios como "Bogotá" van con mayúscula inicial.'
  },
  {
    id: 4005,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El documento fue enviado por el asesor, el contador y el abogado.',
      'El documento fue enviado por el asesor, contador y abogado.',
      'El documento fue enviado por el asesor, el contador, y el abogado.',
      'El documento fue enviado por el asesor el contador y el abogado.'
    ],
    correctOptionIndex: 0,
    explanation: 'En una enumeración de elementos de la misma categoría, se usa el artículo para cada elemento y no se coloca coma antes de la "y" final.'
  },
  {
    id: 4006,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de "haber" y "a ver":',
    options: [
      'A ver si podemos terminar el informe hoy, debe de haber terminado ayer.',
      'Haber si podemos terminar el informe hoy, debe de a ver terminado ayer.',
      'A ver si podemos terminar el informe hoy, debe a ver terminado ayer.',
      'Haber si podemos terminar el informe hoy, debe haber terminado ayer.'
    ],
    correctOptionIndex: 0,
    explanation: '"A ver" se usa como expresión para llamar la atención o indicar expectación. "Haber" es el verbo auxiliar en la construcción "debe de haber terminado".'
  },
  {
    id: 4007,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El informe, que fue revisado ayer, contiene varios errores de ortografía.',
      'El informe que fue revisado ayer, contiene varios errores de ortografía.',
      'El informe que, fue revisado ayer, contiene varios errores de ortografía.',
      'El informe, que fue revisado ayer contiene varios errores de ortografía.'
    ],
    correctOptionIndex: 0,
    explanation: 'La oración subordinada explicativa "que fue revisado ayer" va entre comas porque aporta información adicional pero no es esencial para identificar al sustantivo.'
  },
  {
    id: 4008,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las tildes:',
    options: [
      'El período de consultas está próximo a finalizar según el calendario establecido.',
      'El periodo de consultas está próximo a finalizar segun el calendario establecido.',
      'El período de consultas está proximo a finalizar según el calendario establecido.',
      'El periodo de consultas está próximo a finalizar según el calendario establecido.'
    ],
    correctOptionIndex: 3,
    explanation: 'Tanto "periodo" como "período" son correctas, pero deben escribirse sin tilde. "Próximo" y "según" llevan tilde por ser palabras esdrújulas.'
  },
  {
    id: 4009,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El informe final se entregará el próximo lunes; sin embargo, podría haber retrasos en la revisión.',
      'El informe final se entregará el próximo lunes, sin embargo, podría haber retrasos en la revisión.',
      'El informe final se entregará el próximo lunes sin embargo, podría haber retrasos en la revisión.',
      'El informe final se entregará el próximo lunes; sin embargo podría haber retrasos en la revisión.'
    ],
    correctOptionIndex: 0,
    explanation: 'Antes de "sin embargo" puede ir punto y coma o punto y seguido, pero no coma. Además, después de "sin embargo" debe ir coma.'
  },
  {
    id: 4010,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un encabezado:',
    options: [
      'Informe De Gestión Del Primer Trimestre Del Año 2023',
      'Informe de Gestión del Primer Trimestre del Año 2023',
      'Informe de gestión del primer trimestre del año 2023',
      'Informe De Gestión Del Primer Trimestre Del Año 2023'
    ],
    correctOptionIndex: 2,
    explanation: 'En los títulos de documentos, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Los demás sustantivos van en minúscula.'
  },
  {
    id: 4011,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número ordinal? 21',
    options: [
      'veintiunavo',
      'vigésimo primero',
      'veintiuno',
      'veintiún'
    ],
    correctOptionIndex: 1,
    explanation: 'El ordinal de 21 es "vigésimo primero". Los ordinales compuestos se escriben en dos palabras cuando la terminación es -ésimo.'
  },
  {
    id: 4012,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de los signos de interrogación:',
    options: [
      '¿Podrías indicarme, por favor, dónde está la oficina del director?',
      '¿Podrías indicarme, por favor, dónde está la oficina del director.',
      '¿Podrías indicarme, por favor, dónde está la oficina del director?.',
      '¿Podrías indicarme, por favor, dónde está la oficina del director'
    ],
    correctOptionIndex: 0,
    explanation: 'En español, las preguntas deben comenzar y terminar con signos de interrogación. No se coloca punto después del signo de cierre de interrogación.'
  },
  {
    id: 4013,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El informe fue elaborado por el área de gestión documental, el cual será presentado mañana.',
      'El informe fue elaborado por el área de gestión documental, la cual será presentado mañana.',
      'El informe fue elaborado por el área de gestión documental, el que será presentado mañana.',
      'El informe fue elaborado por el área de gestión documental, lo cual será presentado mañana.'
    ],
    correctOptionIndex: 0,
    explanation: 'El relativo "el cual" concuerda en género y número con "informe" (masculino singular). "El área" es femenino, pero el relativo se refiere a "informe".'
  },
  {
    id: 4014,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las letras mayúsculas:',
    options: [
      'El Ministerio de Educación Nacional publicó las nuevas directrices.',
      'El ministerio de educación nacional publicó las nuevas directrices.',
      'El Ministerio De Educación Nacional publicó las nuevas directrices.',
      'El Ministerio de educación nacional publicó las nuevas directrices.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los nombres de instituciones y organismos oficiales se escriben con mayúscula inicial en los nombres propios y en los sustantivos y adjetivos que forman parte de la denominación.'
  },
  {
    id: 4015,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'Los documentos deben ser firmados por el gerente, el subgerente o, en su defecto, por el coordinador.',
      'Los documentos deben ser firmados por el gerente, el subgerente o en su defecto, por el coordinador.',
      'Los documentos deben ser firmados por el gerente, el subgerente, o en su defecto, por el coordinador.',
      'Los documentos deben ser firmados por el gerente, el subgerente o, en su defecto por el coordinador.'
    ],
    correctOptionIndex: 0,
    explanation: 'La expresión "en su defecto" va entre comas porque es un inciso explicativo. No se coloca coma antes de "o" en una enumeración de elementos.'
  },
  {
    id: 4016,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las preposiciones:',
    options: [
      'El informe fue remitido al área de archivo según lo establecido en el manual de procedimientos.',
      'El informe fue remitido hacia el área de archivo según lo establecido en el manual de procedimientos.',
      'El informe fue remitido para el área de archivo según lo establecido en el manual de procedimientos.',
      'El informe fue remitido por el área de archivo según lo establecido en el manual de procedimientos.'
    ],
    correctOptionIndex: 0,
    explanation: 'La preposición "a" se usa para indicar dirección o destino. "Hacia" indicaría dirección física, no transferencia. "Para" indicaría finalidad, no destino. "Por" indicaría agente o medio.'
  },
  {
    id: 4017,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número en letras? 1.500.000',
    options: [
      'Un millón quinientos mil',
      'Un millón y quinientos mil',
      'Un millón, quinientos mil',
      'Un millón con quinientos mil'
    ],
    correctOptionIndex: 0,
    explanation: 'La forma correcta es "un millón quinientos mil". No se usa la conjunción "y" en los números compuestos de millón, salvo para las decenas y unidades.'
  },
  {
    id: 4018,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de las comillas:',
    options: [
      'El documento titulado "Guía de procedimientos administrativos" fue actualizado.',
      'El documento titulado "Guía de procedimientos administrativos," fue actualizado.',
      'El documento titulado "Guía de procedimientos administrativos", fue actualizado.',
      'El documento titulado, "Guía de procedimientos administrativos" fue actualizado.'
    ],
    correctOptionIndex: 0,
    explanation: 'Las comillas van pegadas al texto que enmarcan. No se coloca coma antes de las comillas de cierre a menos que la oración lo requiera por su estructura.'
  },
  {
    id: 4019,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El informe, que contiene datos confidenciales, debe manejarse con discreción.',
      'El informe que contiene datos confidenciales, debe manejarse con discreción.',
      'El informe, que contiene datos confidenciales debe manejarse con discreción.',
      'El informe que contiene datos confidenciales debe manejarse con discreción.'
    ],
    correctOptionIndex: 3,
    explanation: 'No se usan comas porque "que contiene datos confidenciales" es una oración de relativo especificativa, necesaria para identificar a qué informe se refiere.'
  },
  {
    id: 4020,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un saludo de carta:',
    options: [
      'Estimado señor González:',
      'Estimado Señor González:',
      'Estimado Señor gonzález:',
      'Estimado señor gonzález:'
    ],
    correctOptionIndex: 0,
    explanation: 'En el saludo de una carta, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Los títulos como "señor" van en minúscula.'
  },
  {
    id: 4021,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El informe fue presentado por el equipo de trabajo, el cual trabajó durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, quienes trabajaron durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, el que trabajó durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, los que trabajaron durante tres meses en su elaboración.'
    ],
    correctOptionIndex: 1,
    explanation: 'El relativo "quienes" concuerda con "equipo" cuando se refiere a las personas que lo componen. El verbo "trabajaron" va en plural porque concuerda con "quienes".'
  },
  {
    id: 4022,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las abreviaturas:',
    options: [
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la a.m.',
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la A.M.',
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la AM.',
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la am'
    ],
    correctOptionIndex: 2,
    explanation: 'Las abreviaturas de títulos como "Dr." y "Sr." llevan punto. Las siglas como "AM" (Antes del Mediodía) se escriben en mayúsculas sin puntos.'
  },
  {
    id: 4023,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El documento, que fue revisado por el comité, será publicado la próxima semana.',
      'El documento que fue revisado por el comité, será publicado la próxima semana.',
      'El documento, que fue revisado por el comité será publicado la próxima semana.',
      'El documento que fue revisado por el comité será publicado la próxima semana.'
    ],
    correctOptionIndex: 3,
    explanation: 'No se usan comas porque "que fue revisado por el comité" es una oración de relativo especificativa, necesaria para identificar a qué documento se refiere.'
  },
  {
    id: 4024,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un título de sección:',
    options: [
      'Marco Teórico Y Conceptual',
      'Marco teórico y conceptual',
      'Marco Teórico y Conceptual',
      'Marco teórico Y conceptual'
    ],
    correctOptionIndex: 1,
    explanation: 'En los títulos de secciones, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Las conjunciones como "y" van en minúscula.'
  },
  {
    id: 4025,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número ordinal? 33',
    options: [
      'treinta y tres',
      'trigésimo tercero',
      'treintaitresavo',
      'treinta y tresavo'
    ],
    correctOptionIndex: 1,
    explanation: 'El ordinal de 33 es "trigésimo tercero". Los ordinales compuestos se escriben en dos palabras cuando la terminación es -ésimo.'
  },
  {
    id: 4026,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de los signos de puntuación:',
    options: [
      'El informe, que fue presentado ayer, contiene varios errores; por lo tanto, debe ser corregido.',
      'El informe que fue presentado ayer, contiene varios errores, por lo tanto, debe ser corregido.',
      'El informe, que fue presentado ayer contiene varios errores; por lo tanto debe ser corregido.',
      'El informe que fue presentado ayer contiene varios errores por lo tanto, debe ser corregido.'
    ],
    correctOptionIndex: 0,
    explanation: 'La oración subordinada explicativa "que fue presentado ayer" va entre comas. "Por lo tanto" es un conector que va entre comas y después de punto y coma.'
  },
  {
    id: 4027,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El documento fue elaborado por el comité técnico, el cual está conformado por expertos en la materia.',
      'El documento fue elaborado por el comité técnico, quienes están conformados por expertos en la materia.',
      'El documento fue elaborado por el comité técnico, el que está conformado por expertos en la materia.',
      'El documento fue elaborado por el comité técnico, los cuales están conformados por expertos en la materia.'
    ],
    correctOptionIndex: 0,
    explanation: 'El relativo "el cual" concuerda en género y número con "comité" (masculino singular). Aunque el comité está formado por personas, se considera un ente singular.'
  },
  {
    id: 4028,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las letras mayúsculas:',
    options: [
      'El Departamento Administrativo de la Función Pública emitió un nuevo comunicado.',
      'El departamento administrativo de la función pública emitió un nuevo comunicado.',
      'El Departamento administrativo de la función pública emitió un nuevo comunicado.',
      'El Departamento Administrativo de la Función pública emitió un nuevo comunicado.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los nombres de instituciones y organismos oficiales se escriben con mayúscula inicial en los nombres propios y en los sustantivos y adjetivos que forman parte de la denominación.'
  },
  {
    id: 4029,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'Los documentos deben ser firmados por el gerente, el subgerente o, en su defecto, por el coordinador.',
      'Los documentos deben ser firmados por el gerente, el subgerente o en su defecto, por el coordinador.',
      'Los documentos deben ser firmados por el gerente, el subgerente, o en su defecto, por el coordinador.',
      'Los documentos deben ser firmados por el gerente, el subgerente o, en su defecto por el coordinador.'
    ],
    correctOptionIndex: 0,
    explanation: 'La expresión "en su defecto" va entre comas porque es un inciso explicativo. No se coloca coma antes de "o" en una enumeración de elementos.'
  },
  {
    id: 4030,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las preposiciones:',
    options: [
      'El informe fue enviado al departamento de recursos humanos para su revisión.',
      'El informe fue enviado hacia el departamento de recursos humanos para su revisión.',
      'El informe fue enviado para el departamento de recursos humanos para su revisión.',
      'El informe fue enviado por el departamento de recursos humanos para su revisión.'
    ],
    correctOptionIndex: 0,
    explanation: 'La preposición "a" se usa para indicar dirección o destino. "Hacia" indicaría dirección física, no transferencia. "Para" indicaría finalidad, no destino. "Por" indicaría agente o medio.'
  },
  {
    id: 4031,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número en letras? 2.500.000',
    options: [
      'Dos millones quinientos mil',
      'Dos millones y quinientos mil',
      'Dos millones, quinientos mil',
      'Dos millones con quinientos mil'
    ],
    correctOptionIndex: 0,
    explanation: 'La forma correcta es "dos millones quinientos mil". No se usa la conjunción "y" en los números compuestos de millón, salvo para las decenas y unidades.'
  },
  {
    id: 4032,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de las comillas:',
    options: [
      'El término "gestión documental" se refiere al conjunto de actividades administrativas.',
      'El término "gestión documental," se refiere al conjunto de actividades administrativas.',
      'El término "gestión documental", se refiere al conjunto de actividades administrativas.',
      'El término, "gestión documental" se refiere al conjunto de actividades administrativas.'
    ],
    correctOptionIndex: 0,
    explanation: 'Las comillas van pegadas al texto que enmarcan. No se coloca coma antes de las comillas de cierre a menos que la oración lo requiera por su estructura.'
  },
  {
    id: 4033,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El informe, que contiene datos confidenciales, debe manejarse con discreción.',
      'El informe que contiene datos confidenciales, debe manejarse con discreción.',
      'El informe, que contiene datos confidenciales debe manejarse con discreción.',
      'El informe que contiene datos confidenciales debe manejarse con discreción.'
    ],
    correctOptionIndex: 3,
    explanation: 'No se usan comas porque "que contiene datos confidenciales" es una oración de relativo especificativa, necesaria para identificar a qué informe se refiere.'
  },
  {
    id: 4034,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un saludo de correo electrónico:',
    options: [
      'Estimados colegas,',
      'Estimados Colegas,',
      'Estimados colegas',
      'Estimados Colegas'
    ],
    correctOptionIndex: 0,
    explanation: 'En el saludo de un correo electrónico, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Los sustantivos comunes como "colegas" van en minúscula.'
  },
  {
    id: 4035,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El informe fue presentado por el equipo de trabajo, el cual trabajó durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, quienes trabajaron durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, el que trabajó durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, los que trabajaron durante tres meses en su elaboración.'
    ],
    correctOptionIndex: 1,
    explanation: 'El relativo "quienes" concuerda con "equipo" cuando se refiere a las personas que lo componen. El verbo "trabajaron" va en plural porque concuerda con "quienes".'
  },
  {
    id: 4036,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las abreviaturas:',
    options: [
      'La Dra. Martínez y el Ing. López asistirán a la reunión de la p.m.',
      'La Dra. Martínez y el Ing. López asistirán a la reunión de la P.M.',
      'La Dra. Martínez y el Ing. López asistirán a la reunión de la PM.',
      'La Dra. Martínez y el Ing. López asistirán a la reunión de la pm'
    ],
    correctOptionIndex: 2,
    explanation: 'Las abreviaturas de títulos como "Dra." e "Ing." llevan punto. Las siglas como "PM" (Post Meridiem) se escriben en mayúsculas sin puntos.'
  },
  {
    id: 4037,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El documento, que fue revisado por el comité, será publicado la próxima semana.',
      'El documento que fue revisado por el comité, será publicado la próxima semana.',
      'El documento, que fue revisado por el comité será publicado la próxima semana.',
      'El documento que fue revisado por el comité será publicado la próxima semana.'
    ],
    correctOptionIndex: 3,
    explanation: 'No se usan comas porque "que fue revisado por el comité" es una oración de relativo especificativa, necesaria para identificar a qué documento se refiere.'
  },
  {
    id: 4038,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un título de capítulo:',
    options: [
      'Marco Metodológico De La Investigación',
      'Marco metodológico de la investigación',
      'Marco Metodológico de la Investigación',
      'Marco metodológico De la investigación'
    ],
    correctOptionIndex: 1,
    explanation: 'En los títulos de capítulos, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Las preposiciones como "de" y artículos como "la" van en minúscula.'
  },
  {
    id: 4039,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número ordinal? 52',
    options: [
      'cincuentaidosavo',
      'quincuagésimo segundo',
      'cincuenta y dos',
      'quincuagésimo segundo'
    ],
    correctOptionIndex: 3,
    explanation: 'El ordinal de 52 es "quincuagésimo segundo". Los ordinales compuestos se escriben en dos palabras cuando la terminación es -ésimo.'
  },
  {
    id: 4040,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de los signos de interrogación:',
    options: [
      '¿Podrías indicarme, por favor, dónde está la oficina del director?',
      '¿Podrías indicarme, por favor, dónde está la oficina del director.',
      '¿Podrías indicarme, por favor, dónde está la oficina del director?.',
      '¿Podrías indicarme, por favor, dónde está la oficina del director'
    ],
    correctOptionIndex: 0,
    explanation: 'En español, las preguntas deben comenzar y terminar con signos de interrogación. No se coloca punto después del signo de cierre de interrogación.'
  },
  {
    id: 4041,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El informe, que fue revisado por el comité, será publicado la próxima semana.',
      'El informe que fue revisado por el comité, será publicado la próxima semana.',
      'El informe, que fue revisado por el comité será publicado la próxima semana.',
      'El informe que fue revisado por el comité será publicado la próxima semana.'
    ],
    correctOptionIndex: 3,
    explanation: 'No se usan comas porque "que fue revisado por el comité" es una oración de relativo especificativa, necesaria para identificar a qué documento se refiere.'
  },
  {
    id: 4042,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de los signos de puntuación:',
    options: [
      'Los documentos requeridos son: acta de grado, fotocopia del diploma y fotocopia de la cédula.',
      'Los documentos requeridos son: acta de grado, fotocopia del diploma, y fotocopia de la cédula.',
      'Los documentos requeridos son, acta de grado, fotocopia del diploma y fotocopia de la cédula.',
      'Los documentos requeridos son: acta de grado; fotocopia del diploma; y fotocopia de la cédula.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los dos puntos (:) introducen una enumeración. No se usa coma antes de la "y" en una enumeración simple de elementos. El punto y coma (;) se usa para separar elementos complejos que ya llevan comas internas.'
  },
  {
    id: 4043,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número en letras? 1.250.000',
    options: [
      'Un millón doscientos cincuenta mil',
      'Un millón doscientos cincuenta mil pesos',
      'Un millón doscientos cincuenta mil, 00/100',
      'Un millón doscientos cincuenta mil 00/100'
    ],
    correctOptionIndex: 0,
    explanation: 'La forma correcta es escribir el número completo en letras. No se deben incluir decimales ni la moneda a menos que se especifique en el contexto.'
  },
  {
    id: 4044,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un encabezado de documento:',
    options: [
      'INFORME DE GESTIÓN 2023',
      'Informe de Gestión 2023',
      'Informe de gestión 2023',
      'Informe De Gestión 2023'
    ],
    correctOptionIndex: 2,
    explanation: 'En los títulos de documentos, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Las preposiciones y artículos van en minúscula.'
  },
  {
    id: 4045,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente párrafo?',
    options: [
      'El informe fue presentado por el equipo de trabajo, el cual trabajó durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, quienes trabajaron durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, el que trabajó durante tres meses en su elaboración.',
      'El informe fue presentado por el equipo de trabajo, los que trabajaron durante tres meses en su elaboración.'
    ],
    correctOptionIndex: 1,
    explanation: 'El relativo "quienes" concuerda con "equipo" cuando se refiere a las personas que lo componen. El verbo "trabajaron" va en plural porque concuerda con "quienes".'
  },
  {
    id: 4046,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las abreviaturas:',
    options: [
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la a.m.',
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la A.M.',
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la AM.',
      'El Dr. Pérez y el Sr. López asistirán a la reunión de la am'
    ],
    correctOptionIndex: 2,
    explanation: 'Las abreviaturas de títulos como "Dr." y "Sr." llevan punto. Las siglas como "AM" (Antes del Mediodía) se escriben en mayúsculas sin puntos.'
  },
  {
    id: 4047,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir la siguiente oración?',
    options: [
      'El documento, que fue revisado por el comité, será publicado la próxima semana.',
      'El documento que fue revisado por el comité, será publicado la próxima semana.',
      'El documento, que fue revisado por el comité será publicado la próxima semana.',
      'El documento que fue revisado por el comité será publicado la próxima semana.'
    ],
    correctOptionIndex: 3,
    explanation: 'No se usan comas porque "que fue revisado por el comité" es una oración de relativo especificativa, necesaria para identificar a qué documento se refiere.'
  },
  {
    id: 4048,
    axisId: 7,
    text: 'Seleccione la opción con el uso correcto de las mayúsculas en un título de sección:',
    options: [
      'Marco Teórico Y Conceptual',
      'Marco teórico y conceptual',
      'Marco Teórico y Conceptual',
      'Marco teórico Y conceptual'
    ],
    correctOptionIndex: 1,
    explanation: 'En los títulos de secciones, solo se escribe con mayúscula inicial la primera palabra y los nombres propios. Las conjunciones como "y" van en minúscula.'
  },
  {
    id: 4049,
    axisId: 7,
    text: '¿Cuál es la forma correcta de escribir el siguiente número ordinal? 33',
    options: [
      'treinta y tres',
      'trigésimo tercero',
      'treintaitresavo',
      'treinta y tresavo'
    ],
    correctOptionIndex: 1,
    explanation: 'El ordinal de 33 es "trigésimo tercero". Los ordinales compuestos se escriben en dos palabras cuando la terminación es -ésimo.'
  },
  {
    id: 4050,
    axisId: 7,
    text: 'Seleccione la oración con el uso correcto de los signos de puntuación:',
    options: [
      'El informe, que fue presentado ayer, contiene varios errores; por lo tanto, debe ser corregido.',
      'El informe que fue presentado ayer, contiene varios errores, por lo tanto, debe ser corregido.',
      'El informe, que fue presentado ayer contiene varios errores; por lo tanto debe ser corregido.',
      'El informe que fue presentado ayer contiene varios errores por lo tanto, debe ser corregido.'
    ],
    correctOptionIndex: 0,
    explanation: 'La oración subordinada explicativa "que fue presentado ayer" va entre comas. "Por lo tanto" es un conector que va entre comas y después de punto y coma.'
  }
];