import type { ThematicAxis, Question } from '../types';
import OFIMATICA_QUESTIONS from './temp_ofimatica_questions';

export const THEMATIC_AXES: ThematicAxis[] = [
  {
    id: 1,
    name: 'ConstituciÃ³n PolÃ­tica de Colombia',
    description: 'Preguntas sobre la estructura del estado y derechos fundamentales.',
    icon: 'fa-landmark-flag',
  },
  {
    id: 2,
    name: 'Estructura y Funcionamiento del Estado',
    description: 'Preguntas sobre la organizaciÃ³n y funcionamiento del estado colombiano.',
    icon: 'fa-building-columns',
  },
  {
    id: 3,
    name: 'Servicio al Ciudadano',
    description: 'Preguntas sobre atenciÃ³n y servicio al ciudadano en entidades pÃºblicas.',
    icon: 'fa-people-arrows',
  },
  {
    id: 4,
    name: 'Sistema Integrado de GestiÃ³n',
    description: 'Preguntas sobre el sistema de gestiÃ³n en entidades pÃºblicas.',
    icon: 'fa-gears',
  },
  {
    id: 5,
    name: 'OfimÃ¡tica, Archivo y RedacciÃ³n',
    description: 'Preguntas sobre herramientas ofimÃ¡ticas, gestiÃ³n documental y correcciÃ³n ortogrÃ¡fica.',
    icon: 'fa-file-word',
  },
];

export const QUESTIONS: Question[] = [
  // ConstituciÃ³n PolÃ­tica de Colombia (30 Preguntas)
  {
    id: 1,
    axisId: 1,
    text: 'Un ciudadano solicita a una entidad pÃºblica copia de un documento oficial. El funcionario duda si debe entregarlo porque contiene informaciÃ³n personal de otro ciudadano. Â¿QuÃ© principio debe primar en este caso?',
    options: [
      'El derecho de peticiÃ³n sobre cualquier otra norma.',
      'La reserva legal y protecciÃ³n de datos personales.',
      'La publicidad de los actos pÃºblicos sin excepciÃ³n.',
      'La autonomÃ­a administrativa de la entidad.'
    ],
    correctOptionIndex: 1,
    explanation: 'La reserva legal y protecciÃ³n de datos personales debe primar, ya que la informaciÃ³n personal estÃ¡ protegida por la ConstituciÃ³n y la ley de protecciÃ³n de datos.'
  },
  {
    id: 102,
    axisId: 1,
    text: 'Â¿QuÃ© entidad ejerce el control constitucional en Colombia?',
    options: [
      'El Consejo de Estado',
      'La Corte Suprema de Justicia',
      'La Corte Constitucional',
      'La FiscalÃ­a General de la NaciÃ³n'
    ],
    correctOptionIndex: 2,
    explanation: 'La Corte Constitucional tiene como funciÃ³n principal la guarda de la integridad y supremacÃ­a de la ConstituciÃ³n.'
  },
  {
    id: 103,
    axisId: 1,
    text: 'Un ciudadano interpone una acciÃ³n de tutela buscando la protecciÃ³n de su derecho al trabajo. Â¿Ante quÃ© juez se puede presentar esta acciÃ³n?',
    options: [
      'Ãšnicamente ante la Corte Constitucional',
      'Ante cualquier juez o tribunal de la RepÃºblica',
      'Solamente ante los jueces laborales',
      'Ante la ProcuradurÃ­a General de la NaciÃ³n'
    ],
    correctOptionIndex: 1,
    explanation: 'La acciÃ³n de tutela puede ser interpuesta ante cualquier juez de la RepÃºblica, quien tiene la obligaciÃ³n de tramitarla de manera preferente y sumaria para proteger los derechos fundamentales.'
  },
  {
    id: 104,
    axisId: 1,
    text: 'Â¿CuÃ¡l es el perÃ­odo de los senadores de la RepÃºblica en Colombia?',
    options: ['Dos aÃ±os', 'Cuatro aÃ±os', 'Cinco aÃ±os', 'Seis aÃ±os'],
    correctOptionIndex: 1,
    explanation: 'SegÃºn la ConstituciÃ³n PolÃ­tica de Colombia, los senadores son elegidos para un perÃ­odo de cuatro aÃ±os.'
  },
  {
    id: 105,
    axisId: 1,
    text: 'El derecho de peticiÃ³n, consagrado en el artÃ­culo 23 de la ConstituciÃ³n, es fundamentalmente un derecho de:',
    options: [
      'Acceso a la justicia',
      'ParticipaciÃ³n polÃ­tica',
      'Obtener pronta resoluciÃ³n a solicitudes respetuosas',
      'Libertad de expresiÃ³n'
    ],
    correctOptionIndex: 2,
    explanation: 'El derecho de peticiÃ³n permite a toda persona presentar solicitudes respetuosas a las autoridades por motivos de interÃ©s general o particular y a obtener pronta resoluciÃ³n.'
  },
  {
    id: 106,
    axisId: 1,
    text: 'La rama legislativa del poder pÃºblico en Colombia estÃ¡ conformada por:',
    options: [
      'La Presidencia y los Ministerios',
      'Las altas cortes',
      'El Senado de la RepÃºblica y la CÃ¡mara de Representantes',
      'Las Gobernaciones y las AlcaldÃ­as'
    ],
    correctOptionIndex: 2,
    explanation: 'El Congreso de la RepÃºblica, compuesto por el Senado y la CÃ¡mara de Representantes, conforma la rama legislativa.'
  },
   {
    id: 107,
    axisId: 1,
    text: 'Â¿CuÃ¡l de las siguientes acciones se utiliza para proteger derechos e intereses colectivos, como el goce de un ambiente sano?',
    options: ['AcciÃ³n de Tutela', 'AcciÃ³n de Cumplimiento', 'AcciÃ³n Popular', 'Habeas Corpus'],
    correctOptionIndex: 2,
    explanation: 'Las Acciones Populares son el mecanismo constitucional para la protecciÃ³n de los derechos e intereses colectivos.'
  },
  {
    id: 108,
    axisId: 1,
    text: 'El Presidente de la RepÃºblica de Colombia es elegido para un perÃ­odo de cuatro aÃ±os y:',
    options: [
      'Puede ser reelegido indefinidamente',
      'Puede ser reelegido para el perÃ­odo inmediatamente siguiente',
      'No puede ser reelegido en ningÃºn caso',
      'Puede ser reelegido una sola vez, despuÃ©s de un perÃ­odo'
    ],
    correctOptionIndex: 2,
    explanation: 'La reforma constitucional de 2015 eliminÃ³ la reelecciÃ³n presidencial. Un ciudadano que ha ejercido la presidencia no podrÃ¡ ser elegido nuevamente para este cargo.'
  },
  {
    id: 109,
    axisId: 1,
    text: 'La soberanÃ­a de Colombia reside exclusiva y esencialmente en:',
    options: ['El Presidente', 'El Congreso', 'El Pueblo', 'Las Fuerzas Armadas'],
    correctOptionIndex: 2,
    explanation: 'El ArtÃ­culo 3 de la ConstituciÃ³n PolÃ­tica de Colombia establece que la soberanÃ­a reside exclusivamente en el pueblo, del cual emana el poder pÃºblico.'
  },
  {
    id: 110,
    axisId: 1,
    text: 'Un decreto con fuerza de ley expedido por el Presidente en uso de facultades extraordinarias es un ejemplo de colaboraciÃ³n entre las ramas del poder. Â¿QuÃ© rama le otorga estas facultades?',
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
    text: 'Â¿QuÃ© es un Estado Social de Derecho, como se define Colombia en su ConstituciÃ³n?',
    options: [
      'Un Estado donde solo importan los derechos sociales.',
      'Un Estado que interviene en la economÃ­a para garantizar la igualdad de oportunidades.',
      'Un Estado que se rige por la ley y busca la justicia social y la dignidad humana.',
      'Un Estado donde el gobierno tiene poder absoluto.'
    ],
    correctOptionIndex: 2,
    explanation: 'Un Estado Social de Derecho combina el respeto por la legalidad (Estado de Derecho) con la bÃºsqueda activa de la justicia social y la garantÃ­a de condiciones de vida dignas para todos los ciudadanos.'
  },
  {
    id: 112,
    axisId: 1,
    text: 'El principio de la "buena fe" en la ConstituciÃ³n implica que:',
    options: [
      'Las autoridades y los particulares deben actuar con honestidad y lealtad.',
      'Solo los particulares deben actuar de buena fe.',
      'Solo las autoridades deben actuar de buena fe.',
      'Es una recomendaciÃ³n moral sin efectos jurÃ­dicos.'
    ],
    correctOptionIndex: 0,
    explanation: 'El artÃ­culo 83 de la ConstituciÃ³n presume la buena fe en todas las gestiones que los particulares adelanten ante las autoridades, y es un principio que debe regir las actuaciones de ambos.'
  },
  {
    id: 113,
    axisId: 1,
    text: 'Â¿QuiÃ©n es el Comandante Supremo de las Fuerzas Armadas de la RepÃºblica de Colombia?',
    options: [
      'El Ministro de Defensa',
      'El General de mayor rango',
      'El Presidente de la RepÃºblica',
      'El Director de la PolicÃ­a Nacional'
    ],
    correctOptionIndex: 2,
    explanation: 'Por mandato constitucional (ArtÃ­culo 189), el Presidente de la RepÃºblica ostenta el cargo de Comandante Supremo de las Fuerzas Armadas.'
  },
  {
    id: 114,
    axisId: 1,
    text: 'La mociÃ³n de censura es un mecanismo de control polÃ­tico que puede ser ejercido por el Congreso en contra de:',
    options: [
      'El Presidente de la RepÃºblica',
      'Los Magistrados de las Altas Cortes',
      'Los Ministros',
      'El Fiscal General de la NaciÃ³n'
    ],
    correctOptionIndex: 2,
    explanation: 'La mociÃ³n de censura, propuesta por una de las cÃ¡maras, puede concluir con la remociÃ³n de los ministros, superintendentes y directores de departamentos administrativos.'
  },
  {
    id: 115,
    axisId: 1,
    text: 'El derecho a la "libertad de conciencia" garantiza que:',
    options: [
      'Se puede actuar en contra de la ley si la conciencia lo dicta.',
      'Nadie serÃ¡ molestado por razÃ³n de sus convicciones o creencias.',
      'Solo se pueden profesar religiones aprobadas por el Estado.',
      'Se puede obligar a otros a compartir las mismas convicciones.'
    ],
    correctOptionIndex: 1,
    explanation: 'El ArtÃ­culo 18 de la ConstituciÃ³n protege la libertad de conciencia, asegurando que nadie puede ser obligado a actuar contra su conciencia ni ser molestado por sus convicciones.'
  },
  {
    id: 116,
    axisId: 1,
    text: 'Â¿CuÃ¡l de los siguientes es un "organismo de control" segÃºn la estructura del Estado colombiano?',
    options: [
      'El Ministerio de Hacienda',
      'El Banco de la RepÃºblica',
      'La ContralorÃ­a General de la RepÃºblica',
      'El Consejo Nacional Electoral'
    ],
    correctOptionIndex: 2,
    explanation: 'La ContralorÃ­a General de la RepÃºblica, junto con la ProcuradurÃ­a General de la NaciÃ³n y la DefensorÃ­a del Pueblo, forma parte de los organismos de control.'
  },
  {
    id: 117,
    axisId: 1,
    text: 'Para reformar la ConstituciÃ³n PolÃ­tica de Colombia, uno de los mecanismos es:',
    options: [
      'Un decreto presidencial',
      'Una ley ordinaria aprobada por mayorÃ­a simple',
      'Una Asamblea Nacional Constituyente',
      'Una consulta popular'
    ],
    correctOptionIndex: 2,
    explanation: 'El TÃ­tulo XIII de la ConstituciÃ³n establece tres mecanismos de reforma: el acto legislativo (Congreso), la Asamblea Constituyente o el referendo.'
  },
  {
    id: 118,
    axisId: 1,
    text: 'El "bloque de constitucionalidad" se refiere a:',
    options: [
      'Los artÃ­culos de la ConstituciÃ³n que no se pueden modificar.',
      'Normas y principios que, sin estar en la ConstituciÃ³n, se usan como parÃ¡metro de control constitucional.',
      'El edificio de la Corte Constitucional.',
      'Una propuesta para bloquear reformas a la ConstituciÃ³n.'
    ],
    correctOptionIndex: 1,
    explanation: 'El bloque de constitucionalidad estÃ¡ compuesto por la ConstituciÃ³n y ciertos tratados internacionales de derechos humanos que prevalecen en el orden interno y sirven como parÃ¡metro de control constitucional.'
  },
  {
    id: 119,
    axisId: 1,
    text: 'Â¿QuÃ© es el "Habeas Corpus"?',
    options: [
      'Un recurso para proteger el derecho al buen nombre.',
      'Un derecho fundamental y una acciÃ³n para proteger la libertad personal contra detenciones ilegales.',
      'Una orden para que el Estado revele informaciÃ³n pÃºblica.',
      'Un mecanismo para proteger la propiedad privada.'
    ],
    correctOptionIndex: 1,
    explanation: 'El Habeas Corpus es una garantÃ­a fundamental que protege a cualquier persona privada de la libertad de forma ilegal, permitiÃ©ndole solicitar a un juez que resuelva su situaciÃ³n jurÃ­dica en un tÃ©rmino de 36 horas.'
  },
  {
    id: 120,
    axisId: 1,
    text: 'La acciÃ³n de cumplimiento tiene como finalidad:',
    options: [
      'Hacer efectivo el cumplimiento de una ley o un acto administrativo.',
      'Proteger derechos colectivos.',
      'Proteger derechos fundamentales.',
      'Cumplir las sentencias de los jueces.'
    ],
    correctOptionIndex: 0,
    explanation: 'Esta acciÃ³n estÃ¡ diseÃ±ada para que cualquier persona pueda acudir ante la autoridad judicial para exigir el cumplimiento de una norma con fuerza de ley o un acto administrativo.'
  },
  {
    id: 121,
    axisId: 1,
    text: 'Â¿CuÃ¡l es la edad mÃ­nima para ser elegido Presidente de la RepÃºblica en Colombia?',
    options: ['25 aÃ±os', '30 aÃ±os', '35 aÃ±os', '40 aÃ±os'],
    correctOptionIndex: 1,
    explanation: 'SegÃºn el ArtÃ­culo 191 de la ConstituciÃ³n, para ser Presidente se requiere ser colombiano por nacimiento, ciudadano en ejercicio y mayor de treinta aÃ±os.'
  },
  {
    id: 122,
    axisId: 1,
    text: 'Los departamentos en Colombia son gobernados por un Gobernador y una:',
    options: ['CÃ¡mara de Representantes', 'Asamblea Departamental', 'Concejo Municipal', 'Junta Administradora Local'],
    correctOptionIndex: 1,
    explanation: 'Cada departamento tiene una Asamblea Departamental, que es la corporaciÃ³n polÃ­tico-administrativa de elecciÃ³n popular que ejerce control polÃ­tico sobre los actos del Gobernador.'
  },
  {
    id: 123,
    axisId: 1,
    text: 'Â¿QuÃ© derecho fundamental protege el ArtÃ­culo 15 de la ConstituciÃ³n?',
    options: ['El derecho a la vida', 'El derecho a la intimidad personal y familiar y al buen nombre', 'El derecho al trabajo', 'El derecho a la paz'],
    correctOptionIndex: 1,
    explanation: 'El ArtÃ­culo 15 consagra el derecho a la intimidad y el buen nombre, y establece el Habeas Data, que es el derecho a conocer, actualizar y rectificar la informaciÃ³n en bases de datos.'
  },
  {
    id: 124,
    axisId: 1,
    text: 'La FiscalÃ­a General de la NaciÃ³n pertenece a la rama:',
    options: ['Ejecutiva', 'Legislativa', 'Judicial', 'No pertenece a ninguna rama'],
    correctOptionIndex: 2,
    explanation: 'La FiscalÃ­a General de la NaciÃ³n forma parte de la Rama Judicial y goza de autonomÃ­a administrativa y presupuestal.'
  },
  {
    id: 125,
    axisId: 1,
    text: 'El "Estado de ConmociÃ³n Interior" puede ser declarado por el Presidente con la firma de todos los ministros para:',
    options: ['Afrontar una grave perturbaciÃ³n del orden pÃºblico que atente contra la estabilidad institucional.', 'Realizar una reforma econÃ³mica.', 'Suspender las elecciones.', 'Cambiar la ConstituciÃ³n.'],
    correctOptionIndex: 0,
    explanation: 'El Estado de ConmociÃ³n Interior es un estado de excepciÃ³n que permite al gobierno tomar medidas extraordinarias para conjurar una grave perturbaciÃ³n del orden pÃºblico.'
  },
  {
    id: 126,
    axisId: 1,
    text: 'Â¿CuÃ¡l es la mÃ¡xima autoridad de la jurisdicciÃ³n contencioso-administrativa?',
    options: ['La Corte Suprema de Justicia', 'La Corte Constitucional', 'El Consejo de Estado', 'El Consejo Superior de la Judicatura'],
    correctOptionIndex: 2,
    explanation: 'El Consejo de Estado actÃºa como tribunal supremo de lo contencioso-administrativo y cuerpo consultivo del Gobierno.'
  },
  {
    id: 127,
    axisId: 1,
    text: 'Un municipio es la entidad fundamental de la divisiÃ³n polÃ­tico-administrativa del Estado. Â¿QuiÃ©n es la mÃ¡xima autoridad administrativa en un municipio?',
    options: ['El Gobernador', 'El Concejal', 'El Alcalde', 'El Personero'],
    correctOptionIndex: 2,
    explanation: 'El Alcalde es el jefe de la administraciÃ³n local y representante legal del municipio, elegido popularmente para un perÃ­odo de cuatro aÃ±os.'
  },
  {
    id: 128,
    axisId: 1,
    text: 'El derecho a la "igualdad" consagrado en el ArtÃ­culo 13 de la ConstituciÃ³n implica que:',
    options: ['Todas las personas deben tener exactamente los mismos bienes.', 'La ley debe ser la misma para todos y no se pueden conceder privilegios.', 'Se prohÃ­be cualquier tipo de discriminaciÃ³n.', 'Ambas opciones B y C son correctas.'],
    correctOptionIndex: 3,
    explanation: 'El derecho a la igualdad significa que todas las personas nacen libres e iguales ante la ley, recibirÃ¡n la misma protecciÃ³n y trato de las autoridades y gozarÃ¡n de los mismos derechos, libertades y oportunidades sin ninguna discriminaciÃ³n.'
  },
  {
    id: 129,
    axisId: 1,
    text: 'Â¿QuiÃ©n elige al Fiscal General de la NaciÃ³n?',
    options: ['El Presidente de la RepÃºblica de una terna enviada por la Corte Suprema de Justicia.', 'La Corte Suprema de Justicia de una terna enviada por el Presidente de la RepÃºblica.', 'El Congreso en pleno.', 'Es elegido por voto popular.'],
    correctOptionIndex: 1,
    explanation: 'El Fiscal General de la NaciÃ³n es elegido por la Corte Suprema de Justicia para un perÃ­odo de cuatro aÃ±os, de una terna enviada por el Presidente de la RepÃºblica.'
  },
  {
    id: 130,
    axisId: 1,
    text: 'Los "derechos fundamentales" en la ConstituciÃ³n colombiana se caracterizan por:',
    options: ['Ser de aplicaciÃ³n inmediata y protegibles mediante acciÃ³n de tutela.', 'Necesitar siempre una ley que los desarrolle para poder ser exigidos.', 'Ser derechos Ãºnicamente de los ciudadanos colombianos.', 'Poder ser suspendidos permanentemente por el gobierno.'],
    correctOptionIndex: 0,
    explanation: 'Los derechos fundamentales, como la vida, la igualdad y la libertad, son de aplicaciÃ³n inmediata y cuentan con la acciÃ³n de tutela como mecanismo principal para su protecciÃ³n.'
  },
  { id: 131, axisId: 1, text: 'El PreÃ¡mbulo de la ConstituciÃ³n PolÃ­tica de 1991 invoca la protecciÃ³n de:', options: ['El Estado', 'La NaciÃ³n', 'Dios', 'El Presidente'], correctOptionIndex: 2, explanation: 'El PreÃ¡mbulo de la ConstituciÃ³n invoca la protecciÃ³n de Dios para fortalecer la unidad de la NaciÃ³n y asegurar los bienes de la vida, la convivencia, el trabajo, la justicia, la igualdad, el conocimiento, la libertad y la paz.' },
  { id: 132, axisId: 1, text: 'Â¿QuÃ© principio establece que Colombia es una RepÃºblica "descentralizada, con autonomÃ­a de sus entidades territoriales"?', options: ['Principio de soberanÃ­a popular', 'Principio de separaciÃ³n de poderes', 'Principio de organizaciÃ³n territorial', 'Principio de Estado Social de Derecho'], correctOptionIndex: 2, explanation: 'El ArtÃ­culo 1 de la ConstituciÃ³n define la organizaciÃ³n territorial del Estado, estableciendo la descentralizaciÃ³n y la autonomÃ­a de las entidades territoriales (departamentos, municipios, etc.).' },
  { id: 133, axisId: 1, text: 'La DefensorÃ­a del Pueblo forma parte del:', options: ['Poder Ejecutivo', 'Poder Judicial', 'Ministerio PÃºblico', 'Congreso de la RepÃºblica'], correctOptionIndex: 2, explanation: 'La DefensorÃ­a del Pueblo, junto con la ProcuradurÃ­a General de la NaciÃ³n, integra el Ministerio PÃºblico y tiene como funciÃ³n la guarda y promociÃ³n de los derechos humanos.' },
  { id: 134, axisId: 1, text: 'El derecho a la libre asociaciÃ³n permite a las personas:', options: ['Crear partidos polÃ­ticos Ãºnicamente.', 'Reunirse para cualquier fin ilÃ­cito.', 'Constituir libremente organizaciones sin la intervenciÃ³n del Estado.', 'Asociarse solo con fines de lucro.'], correctOptionIndex: 2, explanation: 'El ArtÃ­culo 38 garantiza el derecho de libre asociaciÃ³n para el desarrollo de las distintas actividades que las personas realizan en sociedad, siempre que sus fines sean lÃ­citos.' },
  { id: 135, axisId: 1, text: 'Â¿QuiÃ©n puede presentar proyectos de ley ante el Congreso?', options: ['Solamente los congresistas', 'El Gobierno Nacional, los congresistas, las altas cortes, entre otros.', 'Solo el Presidente de la RepÃºblica.', 'Cualquier ciudadano directamente.'], correctOptionIndex: 1, explanation: 'La iniciativa legislativa la tienen el Gobierno, los miembros del Congreso, la Corte Constitucional, la Corte Suprema, el Consejo de Estado, el Consejo Superior de la Judicatura, el Consejo Nacional Electoral, el Procurador, el Contralor, el Fiscal y, a travÃ©s de iniciativa popular, los ciudadanos.' },
  { id: 136, axisId: 1, text: 'El concepto de "mÃ­nimo vital" desarrollado por la Corte Constitucional se refiere a:', options: ['El salario mÃ­nimo legal vigente.', 'Las condiciones materiales bÃ¡sicas e indispensables para una existencia digna.', 'El derecho a tener un trabajo.', 'El mÃ­nimo de calorÃ­as que una persona debe consumir.'], correctOptionIndex: 1, explanation: 'El mÃ­nimo vital es un derecho fundamental que garantiza a toda persona las condiciones materiales de subsistencia (alimentaciÃ³n, vivienda, salud, etc.) para vivir de manera digna.' },
  { id: 137, axisId: 1, text: 'Â¿CuÃ¡l es la funciÃ³n principal del Consejo Nacional Electoral (CNE)?', options: ['Contar los votos en las elecciones.', 'Regular, inspeccionar, vigilar y controlar la actividad electoral.', 'Organizar la logÃ­stica de las elecciones.', 'Sancionar a los candidatos.'], correctOptionIndex: 1, explanation: 'El CNE es la mÃ¡xima autoridad electoral, encargada de la suprema inspecciÃ³n y vigilancia de la organizaciÃ³n electoral y de garantizar que las votaciones traduzcan la expresiÃ³n libre, espontÃ¡nea y autÃ©ntica de los ciudadanos.' },
  { id: 138, axisId: 1, text: 'El sufragio en Colombia es una funciÃ³n y un derecho. Se caracteriza por ser:', options: ['Universal, secreto y obligatorio', 'Universal, pÃºblico y voluntario', 'Restringido, secreto y voluntario', 'Universal, secreto y voluntario'], correctOptionIndex: 3, explanation: 'El voto es un derecho y un deber ciudadano. Es universal (para todos los ciudadanos mayores de edad), secreto (nadie puede ser obligado a revelar su voto) y voluntario (no hay sanciÃ³n por no votar).' },
  { id: 139, axisId: 1, text: 'Los tratados internacionales ratificados por Colombia que reconocen derechos humanos y prohÃ­ben su limitaciÃ³n en estados de excepciÃ³n:', options: ['Tienen menor jerarquÃ­a que las leyes ordinarias.', 'Prevalecen en el orden interno.', 'Son solo una guÃ­a para los jueces.', 'Pueden ser derogados por un decreto presidencial.'], correctOptionIndex: 1, explanation: 'SegÃºn el ArtÃ­culo 93 de la ConstituciÃ³n, estos tratados forman parte del bloque de constitucionalidad y prevalecen sobre la legislaciÃ³n interna.' },
  { id: 140, axisId: 1, text: 'Â¿QuÃ© se entiende por "voto programÃ¡tico"?', options: ['Votar por un programa de televisiÃ³n.', 'La obligaciÃ³n del elector de votar por el programa del partido.', 'El derecho de los electores a que el candidato elegido cumpla el programa de gobierno que propuso.', 'Un voto que se programa con anticipaciÃ³n.'], correctOptionIndex: 2, explanation: 'El voto programÃ¡tico obliga a los gobernadores y alcaldes a cumplir con el programa de gobierno que inscribieron al momento de su candidatura, so pena de poder ser revocados de su mandato.' },
  { id: 141, axisId: 1, text: 'La revocatoria del mandato es un mecanismo de participaciÃ³n ciudadana que aplica para:', options: ['Presidente y Congresistas', 'Gobernadores y Alcaldes', 'Magistrados de Altas Cortes', 'Todos los cargos de elecciÃ³n popular'], correctOptionIndex: 1, explanation: 'Este mecanismo permite a los ciudadanos dar por terminado el mandato de un gobernador o alcalde que no haya cumplido con su programa de gobierno.' },
  { id: 142, axisId: 1, text: 'El principio de "cosa juzgada constitucional" implica que:', options: ['Los fallos de la Corte Constitucional pueden ser revisados por cualquier juez.', 'Una vez la Corte Constitucional se pronuncia sobre una norma, no se puede volver a demandar por las mismas razones.', 'La ConstituciÃ³n no puede ser juzgada.', 'Todos los casos deben ser juzgados segÃºn la ConstituciÃ³n.'], correctOptionIndex: 1, explanation: 'Este principio otorga carÃ¡cter definitivo e inmutable a las sentencias de la Corte Constitucional, evitando que haya inseguridad jurÃ­dica sobre la exequibilidad de las normas.' },
  { id: 143, axisId: 1, text: 'La doble instancia, como garantÃ­a del debido proceso, significa que:', options: ['Una persona puede ser juzgada dos veces por el mismo hecho.', 'Toda sentencia judicial puede ser apelada o consultada ante un juez superior.', 'Se necesitan dos jueces para tomar una decisiÃ³n.', 'El proceso tiene dos etapas: investigaciÃ³n y juicio.'], correctOptionIndex: 1, explanation: 'Salvo las excepciones consagradas en la ley, toda sentencia judicial debe poder ser impugnada ante una autoridad judicial de mayor jerarquÃ­a para su revisiÃ³n.' },
  { id: 144, axisId: 1, text: 'Â¿QuiÃ©n tiene la competencia para juzgar al Presidente de la RepÃºblica por delitos cometidos en ejercicio de sus funciones?', options: ['La Corte Suprema de Justicia', 'El Senado de la RepÃºblica', 'La Corte Constitucional', 'La ComisiÃ³n de Acusaciones de la CÃ¡mara de Representantes lo investiga y el Senado lo juzga.'], correctOptionIndex: 3, explanation: 'La CÃ¡mara de Representantes acusa y el Senado juzga al Presidente (o a quien haga sus veces) por delitos cometidos en el ejercicio de sus funciones, previo dictamen de la ComisiÃ³n de Acusaciones.' },
  { id: 145, axisId: 1, text: 'El derecho a la protesta social pacÃ­fica estÃ¡ garantizado en la ConstituciÃ³n como una manifestaciÃ³n de:', options: ['El derecho a la rebeliÃ³n', 'Los derechos de reuniÃ³n y de libertad de expresiÃ³n', 'El derecho al trabajo', 'Un estado de anarquÃ­a'], correctOptionIndex: 1, explanation: 'El ArtÃ­culo 37 garantiza el derecho a reunirse y manifestarse pÃºblica y pacÃ­ficamente, siendo una extensiÃ³n de las libertades de expresiÃ³n y reuniÃ³n.' },
  { id: 146, axisId: 1, text: 'Â¿CuÃ¡l de los siguientes NO es un deber de la persona y del ciudadano segÃºn el ArtÃ­culo 95 de la ConstituciÃ³n?', options: ['Respetar los derechos ajenos y no abusar de los propios.', 'Obrar conforme al principio de solidaridad social.', 'Pagar tributos segÃºn los conceptos de justicia y equidad.', 'Pertenecer a un partido polÃ­tico.'], correctOptionIndex: 3, explanation: 'Pertenecer a un partido polÃ­tico es un derecho de participaciÃ³n polÃ­tica, pero no un deber constitucional general para todos los ciudadanos.' },
  { id: 147, axisId: 1, text: 'La "unidad de materia" en el proceso legislativo significa que:', options: ['Todas las leyes deben tratar sobre un solo tema.', 'Todo proyecto de ley debe referirse a una misma materia y serÃ¡n inadmisibles las disposiciones que no se relacionen con ella.', 'Los congresistas solo pueden especializarse en una materia.', 'Las leyes deben ser unitarias y no tener artÃ­culos.'], correctOptionIndex: 1, explanation: 'Este principio busca garantizar la coherencia y la tÃ©cnica legislativa, evitando que en una ley se incluyan temas inconexos o "micos".' },
  { id: 148, axisId: 1, text: 'El principio de "progresividad" de los derechos sociales, econÃ³micos y culturales implica que:', options: ['El Estado debe garantizar su satisfacciÃ³n de manera inmediata y total.', 'El Estado debe avanzar gradualmente en su satisfacciÃ³n y no puede retroceder injustificadamente.', 'Estos derechos solo se aplican a las generaciones futuras.', 'Estos derechos pueden ser eliminados en Ã©pocas de crisis.'], correctOptionIndex: 1, explanation: 'Este principio obliga al Estado a adoptar medidas para lograr progresivamente la plena efectividad de estos derechos, prohibiendo, en principio, las medidas regresivas.' },
  { id: 149, axisId: 1, text: 'Â¿QuiÃ©n expide el Plan Nacional de Desarrollo?', options: ['El Congreso mediante una ley.', 'El Presidente mediante un decreto.', 'El Departamento Nacional de PlaneaciÃ³n (DNP).', 'El Ministerio de Hacienda.'], correctOptionIndex: 0, explanation: 'El Plan Nacional de Desarrollo, que contiene los objetivos y estrategias del gobierno, es elaborado por el Gobierno Nacional con participaciÃ³n de las autoridades de planeaciÃ³n y se aprueba mediante una ley expedida por el Congreso.' },
  { id: 150, axisId: 1, text: 'La autonomÃ­a universitaria, garantizada en el ArtÃ­culo 69, permite a las universidades:', options: ['Incumplir las leyes del paÃ­s.', 'Darse sus directivas y regirse por sus propios estatutos.', 'No pagar impuestos.', 'Cobrar matrÃ­culas sin ningÃºn tipo de regulaciÃ³n.'], correctOptionIndex: 1, explanation: 'La autonomÃ­a universitaria les permite a las instituciones de educaciÃ³n superior establecer sus propios estatutos, designar sus autoridades y crear sus programas acadÃ©micos, de acuerdo con la ley.' },

  // FunciÃ³n PÃºblica (50 Preguntas)
  {
    id: 201,
    axisId: 2,
    text: 'SegÃºn la Ley 909 de 2004, Â¿cuÃ¡l es el principio rector de la carrera administrativa?',
    options: ['El mÃ©rito', 'La libre designaciÃ³n', 'La antigÃ¼edad', 'La discrecionalidad del nominador'],
    correctOptionIndex: 0,
    explanation: 'El mÃ©rito es el principio fundamental para el ingreso, la permanencia y el ascenso en los empleos de carrera administrativa.'
  },
  {
    id: 202,
    axisId: 2,
    text: 'Un empleo de "libre nombramiento y remociÃ³n" se caracteriza por:',
    options: [
      'Requerir un concurso pÃºblico para su provisiÃ³n',
      'Ser de perÃ­odo fijo',
      'Basarse en la discrecionalidad del nominador para su provisiÃ³n y retiro',
      'Otorgar estabilidad laboral absoluta al empleado'
    ],
    correctOptionIndex: 2,
    explanation: 'Los empleos de libre nombramiento y remociÃ³n no se proveen por concurso y su retiro no requiere de un proceso disciplinario, basÃ¡ndose en la discrecionalidad del nominador.'
  },
  {
    id: 203,
    axisId: 2,
    text: 'Un servidor pÃºblico en perÃ­odo de prueba es desvinculado por no superar la evaluaciÃ³n. Â¿Tiene derecho a reclamar reintegro a su cargo anterior si era de carrera?',
    options: [
      'No, pierde todos los derechos',
      'SÃ­, siempre y cuando el cargo anterior aÃºn exista',
      'Solo si la evaluaciÃ³n fue declarada nula por un juez',
      'SÃ­, pero debe volver a concursar'
    ],
    correctOptionIndex: 1,
    explanation: 'Un empleado con derechos de carrera que no supere el perÃ­odo de prueba en un nuevo cargo tiene derecho a ser reincorporado al empleo que venÃ­a desempeÃ±ando, si no ha sido suprimido.'
  },
  {
    id: 204,
    axisId: 2,
    text: 'La ComisiÃ³n Nacional del Servicio Civil (CNSC) es responsable de:',
    options: [
      'Pagar los salarios de todos los servidores pÃºblicos',
      'Administrar y vigilar el sistema de carrera administrativa',
      'Ejercer el control disciplinario de los empleados',
      'Nombrar a los ministros del despacho'
    ],
    correctOptionIndex: 1,
    explanation: 'La CNSC es un Ã³rgano autÃ³nomo e independiente, responsable de la administraciÃ³n y vigilancia de las carreras de los servidores pÃºblicos, excepciÃ³n hecha de las que tengan carÃ¡cter especial.'
  },
   {
    id: 205,
    axisId: 2,
    text: 'Â¿QuÃ© es una "situaciÃ³n administrativa" para un servidor pÃºblico?',
    options: [
      'Su estado civil',
      'Su nivel de endeudamiento',
      'La condiciÃ³n en la que se encuentra respecto al servicio (activo, licencia, permiso, etc.)',
      'Su afiliaciÃ³n polÃ­tica'
    ],
    correctOptionIndex: 2,
    explanation: 'Las situaciones administrativas definen la relaciÃ³n del servidor con la entidad. Incluyen el servicio activo, licencias, permisos, comisiones, encargos, entre otras.'
  },
  {
    id: 206,
    axisId: 2,
    text: 'El acoso laboral en el sector pÃºblico se rige principalmente por la Ley:',
    options: ['Ley 80 de 1993', 'Ley 1010 de 2006', 'Ley 1952 de 2019', 'Ley 909 de 2004'],
    correctOptionIndex: 1,
    explanation: 'La Ley 1010 de 2006 adoptÃ³ medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.'
  },
  {
    id: 207,
    axisId: 2,
    text: 'Un empleado de carrera es trasladado a otra ciudad sin su consentimiento. El argumenta que su nÃºcleo familiar estÃ¡ en su ciudad de origen. Â¿QuÃ© principio podrÃ­a estar vulnerando la entidad?',
    options: [
      'Principio de economÃ­a',
      'Principio de mÃ©rito',
      'Principio de unidad familiar y derechos del trabajador',
      'Principio de celeridad'
    ],
    correctOptionIndex: 2,
    explanation: 'Aunque los traslados son una potestad del empleador, deben realizarse sin vulnerar los derechos fundamentales del trabajador, como la protecciÃ³n a la familia.'
  },
  {
    id: 208,
    axisId: 2,
    text: 'La etapa de "perÃ­odo de prueba" en la carrera administrativa tiene como objetivo:',
    options: [
      'Capacitar al nuevo empleado en todas las Ã¡reas de la entidad',
      'Verificar la afinidad del empleado con sus compaÃ±eros',
      'Apreciar la eficiencia, adaptaciÃ³n y condiciones personales en el ejercicio del empleo',
      'Pagar un salario inferior mientras el empleado aprende'
    ],
    correctOptionIndex: 2,
    explanation: 'El perÃ­odo de prueba es la etapa final del concurso en la que se evalÃºa la capacidad del aspirante para desempeÃ±ar satisfactoriamente las funciones del empleo.'
  },
  {
    id: 209,
    axisId: 2,
    text: 'Â¿CuÃ¡l de las siguientes es una causal de retiro del servicio para un empleado pÃºblico?',
    options: [
      'Obtener una evaluaciÃ³n de desempeÃ±o sobresaliente',
      'Cumplir 5 aÃ±os en el mismo cargo',
      'Declaratoria de insubsistencia del nombramiento',
      'Solicitar una licencia no remunerada'
    ],
    correctOptionIndex: 2,
    explanation: 'La declaratoria de insubsistencia es una causal de retiro para empleos de libre nombramiento y remociÃ³n, o para empleados de carrera que obtengan una calificaciÃ³n no satisfactoria.'
  },
  {
    id: 210,
    axisId: 2,
    text: 'El Sistema de GestiÃ³n de la Seguridad y Salud en el Trabajo (SG-SST) es una obligaciÃ³n para las entidades pÃºblicas con el fin de:',
    options: [
      'Mejorar la imagen corporativa',
      'Prevenir lesiones y enfermedades causadas por las condiciones de trabajo',
      'Aumentar la productividad de los empleados',
      'Reducir los costos de la nÃ³mina'
    ],
    correctOptionIndex: 1,
    explanation: 'El SG-SST busca la promociÃ³n de la salud y la prevenciÃ³n de accidentes y enfermedades laborales, protegiendo la integridad de todos los servidores.'
  },
  {
    id: 211,
    axisId: 2,
    text: 'Â¿QuÃ© es el "encargo" en la funciÃ³n pÃºblica?',
    options: [
      'Un contrato de prestaciÃ³n de servicios.',
      'Asignar a un empleado de carrera, temporalmente, las funciones de un empleo de superior jerarquÃ­a.',
      'Nombrar a una persona por fuera de la entidad para un cargo temporal.',
      'Un perÃ­odo de vacaciones.'
    ],
    correctOptionIndex: 1,
    explanation: 'El encargo es una situaciÃ³n administrativa mediante la cual se designa temporalmente a un empleado de carrera para asumir, total o parcialmente, las funciones de otro empleo vacante.'
  },
  {
    id: 212,
    axisId: 2,
    text: 'La "evaluaciÃ³n del desempeÃ±o laboral" para un empleado de carrera tiene como propÃ³sito principal:',
    options: [
      'Determinar si debe ser ascendido automÃ¡ticamente.',
      'Servir de instrumento para el mejoramiento y la capacitaciÃ³n.',
      'Justificar el despido del empleado.',
      'Fijar el monto de su salario.'
    ],
    correctOptionIndex: 1,
    explanation: 'La evaluaciÃ³n del desempeÃ±o es una herramienta objetiva para medir las contribuciones laborales del empleado y detectar necesidades de capacitaciÃ³n y mejora continua.'
  },
  {
    id: 213,
    axisId: 2,
    text: 'Â¿CuÃ¡l de los siguientes es un derecho de los empleados pÃºblicos de carrera administrativa?',
    options: [
      'A no ser evaluado en su desempeÃ±o.',
      'A la estabilidad en el empleo.',
      'A elegir a su superior inmediato.',
      'A negarse a cumplir Ã³rdenes.'
    ],
    correctOptionIndex: 1,
    explanation: 'Uno de los derechos mÃ¡s importantes de la carrera administrativa es la estabilidad laboral, que implica que el empleado no puede ser retirado salvo por las causales previstas en la ley.'
  },
  {
    id: 214,
    axisId: 2,
    text: 'Un servidor pÃºblico que maneja recursos pÃºblicos y causa un detrimento patrimonial al Estado puede ser sujeto de un proceso de responsabilidad:',
    options: [
      'Ãšnicamente disciplinaria',
      'Ãšnicamente penal',
      'Disciplinaria, penal y fiscal',
      'Ãšnicamente administrativa'
    ],
    correctOptionIndex: 2,
    explanation: 'Las responsabilidades de los servidores pÃºblicos son concurrentes. Una misma conducta puede generar responsabilidad disciplinaria (por incumplir deberes), fiscal (por daÃ±o al patrimonio) y penal (si la conducta es un delito).'
  },
  {
    id: 215,
    axisId: 2,
    text: 'El "Manual EspecÃ­fico de Funciones y de Competencias Laborales" en una entidad pÃºblica sirve para:',
    options: [
      'Determinar el cÃ³digo de vestimenta.',
      'Establecer los requisitos, funciones y competencias para cada empleo.',
      'Publicar las vacantes de la entidad.',
      'Definir los salarios de los directivos.'
    ],
    correctOptionIndex: 1,
    explanation: 'Este manual es un instrumento de gestiÃ³n que describe de manera detallada las funciones de cada cargo y las competencias (conocimientos, habilidades) que se requieren para desempeÃ±arlo.'
  },
  {
    id: 216,
    axisId: 2,
    text: 'Â¿QuÃ© es una "planta de personal" en una entidad pÃºblica?',
    options: [
      'El conjunto de Ã¡rboles y jardines de la entidad.',
      'El listado de personas que trabajan por contrato de servicios.',
      'El conjunto de empleos permanentes previstos para el cumplimiento de las funciones de la entidad.',
      'El organigrama de la entidad.'
    ],
    correctOptionIndex: 2,
    explanation: 'La planta de personal determina el nÃºmero, denominaciÃ³n, cÃ³digo y grado de los empleos necesarios para que la entidad cumpla su misiÃ³n y objetivos.'
  },
  {
    id: 217,
    axisId: 2,
    text: 'Â¿Un servidor pÃºblico puede participar en polÃ­tica?',
    options: [
      'SÃ­, sin ninguna restricciÃ³n.',
      'No, le estÃ¡ absolutamente prohibido.',
      'SÃ­, pero con limitaciones, como no usar su cargo para influir en procesos electorales.',
      'Solo si pertenece al partido de gobierno.'
    ],
    correctOptionIndex: 2,
    explanation: 'Los servidores pÃºblicos tienen prohibido, entre otras cosas, utilizar su cargo para presionar a particulares o subalternos a respaldar una causa o campaÃ±a polÃ­tica o para influir en procesos electorales de carÃ¡cter polÃ­tico partidista.'
  },
  {
    id: 218,
    axisId: 2,
    text: 'La "comisiÃ³n de servicios" es una situaciÃ³n administrativa que permite a un empleado:',
    options: [
      'Dejar de ir a trabajar por un tiempo.',
      'Ejercer temporalmente sus funciones en un lugar diferente a la sede habitual de trabajo.',
      'Estudiar en el exterior con salario pagado.',
      'Trabajar en una empresa privada.'
    ],
    correctOptionIndex: 1,
    explanation: 'La comisiÃ³n de servicios se confiere para ejercer las funciones propias del empleo en un lugar diferente, cumplir misiones especiales o asistir a reuniones o capacitaciones.'
  },
  {
    id: 219,
    axisId: 2,
    text: 'Â¿QuÃ© diferencia principal existe entre un "empleado pÃºblico" y un "trabajador oficial"?',
    options: [
      'Ninguna, son sinÃ³nimos.',
      'El empleado pÃºblico tiene una relaciÃ³n legal y reglamentaria, mientras que el trabajador oficial tiene un contrato de trabajo.',
      'Los trabajadores oficiales no trabajan para el Estado.',
      'Los empleados pÃºblicos no reciben salario.'
    ],
    correctOptionIndex: 1,
    explanation: 'La vinculaciÃ³n del empleado pÃºblico se formaliza con un acto de nombramiento y posesiÃ³n. La del trabajador oficial, que labora en actividades de construcciÃ³n y sostenimiento de obras pÃºblicas, se rige por un contrato laboral.'
  },
  {
    id: 220,
    axisId: 2,
    text: 'La "provisiÃ³n transitoria" de un empleo de carrera a travÃ©s de un nombramiento en provisionalidad procede cuando:',
    options: [
      'No hay lista de elegibles vigente producto de un concurso.',
      'El jefe lo decide discrecionalmente.',
      'El empleo es de libre nombramiento y remociÃ³n.',
      'El empleado de carrera pide una licencia.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los empleos de carrera deben proveerse mediante concurso. Sin embargo, mientras se surte el concurso, pueden ser provistos transitoriamente mediante nombramiento provisional.'
  },
  { id: 221, axisId: 2, text: 'El Sistema de InformaciÃ³n y GestiÃ³n del Empleo PÃºblico (SIGEP) es una herramienta para:', options: ['Realizar los pagos de nÃ³mina', 'Registrar y actualizar las hojas de vida y la declaraciÃ³n de bienes y rentas de los servidores pÃºblicos', 'Vigilar la ejecuciÃ³n de los contratos estatales', 'Publicar las noticias de la entidad'], correctOptionIndex: 1, explanation: 'El SIGEP es el sistema oficial donde se centraliza la informaciÃ³n de los servidores pÃºblicos y contratistas del Estado, incluyendo sus hojas de vida, declaraciones de bienes y rentas y otros datos relevantes.' },
  { id: 222, axisId: 2, text: 'Â¿QuÃ© es el "retÃ©n social"?', options: ['Un grupo de protesta de servidores pÃºblicos', 'La prohibiciÃ³n de ascender en la carrera administrativa', 'Una protecciÃ³n especial de estabilidad laboral para ciertos servidores en procesos de reestructuraciÃ³n', 'Un tipo de contrato para jÃ³venes'], correctOptionIndex: 2, explanation: 'El retÃ©n social es una protecciÃ³n especial que impide el retiro del servicio, en el marco de procesos de reestructuraciÃ³n, a servidores que son padres o madres cabeza de familia, personas con discapacidad o "pre-pensionados".' },
  { id: 223, axisId: 2, text: 'La "licencia no remunerada" para un servidor pÃºblico implica:', options: ['Que puede ausentarse del trabajo y sigue recibiendo su salario.', 'La suspensiÃ³n de la relaciÃ³n laboral y del pago de salarios por un tiempo determinado.', 'Que es despedido de su cargo.', 'Que debe trabajar desde casa sin recibir pago.'], correctOptionIndex: 1, explanation: 'Durante la licencia no remunerada, el servidor no presta el servicio y la entidad no estÃ¡ obligada a pagarle el salario, aunque se mantiene el vÃ­nculo laboral.' },
  { id: 224, axisId: 2, text: 'El Plan Institucional de CapacitaciÃ³n (PIC) tiene como objetivo:', options: ['Organizar las fiestas de fin de aÃ±o de la entidad', 'Mejorar las competencias, habilidades y conocimientos de los servidores pÃºblicos', 'Evaluar el desempeÃ±o de los empleados', 'Contratar nuevo personal'], correctOptionIndex: 1, explanation: 'El PIC es un conjunto de programas de capacitaciÃ³n y formaciÃ³n que las entidades deben diseÃ±ar e implementar para fortalecer las competencias de sus servidores y mejorar el servicio.' },
  { id: 225, axisId: 2, text: 'Â¿Un empleado pÃºblico tiene derecho a la negociaciÃ³n colectiva?', options: ['No, estÃ¡ completamente prohibido.', 'SÃ­, pero solo sobre las condiciones salariales.', 'SÃ­, pero solo sobre las condiciones de empleo, excluyendo temas como la estructura del Estado o el mÃ©rito.', 'SÃ­, sin ninguna limitaciÃ³n, como en el sector privado.'], correctOptionIndex: 2, explanation: 'Los empleados pÃºblicos tienen derecho a la negociaciÃ³n colectiva para concertar las condiciones de empleo, pero existen materias excluidas, como la estructura de la administraciÃ³n, las competencias de la entidad, el mÃ©rito, etc.' },
  { id: 226, axisId: 2, text: 'Â¿CuÃ¡l es la diferencia entre un "traslado" y una "permuta"?', options: ['No hay diferencia.', 'El traslado es impuesto por la entidad, la permuta es voluntaria entre dos empleados.', 'El traslado implica cambio de ciudad, la permuta no.', 'La permuta es entre dos servidores del mismo grado y funciones, y requiere acuerdo entre ellos y la autorizaciÃ³n de los jefes.'], correctOptionIndex: 3, explanation: 'El traslado es un movimiento de personal que ordena la entidad. La permuta es un acuerdo voluntario entre dos empleados que desempeÃ±an cargos con funciones y requisitos iguales, y que requiere la aprobaciÃ³n de la administraciÃ³n.' },
  { id: 227, axisId: 2, text: 'La declaraciÃ³n de "vacancia" de un empleo se produce cuando:', options: ['El empleado sale a vacaciones.', 'El empleado se ausenta injustificadamente por un perÃ­odo determinado.', 'La entidad decide eliminar el cargo.', 'El empleado cumple la edad de retiro forzoso.'], correctOptionIndex: 3, explanation: 'La vacancia definitiva de un empleo se da por varias causales, entre ellas, la renuncia, la destituciÃ³n, el retiro por pensiÃ³n o por alcanzar la edad de retiro forzoso (actualmente 70 aÃ±os).' },
  { id: 228, axisId: 2, text: 'Â¿QuÃ© es el "fuero sindical" para un empleado pÃºblico?', options: ['El derecho a no pagar la cuota sindical.', 'Una garantÃ­a para que ciertos empleados sindicalizados no sean despedidos o desmejorados sin justa causa y permiso judicial.', 'El lugar donde se reÃºnen los sindicatos.', 'La prohibiciÃ³n de formar sindicatos.'], correctOptionIndex: 1, explanation: 'El fuero sindical es una protecciÃ³n especial para los directivos sindicales que busca garantizar el derecho de asociaciÃ³n y la autonomÃ­a sindical, impidiendo represalias por su labor.' },
  { id: 229, axisId: 2, text: 'Si un servidor pÃºblico renuncia y su renuncia no es aceptada en 30 dÃ­as, Â¿quÃ© ocurre?', options: ['Debe seguir trabajando indefinidamente.', 'El servidor puede separarse del cargo sin incurrir en abandono del puesto.', 'La renuncia se considera automÃ¡ticamente negada.', 'Debe presentar la renuncia de nuevo.'], correctOptionIndex: 1, explanation: 'Si la autoridad competente no acepta la renuncia dentro de los treinta dÃ­as siguientes a su presentaciÃ³n, el empleado puede retirarse del cargo y la entidad estÃ¡ obligada a pagarle sus prestaciones.' },
  { id: 230, axisId: 2, text: 'El Modelo Integrado de PlaneaciÃ³n y GestiÃ³n (MIPG) busca:', options: ['Reemplazar a todos los servidores pÃºblicos con tecnologÃ­a.', 'Integrar los sistemas de gestiÃ³n para que las entidades pÃºblicas sean mÃ¡s eficientes y transparentes.', 'Aumentar la burocracia en el Estado.', 'Crear un Ãºnico sistema de contrataciÃ³n para todo el paÃ­s.'], correctOptionIndex: 1, explanation: 'MIPG es un marco de referencia que dirige la gestiÃ³n pÃºblica al logro de resultados y a la satisfacciÃ³n de los ciudadanos, articulando diferentes polÃ­ticas y sistemas de gestiÃ³n.' },
  { id: 231, axisId: 2, text: 'Un empleado de carrera es nombrado en un cargo de libre nombramiento y remociÃ³n. Â¿QuÃ© pasa con sus derechos de carrera?', options: ['Los pierde inmediatamente.', 'Se le suspenden y puede solicitarlos de nuevo si se retira del cargo de libre nombramiento.', 'Debe renunciar a su cargo de carrera.', 'No puede ser nombrado en un cargo de libre nombramiento y remociÃ³n.'], correctOptionIndex: 1, explanation: 'Un empleado de carrera puede ser comisionado para desempeÃ±ar un cargo de libre nombramiento y remociÃ³n. En tal caso, no pierde sus derechos de carrera y, al finalizar la comisiÃ³n, tiene derecho a ser reintegrado a su cargo original o a uno de igual nivel.' },
  { id: 232, axisId: 2, text: 'El CÃ³digo de Integridad del Servicio PÃºblico se basa en valores como:', options: ['Honestidad, Respeto, Compromiso, Diligencia y Justicia.', 'Riqueza, Poder y Fama.', 'Competitividad, Individualismo y Eficacia.', 'Obediencia, Silencio y Disciplina.'], correctOptionIndex: 0, explanation: 'El CÃ³digo de Integridad establece cinco valores fundamentales que deben guiar el actuar de todos los servidores pÃºblicos para generar confianza en la ciudadanÃ­a.' },
  { id: 233, axisId: 2, text: 'Â¿QuÃ© es una "inhabilidad" para ejercer un cargo pÃºblico?', options: ['Una opiniÃ³n personal sobre la polÃ­tica.', 'Una circunstancia prevista en la ley que impide a una persona ser elegida o designada en un cargo pÃºblico.', 'No tener experiencia laboral.', 'No haber votado en las Ãºltimas elecciones.'], correctOptionIndex: 1, explanation: 'Las inhabilidades son restricciones para acceder a la funciÃ³n pÃºblica, basadas en antecedentes o situaciones personales (como haber sido condenado por delitos contra el patrimonio pÃºblico) que buscan garantizar la idoneidad y moralidad de los servidores.' },
  { id: 234, axisId: 2, text: 'El "abandono del cargo" se configura cuando un servidor pÃºblico:', options: ['Pide un permiso de tres dÃ­as.', 'No regresa al trabajo despuÃ©s de sus vacaciones.', 'Se ausenta del trabajo por tres dÃ­as consecutivos sin justa causa.', 'Presenta su renuncia.'], correctOptionIndex: 2, explanation: 'El abandono del cargo es una causal de retiro del servicio que se produce, entre otros casos, cuando el servidor se ausenta sin justificaciÃ³n por tres o mÃ¡s dÃ­as consecutivos, lo que conlleva la declaratoria de vacancia del empleo.' },
  { id: 235, axisId: 2, text: 'Â¿CuÃ¡l es la finalidad de la "lista de elegibles" en un concurso de mÃ©ritos?', options: ['Es una lista de espera para futuros concursos.', 'Contiene los nombres de todos los que presentaron la prueba.', 'Establece el orden de mÃ©rito de los aspirantes que superaron el concurso para la provisiÃ³n de los empleos.', 'Es una lista de recomendados por polÃ­ticos.'], correctOptionIndex: 2, explanation: 'La lista de elegibles se conforma con los aspirantes que aprobaron todas las fases del concurso, en estricto orden de mÃ©rito, y con ella se deben proveer las vacantes ofertadas.' },
  { id: 236, axisId: 2, text: 'Un conflicto de intereses para un servidor pÃºblico surge cuando:', options: ['Tiene una discusiÃ³n con un compaÃ±ero de trabajo.', 'Su interÃ©s particular y directo colide con el interÃ©s general que debe proteger.', 'No estÃ¡ de acuerdo con una polÃ­tica del gobierno.', 'Debe trabajar horas extras.'], correctOptionIndex: 1, explanation: 'Existe un conflicto de intereses cuando el servidor se enfrenta a una situaciÃ³n en la que debe tomar una decisiÃ³n que podrÃ­a beneficiarlo a Ã©l, a su cÃ³nyuge o a sus parientes, en contraposiciÃ³n al interÃ©s pÃºblico.' },
  { id: 237, axisId: 2, text: 'La "prohibiciÃ³n de la doble asignaciÃ³n del tesoro pÃºblico" significa que:', options: ['Un servidor no puede tener dos empleos.', 'Nadie puede recibir mÃ¡s de una asignaciÃ³n que provenga del tesoro pÃºblico, salvo las excepciones legales.', 'El tesoro pÃºblico no puede pagar dos veces la misma factura.', 'Un servidor no puede recibir un salario y una pensiÃ³n al mismo tiempo.'], correctOptionIndex: 1, explanation: 'Esta prohibiciÃ³n constitucional y legal busca evitar que una persona reciba simultÃ¡neamente mÃ¡s de un sueldo o asignaciÃ³n pagada con recursos pÃºblicos, con algunas excepciones como las pensiones o los honorarios de los docentes.' },
  { id: 238, axisId: 2, text: 'Â¿QuÃ© es el "empleo temporal" en la funciÃ³n pÃºblica?', options: ['Un contrato de prestaciÃ³n de servicios.', 'Un cargo creado para suplir necesidades transitorias de la administraciÃ³n, por un tiempo determinado.', 'Un empleo de libre nombramiento y remociÃ³n.', 'Un cargo para personas sin experiencia.'], correctOptionIndex: 1, explanation: 'Los empleos temporales se crean para cumplir funciones no permanentes, como las relacionadas con proyectos especiales o el desarrollo de actividades de carÃ¡cter transitorio, y no forman parte de la planta de personal permanente.' },
  { id: 239, axisId: 2, text: 'El principio de "moralidad" en la funciÃ³n administrativa obliga a los servidores a:', options: ['Asistir a ceremonias religiosas.', 'Actuar con rectitud, lealtad y honestidad en el ejercicio de sus funciones.', 'Vestir de una manera especÃ­fica.', 'Tener un tÃ­tulo en filosofÃ­a.'], correctOptionIndex: 1, explanation: 'El principio de moralidad exige que la actuaciÃ³n de los servidores pÃºblicos estÃ© siempre guiada por el interÃ©s general y el cumplimiento de los fines del Estado, y no por intereses particulares o corruptos.' },
  { id: 240, axisId: 2, text: 'El derecho de un servidor a recibir "capacitaciÃ³n y estÃ­mulos" busca:', options: ['Asegurar que los servidores tengan fiestas de fin de aÃ±o.', 'Mejorar su calidad de vida y potenciar su desempeÃ±o laboral.', 'Pagarles un salario adicional sin justificaciÃ³n.', 'Prepararlos para trabajar en el sector privado.'], correctOptionIndex: 1, explanation: 'Las entidades deben implementar programas de bienestar, estÃ­mulos y capacitaciÃ³n para mejorar el nivel de motivaciÃ³n, las competencias y la calidad de vida de sus servidores y sus familias.' },
  { id: 241, axisId: 2, text: 'La Ley de Cuotas (Ley 581 de 2000) busca garantizar:', options: ['Que al menos un 30% de los cargos de mÃ¡ximo nivel decisorio sean ocupados por mujeres.', 'Una cuota de empleos para jÃ³venes.', 'Una cuota de empleos para personas con discapacidad.', 'Que los hombres ocupen la mayorÃ­a de los cargos directivos.'], correctOptionIndex: 0, explanation: 'Esta ley establece que un mÃ­nimo del 30% de los cargos de mÃ¡ximo nivel decisorio y otros niveles directivos en la Rama Ejecutiva deben ser desempeÃ±ados por mujeres, para promover la participaciÃ³n equitativa.' },
  { id: 242, axisId: 2, text: 'Â¿QuÃ© es una "incompatibilidad" para un servidor pÃºblico?', options: ['Tener malas relaciones con su jefe.', 'Una prohibiciÃ³n para realizar ciertas actividades o celebrar contratos que puedan interferir con el ejercicio imparcial de su cargo.', 'No ser compatible con la cultura de la entidad.', 'No tener las competencias para el cargo.'], correctOptionIndex: 1, explanation: 'Las incompatibilidades son prohibiciones que se le imponen al servidor pÃºblico durante el ejercicio de sus funciones para evitar que su dedicaciÃ³n al servicio pÃºblico se vea afectada por otras actividades o intereses.' },
  { id: 243, axisId: 2, text: 'El "teletrabajo" para los servidores pÃºblicos es:', options: ['Una modalidad laboral que permite desempeÃ±ar las funciones desde un lugar distinto a la oficina, usando tecnologÃ­as de la informaciÃ³n.', 'Un permiso para no ir a trabajar.', 'Un tipo de contrato especial para tecnÃ³logos.', 'Una forma de reducir el salario.'], correctOptionIndex: 0, explanation: 'El teletrabajo es una forma de organizaciÃ³n laboral que no altera la naturaleza del vÃ­nculo laboral, pero permite que las funciones se realicen fuera de las instalaciones de la entidad, con los mismos derechos y deberes.' },
  { id: 244, axisId: 2, text: 'El "principio de igualdad de oportunidades" en el acceso a la funciÃ³n pÃºblica significa que:', options: ['Todos los ciudadanos tienen derecho a un cargo pÃºblico.', 'El acceso a los cargos de carrera se basa en el mÃ©rito, sin discriminaciÃ³n de ningÃºn tipo.', 'Los cargos se deben repartir por igual entre hombres y mujeres.', 'Los cargos se asignan por sorteo.'], correctOptionIndex: 1, explanation: 'Este principio, ligado al mÃ©rito, garantiza que todos los ciudadanos que cumplan los requisitos puedan competir en igualdad de condiciones por un empleo pÃºblico, a travÃ©s de concursos transparentes.' },
  { id: 245, axisId: 2, text: 'La "licencia por maternidad" es un derecho que busca proteger a:', options: ['La madre trabajadora y al reciÃ©n nacido.', 'Todos los empleados de la entidad.', 'Ãšnicamente a la madre.', 'Ãšnicamente al padre.'], correctOptionIndex: 0, explanation: 'Esta licencia remunerada busca garantizar la recuperaciÃ³n de la madre y el cuidado del reciÃ©n nacido, protegiendo la salud de ambos y la unidad familiar.' },
  { id: 246, axisId: 2, text: 'Â¿Un contratista de prestaciÃ³n de servicios es considerado un servidor pÃºblico?', options: ['SÃ­, en todos los casos.', 'No, es un particular que colabora con el Estado y su relaciÃ³n es contractual, no laboral.', 'Solo si el contrato es superior a un aÃ±o.', 'Solo si trabaja en las instalaciones de la entidad.'], correctOptionIndex: 1, explanation: 'Los contratistas no son servidores pÃºblicos. No tienen una relaciÃ³n laboral (legal y reglamentaria), sino una relaciÃ³n contractual regida por la ley de contrataciÃ³n estatal. Por ende, no tienen carrera administrativa, prestaciones sociales, etc.' },
  { id: 247, axisId: 2, text: 'Â¿QuÃ© es la "supresiÃ³n de un empleo"?', options: ['Cuando un empleado es despedido.', 'La eliminaciÃ³n formal de un cargo de la planta de personal de una entidad.', 'Cuando un empleado renuncia.', 'Una sanciÃ³n disciplinaria.'], correctOptionIndex: 1, explanation: 'La supresiÃ³n de un empleo es una causal de retiro que ocurre cuando, por razones de reestructuraciÃ³n o modernizaciÃ³n, la entidad elimina un cargo de su planta. El empleado de carrera cuyo cargo es suprimido tiene derecho a una indemnizaciÃ³n o a ser reincorporado.' },
  { id: 248, axisId: 2, text: 'La polÃ­tica de "Gobierno Digital" (antes Gobierno en LÃ­nea) busca que las entidades pÃºblicas:', options: ['Cierren todas sus oficinas fÃ­sicas.', 'Usen la tecnologÃ­a para prestar mejores servicios a los ciudadanos de forma mÃ¡s eficiente y transparente.', 'Se comuniquen solo por redes sociales.', 'Les exijan a los ciudadanos tener un computador de Ãºltima generaciÃ³n.'], correctOptionIndex: 1, explanation: 'Gobierno Digital busca transformar la relaciÃ³n entre el Estado y los ciudadanos a travÃ©s del uso estratÃ©gico de las TecnologÃ­as de la InformaciÃ³n y las Comunicaciones (TIC).' },
  { id: 249, axisId: 2, text: 'Un servidor pÃºblico debe "custodiar y cuidar la documentaciÃ³n e informaciÃ³n" que por razÃ³n de su empleo tenga bajo su responsabilidad. Â¿QuÃ© principio estÃ¡ aplicando?', options: ['Principio de publicidad', 'Principio de responsabilidad y diligencia', 'Principio de economÃ­a', 'Principio de transparencia'], correctOptionIndex: 1, explanation: 'Es un deber de todo servidor pÃºblico ser diligente en el manejo de la informaciÃ³n y los documentos, garantizando su conservaciÃ³n, seguridad y buen uso.' },
  { id: 250, axisId: 2, text: 'La edad de retiro forzoso para los servidores pÃºblicos en Colombia es de:', options: ['65 aÃ±os', '70 aÃ±os', '62 aÃ±os para mujeres y 65 para hombres', 'No hay edad de retiro forzoso'], correctOptionIndex: 1, explanation: 'La Ley 1821 de 2016 estableciÃ³ que la edad mÃ¡xima para el retiro del cargo de las personas que desempeÃ±en funciones pÃºblicas es de 70 aÃ±os.' },

  // ContrataciÃ³n Estatal (50 Preguntas)
  {
    id: 301,
    axisId: 3,
    text: 'Â¿CuÃ¡l es la modalidad de selecciÃ³n del contratista que procede por regla general en la contrataciÃ³n estatal?',
    options: ['ContrataciÃ³n directa', 'MÃ­nima cuantÃ­a', 'Concurso de mÃ©ritos', 'LicitaciÃ³n pÃºblica'],
    correctOptionIndex: 3,
    explanation: 'SegÃºn el Estatuto de ContrataciÃ³n (Ley 80 de 1993 y sus modificaciones), la licitaciÃ³n pÃºblica es la regla general para la escogencia de contratistas.'
  },
  {
    id: 302,
    axisId: 3,
    text: 'El principio de "transparencia" en la contrataciÃ³n estatal busca:',
    options: [
      'Garantizar la selecciÃ³n objetiva y la igualdad de oportunidades',
      'Asegurar que los contratos se ejecuten rÃ¡pidamente',
      'Permitir que la entidad contrate con quien prefiera',
      'Reducir los costos de los procesos de selecciÃ³n'
    ],
    correctOptionIndex: 0,
    explanation: 'El principio de transparencia busca garantizar la imparcialidad y la selecciÃ³n objetiva del contratista, evitando favoritismos y asegurando igualdad de oportunidades para los proponentes.'
  },
    {
    id: 303,
    axisId: 3,
    text: 'Una entidad necesita contratar un artista reconocido para un evento cultural. Â¿QuÃ© modalidad de selecciÃ³n serÃ­a la mÃ¡s apropiada?',
    options: ['LicitaciÃ³n pÃºblica', 'SelecciÃ³n abreviada', 'Concurso de mÃ©ritos', 'ContrataciÃ³n directa'],
    correctOptionIndex: 3,
    explanation: 'La contrataciÃ³n de artistas reconocidos es una de las causales de contrataciÃ³n directa, debido a las calidades "intuitu personae" que se requieren.'
  },
  {
    id: 304,
    axisId: 3,
    text: 'Â¿QuÃ© es el SECOP (Sistema ElectrÃ³nico de ContrataciÃ³n PÃºblica)?',
    options: [
      'Una empresa privada que asesora entidades pÃºblicas',
      'Un software para hacer seguimiento a la ejecuciÃ³n de los contratos',
      'La plataforma oficial para publicar y gestionar los procesos de contrataciÃ³n del Estado',
      'Un sindicato de contratistas del Estado'
    ],
    correctOptionIndex: 2,
    explanation: 'El SECOP es la plataforma transaccional que permite a las entidades estatales publicar los documentos de sus procesos y a los proveedores consultar y participar en ellos.'
  },
  {
    id: 305,
    axisId: 3,
    text: 'El principio de "planeaciÃ³n" implica que una entidad, antes de abrir un proceso de selecciÃ³n, debe:',
    options: [
      'Tener el dinero en efectivo guardado en una caja fuerte',
      'Contar con los estudios y diseÃ±os previos que soporten la necesidad y el valor del contrato',
      'Saber el nombre del contratista que va a ganar',
      'Publicar el proceso en redes sociales'
    ],
    correctOptionIndex: 1,
    explanation: 'El principio de planeaciÃ³n exige que la decisiÃ³n de contratar se fundamente en estudios previos de necesidad, oportunidad, y anÃ¡lisis del sector econÃ³mico, para evitar la improvisaciÃ³n.'
  },
  {
    id: 306,
    axisId: 3,
    text: 'En una licitaciÃ³n pÃºblica, un proponente ofrece un precio artificialmente bajo, que no podrÃ¡ cumplir. La entidad debe:',
    options: [
      'Aceptarlo porque es el mÃ¡s barato',
      'Rechazar la oferta por ser considerada artificialmente baja, previa solicitud de explicaciones',
      'Negociar con Ã©l para que suba el precio',
      'Adjudicarle el contrato y esperar que cumpla'
    ],
    correctOptionIndex: 1,
    explanation: 'Las entidades deben rechazar ofertas que parezcan artificialmente bajas si, tras solicitar aclaraciones al proponente, este no logra justificar la viabilidad y seriedad de su oferta.'
  },
   {
    id: 307,
    axisId: 3,
    text: 'La "garantÃ­a de seriedad de la oferta" tiene como finalidad:',
    options: [
      'Asegurar que el contratista pague sus impuestos',
      'Cubrir los perjuicios de la entidad si el proponente no firma el contrato despuÃ©s de adjudicado',
      'Garantizar la calidad de los bienes o servicios ofertados',
      'Pagarle al supervisor del contrato'
    ],
    correctOptionIndex: 1,
    explanation: 'Esta garantÃ­a busca proteger a la entidad de proponentes que, despuÃ©s de ser seleccionados, se rehÃºsan a firmar el contrato, obligando a la entidad a iniciar un nuevo proceso.'
  },
  {
    id: 308,
    axisId: 3,
    text: 'Â¿CuÃ¡l de estos principios NO rige la contrataciÃ³n estatal?',
    options: ['EconomÃ­a', 'Responsabilidad', 'Transparencia', 'Enriquecimiento'],
    correctOptionIndex: 3,
    explanation: 'El enriquecimiento no es un principio de la contrataciÃ³n estatal. Los principios rectores buscan el cumplimiento de los fines estatales y la protecciÃ³n del patrimonio pÃºblico.'
  },
  {
    id: 309,
    axisId: 3,
    text: 'El supervisor de un contrato estatal es, por regla general:',
    options: [
      'Un contratista externo especializado',
      'Un servidor pÃºblico de la misma entidad',
      'Un delegado de la ContralorÃ­a',
      'El mismo representante legal del contratista'
    ],
    correctOptionIndex: 1,
    explanation: 'La supervisiÃ³n implica el seguimiento tÃ©cnico, administrativo, financiero y jurÃ­dico del contrato y es ejercida por un servidor pÃºblico de la entidad contratante.'
  },
  {
    id: 310,
    axisId: 3,
    text: 'La "liquidaciÃ³n" de un contrato estatal es el acto por el cual:',
    options: [
      'Se da por terminado el contrato de forma anticipada',
      'Se define quiÃ©nes son las partes y cuÃ¡l es el objeto',
      'Las partes realizan un corte de cuentas final sobre las obligaciones y derechos del contrato',
      'Se publica el contrato en el SECOP'
    ],
    correctOptionIndex: 2,
    explanation: 'La liquidaciÃ³n es la etapa final donde las partes establecen un balance definitivo de las obligaciones ejecutadas, pagos realizados y saldos pendientes.'
  },
  {
    id: 311,
    axisId: 3,
    text: 'La modalidad de "selecciÃ³n abreviada" se utiliza para:',
    options: [
      'Contratos de gran complejidad tÃ©cnica.',
      'Bienes y servicios de caracterÃ­sticas tÃ©cnicas uniformes y de comÃºn utilizaciÃ³n.',
      'Contratar emprÃ©stitos.',
      'Escoger al contratista de forma discrecional.'
    ],
    correctOptionIndex: 1,
    explanation: 'La selecciÃ³n abreviada es un procedimiento mÃ¡s Ã¡gil que la licitaciÃ³n, usado para adquirir bienes y servicios de caracterÃ­sticas uniformes, como papelerÃ­a o combustible, a menudo mediante subasta inversa.'
  },
  {
    id: 312,
    axisId: 3,
    text: 'Â¿QuÃ© es el "Registro Ãšnico de Proponentes" (RUP)?',
    options: [
      'Un registro de todos los servidores pÃºblicos.',
      'Un registro que llevan las CÃ¡maras de Comercio con la informaciÃ³n de los interesados en contratar con el Estado.',
      'Una base de datos de los contratos adjudicados.',
      'Un listado de las entidades estatales que contratan.'
    ],
    correctOptionIndex: 1,
    explanation: 'El RUP centraliza la informaciÃ³n sobre la capacidad jurÃ­dica, financiera, organizativa y la experiencia de los proponentes, y es requisito para participar en la mayorÃ­a de los procesos de selecciÃ³n.'
  },
  {
    id: 313,
    axisId: 3,
    text: 'El principio de "selecciÃ³n objetiva" implica que la escogencia del contratista se harÃ¡:',
    options: [
      'Considerando la amistad con el representante legal de la entidad.',
      'Al ofrecimiento mÃ¡s favorable a la entidad y a los fines que ella busca.',
      'Al proponente que ofrezca el precio mÃ¡s bajo, sin importar la calidad.',
      'Al primer proponente que presente una oferta.'
    ],
    correctOptionIndex: 1,
    explanation: 'La selecciÃ³n objetiva es un deber fundamental que prohÃ­be la escogencia por motivos subjetivos o favoritismos. Se debe seleccionar la oferta que mejor responda a los criterios establecidos en los pliegos de condiciones.'
  },
  {
    id: 314,
    axisId: 3,
    text: 'Â¿QuÃ© es la "adenda" en un proceso de contrataciÃ³n?',
    options: [
      'El documento que declara desierto el proceso.',
      'Una modificaciÃ³n a los pliegos de condiciones realizada por la entidad antes del cierre del proceso.',
      'La oferta presentada por un proponente.',
      'El contrato firmado.'
    ],
    correctOptionIndex: 1,
    explanation: 'Las adendas son documentos que modifican o aclaran los pliegos de condiciones, y deben ser comunicadas a todos los posibles oferentes para garantizar la igualdad de oportunidades.'
  },
  {
    id: 315,
    axisId: 3,
    text: 'Una entidad pÃºblica declara "desierto" un proceso de selecciÃ³n cuando:',
    options: [
      'No le gusta ninguno de los proponentes.',
      'No se presenta ninguna oferta o ninguna cumple con los requisitos del pliego.',
      'El presupuesto se agota.',
      'El jefe de la entidad cambia de opiniÃ³n.'
    ],
    correctOptionIndex: 1,
    explanation: 'La declaratoria de desierto procede por razones objetivas, como la falta de proponentes o la inhabilidad de todas las ofertas presentadas, lo que obliga a la entidad a iniciar un nuevo proceso.'
  },
  {
    id: 316,
    axisId: 3,
    text: 'La "interventorÃ­a" en un contrato de obra se diferencia de la "supervisiÃ³n" en que:',
    options: [
      'La interventorÃ­a siempre es mÃ¡s costosa.',
      'La interventorÃ­a generalmente la ejerce un particular experto, mientras que la supervisiÃ³n la ejerce un servidor de la entidad.',
      'No hay ninguna diferencia.',
      'La supervisiÃ³n solo aplica para contratos de bajo valor.'
    ],
    correctOptionIndex: 1,
    explanation: 'Cuando se requiere un conocimiento tÃ©cnico especializado, la entidad contrata a un tercero (persona natural o jurÃ­dica) como interventor. La supervisiÃ³n, en cambio, es ejercida directamente por personal de la entidad.'
  },
  {
    id: 317,
    axisId: 3,
    text: 'El "equilibrio econÃ³mico del contrato" es un principio que busca:',
    options: [
      'Que el contratista siempre gane mucho dinero.',
      'Mantener la equivalencia de las prestaciones entre las partes durante la ejecuciÃ³n del contrato.',
      'Que el Estado nunca pierda dinero.',
      'Que el contrato nunca se modifique.'
    ],
    correctOptionIndex: 1,
    explanation: 'Si durante la ejecuciÃ³n del contrato surgen situaciones imprevistas y no imputables al contratista que alteran gravemente la ecuaciÃ³n econÃ³mica, esta debe ser restablecida para evitar un perjuicio injustificado.'
  },
  {
    id: 318,
    axisId: 3,
    text: 'Â¿CuÃ¡l es la finalidad de la etapa de "estudios previos" en la contrataciÃ³n?',
    options: [
      'Justificar la necesidad de la contrataciÃ³n y definir sus especificaciones tÃ©cnicas y econÃ³micas.',
      'Es un mero formalismo sin importancia prÃ¡ctica.',
      'Elegir al contratista antes de abrir el proceso.',
      'Establecer el cronograma de pagos.'
    ],
    correctOptionIndex: 0,
    explanation: 'Los estudios previos son el soporte fundamental del contrato. En ellos, la entidad analiza el sector, define la necesidad, el objeto, el valor estimado y la modalidad de selecciÃ³n, entre otros aspectos clave.'
  },
  {
    id: 319,
    axisId: 3,
    text: 'Una "uniÃ³n temporal" se diferencia de un "consorcio" en que:',
    options: [
      'En el consorcio, los miembros responden solidariamente por todo; en la uniÃ³n temporal, responden por las sanciones segÃºn su participaciÃ³n.',
      'No hay ninguna diferencia legal.',
      'Los consorcios son para obras y las uniones temporales para servicios.',
      'En la uniÃ³n temporal todos tienen la misma participaciÃ³n.'
    ],
    correctOptionIndex: 0,
    explanation: 'Ambas son formas de asociaciÃ³n para presentar ofertas. La diferencia clave radica en la responsabilidad: en el consorcio, todos responden por el 100% de las obligaciones. En la uniÃ³n temporal, para efectos de sanciones, la responsabilidad se delimita a la participaciÃ³n de cada miembro en la ejecuciÃ³n.'
  },
  {
    id: 320,
    axisId: 3,
    text: 'Â¿QuÃ© son los "pliegos de condiciones"?',
    options: [
      'El borrador del contrato.',
      'Las reglas de juego del proceso de selecciÃ³n, que definen el objeto, requisitos y criterios de evaluaciÃ³n.',
      'La oferta econÃ³mica del proponente.',
      'Un documento que resume la historia de la entidad.'
    ],
    correctOptionIndex: 1,
    explanation: 'Los pliegos de condiciones (o su equivalente) son la "ley del contrato" para las partes y establecen todas las condiciones que los proponentes deben cumplir y los criterios con los que serÃ¡n evaluados.'
  },
  { id: 321, axisId: 3, text: 'La "urgencia manifiesta" es una causal de:', options: ['LicitaciÃ³n pÃºblica', 'Concurso de mÃ©ritos', 'ContrataciÃ³n directa', 'SelecciÃ³n abreviada'], correctOptionIndex: 2, explanation: 'La urgencia manifiesta permite a una entidad contratar directamente, sin proceso de selecciÃ³n, para conjurar situaciones excepcionales como desastres o calamidades que requieren una acciÃ³n inmediata.' },
  { id: 322, axisId: 3, text: 'El principio de "economÃ­a" en la contrataciÃ³n estatal se refiere a:', options: ['Contratar siempre lo mÃ¡s barato.', 'Asegurar que los procedimientos logren su finalidad y se desarrollen con celeridad y eficiencia.', 'Ahorrar en los materiales del contrato.', 'No realizar contratos de alto valor.'], correctOptionIndex: 1, explanation: 'Este principio busca la eficiencia en la gestiÃ³n contractual, simplificando trÃ¡mites, evitando dilaciones y asegurando que los recursos se inviertan de la mejor manera para cumplir los fines estatales.' },
  { id: 323, axisId: 3, text: 'El "contrato de concesiÃ³n" tiene por objeto:', options: ['La compra de bienes para la entidad.', 'Otorgar a un particular la prestaciÃ³n de un servicio o la construcciÃ³n y operaciÃ³n de una obra pÃºblica a cambio de una remuneraciÃ³n.', 'La prestaciÃ³n de servicios de consultorÃ­a.', 'El arrendamiento de un inmueble.'], correctOptionIndex: 1, explanation: 'En la concesiÃ³n, el Estado traslada a un particular (el concesionario) la operaciÃ³n de una infraestructura o la prestaciÃ³n de un servicio, y la remuneraciÃ³n del concesionario usualmente proviene de las tarifas pagadas por los usuarios.' },
  { id: 324, axisId: 3, text: 'Â¿QuÃ© es un "contrato adicional" en valor?', options: ['Un contrato completamente nuevo.', 'Una modificaciÃ³n del contrato original que implica un aumento en su valor, sujeto a ciertos lÃ­mites legales.', 'Un pago extra no autorizado al contratista.', 'Un contrato para supervisar al contrato principal.'], correctOptionIndex: 1, explanation: 'Si durante la ejecuciÃ³n se requieren obras o servicios adicionales que no superen el 50% del valor inicial del contrato, se puede celebrar un contrato adicional para cubrirlos, siempre que estÃ© debidamente justificado.' },
  { id: 325, axisId: 3, text: 'La "audiencia de adjudicaciÃ³n" en una licitaciÃ³n pÃºblica es el acto en el cual:', options: ['Se negocia el precio con los proponentes.', 'La entidad comunica pÃºblicamente la decisiÃ³n de a quiÃ©n se le adjudica el contrato.', 'Los proponentes presentan sus ofertas.', 'Se firma el contrato.'], correctOptionIndex: 1, explanation: 'Es una audiencia pÃºblica donde la entidad, tras evaluar las ofertas, informa el resultado y adjudica el contrato al proponente que obtuvo el mayor puntaje, garantizando la transparencia del proceso.' },
  { id: 326, axisId: 3, text: 'Â¿QuÃ© es una "inhabilidad sobreviniente" en la contrataciÃ³n?', options: ['Una inhabilidad que tenÃ­a el contratista desde el inicio.', 'Una inhabilidad que surge o se configura despuÃ©s de la firma del contrato.', 'Un error en el nombre del contratista.', 'Una inhabilidad que se puede subsanar.'], correctOptionIndex: 1, explanation: 'Si durante la ejecuciÃ³n del contrato, el contratista incurre en una causal de inhabilidad (por ejemplo, es sancionado fiscalmente), esto puede dar lugar a la terminaciÃ³n del contrato.' },
  { id: 327, axisId: 3, text: 'El "principio de responsabilidad" implica que:', options: ['Solo el contratista es responsable de la ejecuciÃ³n del contrato.', 'Los servidores pÃºblicos que participan en la actividad contractual responden disciplinaria, civil y penalmente por sus actuaciones.', 'La entidad no tiene ninguna responsabilidad.', 'Los ciudadanos son responsables de vigilar los contratos.'], correctOptionIndex: 1, explanation: 'Este principio asegura que tanto los servidores pÃºblicos como los contratistas y consultores son responsables por la gestiÃ³n contractual y deben rendir cuentas por sus acciones y omisiones.' },
  { id: 328, axisId: 3, text: 'La modalidad de "mÃ­nima cuantÃ­a" se caracteriza por:', options: ['Ser un proceso muy largo y complejo.', 'Un procedimiento simplificado y rÃ¡pido para contrataciones de bajo valor.', 'No requerir publicaciÃ³n en el SECOP.', 'Aplicar solo para contratos de obra.'], correctOptionIndex: 1, explanation: 'Es un proceso expedito diseÃ±ado para la adquisiciÃ³n de bienes, servicios y obras cuyo valor no excede el 10% de la menor cuantÃ­a de la entidad, con reglas y plazos mÃ¡s cortos.' },
  { id: 329, axisId: 3, text: 'Â¿Se puede "ceder" un contrato estatal?', options: ['No, nunca.', 'SÃ­, siempre que el contratista quiera.', 'SÃ­, pero se requiere la autorizaciÃ³n previa y por escrito de la entidad contratante.', 'Solo si el contratista fallece.'], correctOptionIndex: 2, explanation: 'La cesiÃ³n de un contrato estatal solo es posible si la entidad contratante lo autoriza, verificando que el nuevo contratista (cesionario) cumple con los mismos o mejores requisitos que el original.' },
  { id: 330, axisId: 3, text: 'El "acta de inicio" de un contrato es importante porque:', options: ['Es el documento que reemplaza al contrato.', 'A partir de su firma, empieza a correr el plazo de ejecuciÃ³n del contrato.', 'Define el valor final del contrato.', 'Liquida las obligaciones del contrato.'], correctOptionIndex: 1, explanation: 'Aunque el contrato se perfecciona con la firma, el plazo de ejecuciÃ³n (el tiempo que tiene el contratista para cumplir sus obligaciones) generalmente comienza a contarse desde la firma del acta de inicio, una vez cumplidos los requisitos previos.' },
  { id: 331, axisId: 3, text: 'Â¿QuÃ© son los "riesgos previsibles" en la contrataciÃ³n estatal?', options: ['Eventos que son imposibles de prever.', 'Aquellos riesgos que pueden afectar la ejecuciÃ³n del contrato y que deben ser identificados y distribuidos entre las partes desde los estudios previos.', 'Los riesgos que solo asume el contratista.', 'Riesgos que solo asume la entidad.'], correctOptionIndex: 1, explanation: 'La ley exige que en los pliegos de condiciones se identifiquen y tipifiquen los riesgos previsibles que puedan afectar el equilibrio econÃ³mico del contrato, y se asigne quiÃ©n debe asumirlos (entidad, contratista o ambos).' },
  { id: 332, axisId: 3, text: 'La "caducidad" de un contrato estatal es:', options: ['La terminaciÃ³n del contrato por el paso del tiempo.', 'Una potestad excepcional de la entidad para dar por terminado el contrato por un incumplimiento grave del contratista.', 'Un acuerdo entre las partes para terminar el contrato.', 'La suspensiÃ³n del contrato.'], correctOptionIndex: 1, explanation: 'La caducidad es la sanciÃ³n mÃ¡s grave. La entidad la declara cuando el incumplimiento del contratista es tan severo que amenaza con la paralizaciÃ³n del servicio. Conlleva inhabilidad para el contratista para contratar con el Estado.' },
  { id: 333, axisId: 3, text: 'El "concurso de mÃ©ritos" es la modalidad de selecciÃ³n para:', options: ['Comprar papelerÃ­a.', 'Contratos de consultorÃ­a, interventorÃ­a y proyectos de arquitectura.', 'Obras pÃºblicas de gran envergadura.', 'Contratos de prestaciÃ³n de servicios de vigilancia.'], correctOptionIndex: 1, explanation: 'Esta modalidad se utiliza cuando el factor determinante no es el precio, sino la capacidad intelectual y la experiencia de los proponentes, como en los servicios de consultorÃ­a.' },
  { id: 334, axisId: 3, text: 'Â¿QuÃ© es el "Certificado de Disponibilidad Presupuestal" (CDP)?', options: ['Un documento que certifica que el contratista tiene dinero.', 'Un acto expedido por el responsable de presupuesto que garantiza la existencia de recursos para atender el compromiso.', 'El presupuesto de la oferta del proponente.', 'Un certificado de un banco.'], correctOptionIndex: 1, explanation: 'El CDP es un requisito esencial para iniciar cualquier proceso de contrataciÃ³n. Con Ã©l se asegura que la entidad cuenta con los fondos necesarios para respaldar el futuro contrato.' },
  { id: 335, axisId: 3, text: 'Las "clÃ¡usulas excepcionales" en los contratos estatales (interpretaciÃ³n, modificaciÃ³n y terminaciÃ³n unilateral) son una manifestaciÃ³n del:', options: ['Principio de igualdad entre las partes.', 'Poder exorbitante del Estado para proteger el interÃ©s general.', 'Principio de autonomÃ­a de la voluntad.', 'Debilitamiento del Estado.'], correctOptionIndex: 1, explanation: 'Estas clÃ¡usulas le otorgan a la administraciÃ³n pÃºblica prerrogativas que no existen en la contrataciÃ³n privada, con el fin de asegurar la continuidad y la correcta prestaciÃ³n del servicio pÃºblico.' },
  { id: 336, axisId: 3, text: 'La "garantÃ­a de cumplimiento" que se exige al contratista tiene como fin:', options: ['Asegurar que el contratista es una persona seria.', 'Amparar a la entidad frente a los perjuicios derivados del incumplimiento de las obligaciones del contratista.', 'Garantizar que el contratista pagarÃ¡ los salarios de sus empleados.', 'Cubrir los costos de la supervisiÃ³n.'], correctOptionIndex: 1, explanation: 'Esta pÃ³liza de seguros o garantÃ­a bancaria permite a la entidad resarcirse econÃ³micamente si el contratista incumple el contrato, abandona la obra o no entrega los bienes con la calidad pactada.' },
  { id: 337, axisId: 3, text: 'Â¿Es posible "subsanar" la falta de un documento en la etapa de evaluaciÃ³n de ofertas?', options: ['No, ninguna oferta puede ser corregida.', 'SÃ­, se pueden subsanar todos los errores, incluyendo la falta de la oferta econÃ³mica.', 'SÃ­, pero solo los requisitos que no otorgan puntaje, es decir, los habilitantes.', 'Solo si el jefe de la entidad lo autoriza.'], correctOptionIndex: 2, explanation: 'La ley permite que los proponentes aclaren o corrijan requisitos habilitantes (como un certificado de experiencia o un permiso) siempre que se haga en el plazo otorgado por la entidad y no se altere la oferta inicial.' },
  { id: 338, axisId: 3, text: 'El "principio de publicidad" en la actividad contractual se materializa principalmente a travÃ©s de:', options: ['La publicaciÃ³n de todos los documentos del proceso en el SECOP.', 'Enviar correos electrÃ³nicos a los posibles proponentes.', 'Publicar avisos en la cartelera de la entidad.', 'Realizar ruedas de prensa.'], correctOptionIndex: 0, explanation: 'El principio de publicidad exige que todas las actuaciones de la administraciÃ³n sean pÃºblicas y accesibles a los ciudadanos. El SECOP es la principal herramienta para cumplir con este mandato.' },
  { id: 339, axisId: 3, text: 'Â¿QuÃ© es el "Registro Presupuestal" (RP)?', options: ['Es lo mismo que el CDP.', 'Es la imputaciÃ³n presupuestal mediante la cual se afectan las apropiaciones para garantizar el pago de las obligaciones.', 'Un registro de los contratistas que han incumplido.', 'El presupuesto total de la entidad.'], correctOptionIndex: 1, explanation: 'DespuÃ©s de firmado el contrato, se expide el RP, que es el acto que perfecciona el compromiso presupuestal y asegura que los recursos del CDP quedan formalmente reservados para pagar ese contrato especÃ­fico.' },
  { id: 340, axisId: 3, text: 'La "terminaciÃ³n unilateral" es una clÃ¡usula excepcional que permite a la entidad:', options: ['Terminar el contrato cuando el contratista lo pida.', 'Dar por terminado el contrato por razones de interÃ©s pÃºblico o social.', 'Terminar el contrato solo si hay un incumplimiento grave.', 'Modificar el valor del contrato.'], correctOptionIndex: 1, explanation: 'Incluso si el contratista estÃ¡ cumpliendo, la entidad puede dar por terminado el contrato si sobrevienen situaciones de interÃ©s pÃºblico que lo hagan necesario, debiendo indemnizar al contratista.' },
  { id: 341, axisId: 3, text: 'En una "subasta inversa", el factor de selecciÃ³n del contratista es:', options: ['La mayor experiencia.', 'La mejor calidad tÃ©cnica.', 'El menor precio.', 'El plazo de entrega mÃ¡s corto.'], correctOptionIndex: 2, explanation: 'En la subasta inversa, utilizada para bienes y servicios de caracterÃ­sticas tÃ©cnicas uniformes, los proponentes compiten presentando lances sucesivos para ofrecer el precio mÃ¡s bajo, y gana quien ofrezca el menor valor.' },
  { id: 342, axisId: 3, text: 'Un contrato de "prestaciÃ³n de servicios profesionales y de apoyo a la gestiÃ³n" solo puede celebrarse con:', options: ['Personas jurÃ­dicas.', 'Personas naturales, cuando las actividades no puedan realizarse con personal de planta.', 'Cualquier persona, sin importar si la entidad tiene personal para hacer la tarea.', 'Extranjeros Ãºnicamente.'], correctOptionIndex: 1, explanation: 'Esta es una causal de contrataciÃ³n directa que se usa para contratar expertos o personal de apoyo de forma temporal, siempre y cuando se demuestre que la entidad no cuenta con personal suficiente en su planta para desarrollar dichas actividades.' },
  { id: 343, axisId: 3, text: 'El principio "pacta sunt servanda" en la contrataciÃ³n estatal significa que:', options: ['El Estado puede cambiar las reglas del contrato en cualquier momento.', 'El contrato es ley para las partes y debe ser cumplido de buena fe.', 'Los pactos solo obligan si estÃ¡n por escrito.', 'Los contratos pueden ser verbales.'], correctOptionIndex: 1, explanation: 'Este principio general del derecho, aplicable a la contrataciÃ³n, establece que los acuerdos deben ser cumplidos. Sin embargo, en la contrataciÃ³n estatal estÃ¡ matizado por las clÃ¡usulas excepcionales que protegen el interÃ©s general.' },
  { id: 344, axisId: 3, text: 'Â¿CuÃ¡l es el objeto de un "acuerdo marco de precios"?', options: ['Fijar un precio Ãºnico para todos los contratos del paÃ­s.', 'Establecer las condiciones (precio, calidad, etc.) para adquirir bienes y servicios de uso comÃºn, a las cuales las entidades se adhieren posteriormente.', 'Un acuerdo para no competir entre proponentes.', 'Un contrato para definir el marco legal de la contrataciÃ³n.'], correctOptionIndex: 1, explanation: 'Colombia Compra Eficiente (la agencia de contrataciÃ³n) celebra acuerdos marco con proveedores. Luego, las demÃ¡s entidades, en lugar de hacer su propio proceso, simplemente emiten una orden de compra a travÃ©s de la plataforma para adquirir esos bienes o servicios bajo las condiciones ya pactadas.' },
  { id: 345, axisId: 3, text: 'La etapa "postcontractual" se refiere a:', options: ['Las actividades previas a la firma del contrato.', 'La ejecuciÃ³n del contrato.', 'El perÃ­odo que abarca desde la terminaciÃ³n del contrato hasta su liquidaciÃ³n y el vencimiento de las garantÃ­as.', 'La evaluaciÃ³n de las ofertas.'], correctOptionIndex: 2, explanation: 'Es la fase final que incluye la liquidaciÃ³n del contrato, el balance de cuentas y la exigibilidad de las garantÃ­as de calidad y estabilidad de la obra, si aplican.' },
  { id: 346, axisId: 3, text: 'Â¿QuÃ© es el "factor de desempate" en un proceso de selecciÃ³n?', options: ['Un criterio para elegir al contratista de forma subjetiva.', 'Un mecanismo preestablecido en los pliegos para escoger al ganador cuando dos o mÃ¡s ofertas obtienen el mismo puntaje.', 'Una reuniÃ³n para que los proponentes empatados negocien.', 'La anulaciÃ³n del proceso por empate.'], correctOptionIndex: 1, explanation: 'La ley establece una serie de criterios de desempate (como dar preferencia a ofertas de mipymes, o a proponentes con personal en condiciÃ³n de discapacidad) que deben aplicarse en estricto orden cuando hay un empate en el puntaje final.' },
  { id: 347, axisId: 3, text: 'Si un contrato estatal requiere "vigencias futuras", significa que:', options: ['El contrato se ejecutarÃ¡ en una fecha futura.', 'Se comprometen recursos de presupuestos de aÃ±os posteriores para respaldar un contrato que se ejecutarÃ¡ en varias vigencias fiscales.', 'El pago se harÃ¡ cuando la entidad tenga dinero.', 'El contrato no tiene respaldo presupuestal.'], correctOptionIndex: 1, explanation: 'Las vigencias futuras son una autorizaciÃ³n para asumir obligaciones que afectan el presupuesto de aÃ±os fiscales posteriores. Son comunes en grandes proyectos de infraestructura que duran varios aÃ±os.' },
  { id: 348, axisId: 3, text: 'El principio de "planeaciÃ³n" en un contrato de obra pÃºblica exige, como mÃ­nimo:', options: ['Tener un dibujo a mano alzada del proyecto.', 'Contar con los estudios tÃ©cnicos, diseÃ±os y licencias ambientales y de construcciÃ³n requeridos.', 'Saber cuÃ¡nto va a costar aproximadamente.', 'Tener la aprobaciÃ³n verbal del alcalde o gobernador.'], correctOptionIndex: 1, explanation: 'No se puede iniciar un proceso de contrataciÃ³n de obra sin contar con los estudios y diseÃ±os definitivos que permitan establecer con claridad el objeto, el alcance y el presupuesto, para evitar sobrecostos e improvisaciÃ³n.' },
  { id: 349, axisId: 3, text: 'Â¿QuiÃ©n debe inscribirse en el Registro Ãšnico de Precios de Referencia (RUPR)?', options: ['Las entidades estatales, para consultar precios de mercado.', 'Los proveedores de ciertos bienes y servicios, para que las entidades tengan una referencia de precios.', 'Los supervisores de contratos.', 'Los ciudadanos que quieran hacer veedurÃ­a.'], correctOptionIndex: 1, explanation: 'Es un sistema de informaciÃ³n con precios de referencia de bienes y servicios de uso comÃºn en las entidades estatales, que sirve como herramienta en la etapa de planeaciÃ³n para la estimaciÃ³n de los presupuestos.' },
  { id: 350, axisId: 3, text: 'La "adjudicaciÃ³n" de un contrato estatal es:', options: ['Un acto administrativo motivado por medio del cual la entidad escoge la oferta mÃ¡s favorable.', 'La firma del contrato.', 'Una recomendaciÃ³n del comitÃ© evaluador.', 'El primer pago al contratista.'], correctOptionIndex: 0, explanation: 'La adjudicaciÃ³n es el acto formal y definitivo que pone fin al proceso de selecciÃ³n, designando al proponente ganador. Este acto es obligatorio para la entidad y para el adjudicatario.' },

  // Control Disciplinario (50 Preguntas)
  {
    id: 401,
    axisId: 4,
    text: 'La entidad encargada de ejercer el poder disciplinario preferente sobre los servidores pÃºblicos en Colombia es:',
    options: [
      'La ContralorÃ­a General de la RepÃºblica',
      'La ProcuradurÃ­a General de la NaciÃ³n',
      'La DefensorÃ­a del Pueblo',
      'El Consejo Superior de la Judicatura'
    ],
    correctOptionIndex: 1,
    explanation: 'La ProcuradurÃ­a General de la NaciÃ³n tiene la funciÃ³n de ejercer el control disciplinario del servidor pÃºblico, adelantando las investigaciones y sancionando las faltas disciplinarias.'
  },
  {
    id: 402,
    axisId: 4,
    text: 'Una de las siguientes sanciones NO estÃ¡ contemplada en el CÃ³digo General Disciplinario (Ley 1952 de 2019):',
    options: ['DestituciÃ³n e inhabilidad general', 'SuspensiÃ³n en el ejercicio del cargo', 'Multa', 'Pena de prisiÃ³n'],
    correctOptionIndex: 3,
    explanation: 'Las sanciones disciplinarias son destituciÃ³n, suspensiÃ³n, multa y amonestaciÃ³n. La pena de prisiÃ³n corresponde al Ã¡mbito del derecho penal, no al disciplinario.'
  },
  {
    id: 403,
    axisId: 4,
    text: 'Un servidor pÃºblico llega a su oficina en estado de embriaguez. Esta conducta se considera una falta disciplinaria:',
    options: ['Leve', 'Grave', 'GravÃ­sima', 'No es una falta si no afecta su rendimiento'],
    correctOptionIndex: 2,
    explanation: 'Consumir, en el sitio de trabajo o en lugares pÃºblicos, sustancias prohibidas o llegar en estado de embriaguez es una falta gravÃ­sima segÃºn el CÃ³digo General Disciplinario.'
  },
  {
    id: 404,
    axisId: 4,
    text: 'El principio de "legalidad" en materia disciplinaria significa que:',
    options: [
      'El investigador puede crear nuevas faltas si la conducta es inmoral',
      'Un servidor solo puede ser investigado y sancionado por conductas previamente descritas en la ley como faltas',
      'Todas las faltas tienen la misma sanciÃ³n',
      'El proceso debe ser lo mÃ¡s rÃ¡pido posible'
    ],
    correctOptionIndex: 1,
    explanation: 'El principio de legalidad garantiza que nadie puede ser juzgado sino conforme a leyes preexistentes al acto que se le imputa.'
  },
  {
    id: 405,
    axisId: 4,
    text: 'Â¿QuÃ© es el "principio de ilicitud sustancial" en el derecho disciplinario?',
    options: [
      'Que la conducta debe ser ilegal en otro paÃ­s',
      'Que la conducta debe generar un daÃ±o econÃ³mico al estado',
      'Que la conducta debe afectar sustancialmente los deberes funcionales, sin justificaciÃ³n alguna',
      'Que el servidor debe tener la intenciÃ³n de cometer la falta'
    ],
    correctOptionIndex: 2,
    explanation: 'Para que una conducta sea disciplinariamente reprochable, no basta con que se adecÃºe a la descripciÃ³n de la falta; debe afectar el deber funcional sin una justificaciÃ³n vÃ¡lida.'
  },
  {
    id: 406,
    axisId: 4,
    text: 'La "prescripciÃ³n" de la acciÃ³n disciplinaria significa que:',
    options: [
      'La falta fue perdonada por el superior jerÃ¡rquico',
      'El Estado pierde la potestad para investigar y sancionar por el paso del tiempo',
      'El servidor pÃºblico renunciÃ³ a su cargo',
      'El proceso debe pasar a la justicia ordinaria'
    ],
    correctOptionIndex: 1,
    explanation: 'La acciÃ³n disciplinaria prescribe en un tÃ©rmino determinado (generalmente 5 aÃ±os), tras el cual el Estado ya no puede ejercer su poder sancionatorio por esa conducta.'
  },
  {
    id: 407,
    axisId: 4,
    text: 'Un funcionario utiliza un vehÃ­culo oficial para realizar un viaje de vacaciones con su familia. Â¿QuÃ© tipo de falta estÃ¡ cometiendo?',
    options: [
      'Una falta leve, si pide permiso',
      'Ninguna, si le pone gasolina de su propio bolsillo',
      'Una falta grave o gravÃ­sima por uso indebido de bienes del Estado',
      'Una falta administrativa que se sanciona con un llamado de atenciÃ³n verbal'
    ],
    correctOptionIndex: 2,
    explanation: 'Utilizar los bienes del Estado para fines personales o ajenos a las funciones oficiales constituye una falta disciplinaria que puede ser calificada como grave o gravÃ­sima.'
  },
  {
    id: 408,
    axisId: 4,
    text: 'El derecho de defensa en un proceso disciplinario incluye la posibilidad de:',
    options: [
      'Ignorar las citaciones de la autoridad disciplinaria',
      'Rendir versiÃ³n libre, solicitar y aportar pruebas, y controvertir las que se alleguen en su contra',
      'Pagar una multa para evitar el proceso',
      'Ser juzgado siempre por el jefe inmediato'
    ],
    correctOptionIndex: 1,
    explanation: 'El derecho de defensa y contradicciÃ³n es un pilar del debido proceso y garantiza que el investigado pueda participar activamente para proteger sus intereses.'
  },
  {
    id: 409,
    axisId: 4,
    text: 'Â¿QuiÃ©n tiene la competencia para investigar disciplinariamente al Procurador General de la NaciÃ³n?',
    options: [
      'El Presidente de la RepÃºblica',
      'La ComisiÃ³n de Acusaciones de la CÃ¡mara de Representantes',
      'La Corte Suprema de Justicia',
      'Nadie, tiene fuero absoluto'
    ],
    correctOptionIndex: 2,
    explanation: 'La Sala Plena de la Corte Suprema de Justicia es la competente para investigar y juzgar disciplinariamente al Procurador General de la NaciÃ³n.'
  },
  {
    id: 410,
    axisId: 4,
    text: 'La sanciÃ³n de "destituciÃ³n e inhabilidad general" implica que el servidor pÃºblico:',
    options: [
      'Es retirado del cargo y no puede volver a trabajar con el Estado por un tiempo determinado',
      'Solo es retirado del cargo, pero puede concursar para otro al dÃ­a siguiente',
      'Debe pagar una multa muy alta pero puede seguir trabajando',
      'Recibe una anotaciÃ³n en su hoja de vida y una suspensiÃ³n de 3 dÃ­as'
    ],
    correctOptionIndex: 0,
    explanation: 'Esta es la sanciÃ³n mÃ¡s grave. Implica la terminaciÃ³n de la relaciÃ³n laboral y una inhabilidad para ejercer funciones pÃºblicas por un perÃ­odo que va de 10 a 20 aÃ±os para faltas gravÃ­simas dolosas.'
  },
  {
    id: 411,
    axisId: 4,
    text: 'El "debido proceso" en materia disciplinaria garantiza, entre otros, el derecho a:',
    options: [
      'Ser investigado por un funcionario competente, a la defensa y a la doble instancia.',
      'Elegir al funcionario que lo va a investigar.',
      'Que el proceso dure menos de un mes.',
      'Apelar la decisiÃ³n directamente ante el Presidente.'
    ],
    correctOptionIndex: 0,
    explanation: 'El debido proceso (Art. 29 de la ConstituciÃ³n) es una garantÃ­a fundamental que incluye el derecho a ser juzgado por una autoridad competente, a presentar y controvertir pruebas, y a impugnar la decisiÃ³n de primera instancia.'
  },
  {
    id: 412,
    axisId: 4,
    text: 'La principal diferencia entre una falta "dolosa" y una "culposa" es:',
    options: [
      'La gravedad del daÃ±o causado.',
      'La intenciÃ³n del servidor pÃºblico.',
      'El cargo que ocupa el servidor.',
      'Si la falta fue cometida dentro o fuera de la oficina.'
    ],
    correctOptionIndex: 1,
    explanation: 'Una falta es dolosa cuando se comete con la intenciÃ³n de realizar la conducta. Es culposa cuando se comete por negligencia, imprudencia o violaciÃ³n de reglamentos, pero sin la intenciÃ³n directa de causar el resultado.'
  },
  {
    id: 413,
    axisId: 4,
    text: 'Las "oficinas de control interno disciplinario" de las entidades pÃºblicas tienen competencia para:',
    options: [
      'Investigar y sancionar todas las faltas de todos los servidores.',
      'Conocer en primera instancia las faltas leves y graves cometidas por los servidores de la entidad.',
      'Ãšnicamente para dar consejos a los empleados.',
      'Investigar al jefe de la entidad.'
    ],
    correctOptionIndex: 1,
    explanation: 'Por regla general, estas oficinas tienen la competencia para adelantar los procesos por faltas leves y graves, mientras que las faltas gravÃ­simas suelen ser competencia de la ProcuradurÃ­a, salvo excepciones.'
  },
  {
    id: 414,
    axisId: 4,
    text: 'Un servidor pÃºblico recibe un regalo costoso de un ciudadano al que le acaba de aprobar un trÃ¡mite. Esta conducta podrÃ­a constituir:',
    options: [
      'Un acto de amabilidad que no tiene consecuencias.',
      'Una falta disciplinaria grave o gravÃ­sima (cohecho).',
      'Una falta leve, si el regalo no era tan costoso.',
      'Un estÃ­mulo permitido por la ley.'
    ],
    correctOptionIndex: 1,
    explanation: 'Solicitar o recibir dÃ¡divas o cualquier otro beneficio con motivo u ocasiÃ³n de sus funciones es una falta gravÃ­sima, que ademÃ¡s puede tener consecuencias penales por el delito de cohecho.'
  },
  {
    id: 415,
    axisId: 4,
    text: 'El principio "non bis in idem" en el derecho disciplinario significa que:',
    options: [
      'El proceso debe ser bilingÃ¼e.',
      'Nadie puede ser investigado o sancionado disciplinariamente mÃ¡s de una vez por la misma conducta.',
      'Se necesitan dos pruebas para sancionar a alguien.',
      'La sanciÃ³n debe ser el doble de la falta.'
    ],
    correctOptionIndex: 1,
    explanation: 'Esta es una garantÃ­a fundamental que prohÃ­be la doble persecuciÃ³n por un mismo hecho, siempre que exista identidad de sujeto, hecho y causa.'
  },
  {
    id: 416,
    axisId: 4,
    text: 'Â¿Un particular que ejerce funciones pÃºblicas puede ser sujeto de investigaciÃ³n disciplinaria?',
    options: [
      'No, el derecho disciplinario solo aplica a servidores pÃºblicos.',
      'SÃ­, en los casos y bajo las condiciones que establece la ley.',
      'Solo si es contratista del Estado.',
      'Solo si es notario o curador urbano.'
    ],
    correctOptionIndex: 1,
    explanation: 'La ley disciplinaria se aplica tambiÃ©n a los particulares que ejercen funciones pÃºblicas de forma permanente o transitoria, como los interventores de contratos o los miembros de juntas directivas de empresas estatales.'
  },
  {
    id: 417,
    axisId: 4,
    text: 'Un funcionario revela informaciÃ³n confidencial de la entidad a la prensa. Â¿Comete una falta disciplinaria?',
    options: [
      'No, si la informaciÃ³n era de interÃ©s pÃºblico.',
      'SÃ­, comete una falta por violar el deber de reserva y secreto profesional.',
      'No, porque estÃ¡ ejerciendo la libertad de prensa.',
      'Solo si le pagaron por la informaciÃ³n.'
    ],
    correctOptionIndex: 1,
    explanation: 'Es un deber de todo servidor pÃºblico guardar reserva sobre los asuntos que conozca por razÃ³n de sus funciones y que por su naturaleza tengan carÃ¡cter reservado.'
  },
  {
    id: 418,
    axisId: 4,
    text: 'La etapa de "juicio disciplinario" en el proceso verbal se inicia con:',
    options: [
      'La queja del ciudadano.',
      'La indagaciÃ³n preliminar.',
      'El auto de citaciÃ³n a audiencia y formulaciÃ³n de cargos.',
      'La sentencia.'
    ],
    correctOptionIndex: 2,
    explanation: 'Una vez agotada la investigaciÃ³n y si existe mÃ©rito, la autoridad disciplinaria profiere un auto de citaciÃ³n a audiencia y formulaciÃ³n de cargos, que da inicio formal a la etapa de juicio.'
  },
  {
    id: 419,
    axisId: 4,
    text: 'Â¿CuÃ¡l de las siguientes es una causal de exclusiÃ³n de la responsabilidad disciplinaria?',
    options: [
      'Actuar con el consentimiento del jefe.',
      'Desconocer la ley disciplinaria.',
      'Actuar en estricto cumplimiento de un deber constitucional o legal.',
      'Que nadie se haya dado cuenta de la falta.'
    ],
    correctOptionIndex: 2,
    explanation: 'Si un servidor pÃºblico comete una conducta que parece una falta, pero lo hizo en cumplimiento estricto de un deber legal (por ejemplo, el uso de la fuerza por parte de un policÃ­a en una situaciÃ³n legÃ­tima), no hay lugar a responsabilidad disciplinaria.'
  },
  {
    id: 420,
    axisId: 4,
    text: 'La "suspensiÃ³n provisional" de un servidor pÃºblico en medio de una investigaciÃ³n disciplinaria procede cuando:',
    options: [
      'El investigador considera que el servidor es culpable.',
      'Se busca evitar que el servidor interfiera con la investigaciÃ³n o continÃºe cometiendo la falta.',
      'El servidor pide vacaciones.',
      'El servidor es impopular en la oficina.'
    ],
    correctOptionIndex: 1,
    explanation: 'Es una medida cautelar que separa temporalmente al servidor de su cargo para garantizar la integridad y el Ã©xito del proceso disciplinario, y no constituye una sanciÃ³n anticipada.'
  },
  { id: 421, axisId: 4, text: 'Â¿QuÃ© es un "testigo" en un proceso disciplinario?', options: ['El quejoso.', 'El abogado del investigado.', 'Una persona que declara sobre hechos que le constan y que son pertinentes para el proceso.', 'El funcionario que adelanta la investigaciÃ³n.'], correctOptionIndex: 2, explanation: 'El testimonio es un medio de prueba importante, a travÃ©s del cual una persona ajena al proceso narra lo que percibiÃ³ o conoce sobre los hechos que se investigan.' },
  { id: 422, axisId: 4, text: 'El principio de "favorabilidad" en materia disciplinaria establece que:', options: ['Siempre se debe fallar a favor del servidor pÃºblico.', 'Si una ley posterior es mÃ¡s benigna para el investigado, se debe aplicar esa ley.', 'El investigador debe ser amigo del investigado.', 'El proceso debe ser favorable para la entidad.'], correctOptionIndex: 1, explanation: 'Este principio garantiza que se aplique la norma mÃ¡s favorable al procesado, ya sea la que estaba vigente al momento de los hechos o una posterior que le beneficie.' },
  { id: 423, axisId: 4, text: 'Â¿Un servidor pÃºblico puede ser sancionado disciplinariamente por una conducta cometida fuera del servicio?', options: ['No, nunca.', 'SÃ­, cuando la conducta afecte la moralidad pÃºblica o tenga relaciÃ³n con el servicio.', 'Solo si la conducta es un delito.', 'Solo si ocurre en el extranjero.'], correctOptionIndex: 1, explanation: 'Aunque la mayorÃ­a de las faltas se relacionan con el ejercicio de las funciones, algunas conductas realizadas fuera del servicio pueden constituir falta disciplinaria si afectan la dignidad y el buen nombre de la instituciÃ³n.' },
  { id: 424, axisId: 4, text: 'La "amonestaciÃ³n escrita" es una sanciÃ³n que se impone por:', options: ['Faltas gravÃ­simas.', 'Faltas graves.', 'Faltas leves.', 'Cualquier tipo de falta.'], correctOptionIndex: 2, explanation: 'La amonestaciÃ³n escrita es la sanciÃ³n mÃ¡s leve y se registra en la hoja de vida del servidor. Procede Ãºnicamente para faltas leves culposas.' },
  { id: 425, axisId: 4, text: 'Omitir, retardar o no suministrar respuesta a las peticiones de los ciudadanos es una falta que atenta contra el deber de:', options: ['Atender debidamente al pÃºblico.', 'Guardar reserva de la informaciÃ³n.', 'Ser leal a la entidad.', 'Asistir al trabajo puntualmente.'], correctOptionIndex: 0, explanation: 'Los servidores pÃºblicos tienen el deber de atender las solicitudes de los ciudadanos de manera diligente y oportuna, y su incumplimiento puede acarrear una investigaciÃ³n disciplinaria.' },
  { id: 426, axisId: 4, text: 'La "queja" disciplinaria es:', options: ['El acto que inicia la investigaciÃ³n disciplinaria.', 'La sanciÃ³n que se impone al servidor.', 'El recurso que interpone el servidor contra el fallo.', 'Un informe que presenta un ciudadano o servidor poniendo en conocimiento una posible falta.'], correctOptionIndex: 3, explanation: 'La acciÃ³n disciplinaria puede iniciarse de oficio, por informaciÃ³n de otro servidor, o por una queja formulada por cualquier persona. La queja es el punto de partida, pero no obliga a abrir investigaciÃ³n formal si es temeraria o infundada.' },
  { id: 427, axisId: 4, text: 'Â¿QuÃ© es el "fallo de primera instancia" en un proceso disciplinario?', options: ['La decisiÃ³n final e inapelable del proceso.', 'La decisiÃ³n tomada por la primera autoridad que conoce del caso, la cual puede ser apelada.', 'La formulaciÃ³n de cargos contra el investigado.', 'Un concepto no vinculante del jefe de personal.'], correctOptionIndex: 1, explanation: 'Es la primera decisiÃ³n de fondo sobre la responsabilidad del investigado. Contra este fallo proceden recursos (como la apelaciÃ³n) para que un superior jerÃ¡rquico o funcional lo revise.' },
  { id: 428, axisId: 4, text: 'El "criterio de la culpabilidad" es fundamental para imponer una sanciÃ³n disciplinaria. Esto significa que:', options: ['No se puede sancionar a nadie objetivamente, se debe demostrar que actuÃ³ con dolo o culpa.', 'El servidor es culpable hasta que demuestre lo contrario.', 'La culpa siempre es del jefe.', 'Si hay daÃ±o, siempre hay sanciÃ³n.'], correctOptionIndex: 0, explanation: 'En el derecho disciplinario colombiano estÃ¡ proscrita la responsabilidad objetiva. Para sancionar, no basta con demostrar que la conducta ocurriÃ³, sino que el servidor actuÃ³ con dolo (intenciÃ³n) or culpa (negligencia, imprudencia).' },
  { id: 429, axisId: 4, text: 'La ProcuradurÃ­a General de la NaciÃ³n ejerce el "poder preferente", lo que significa que:', options: ['Es la Ãºnica que puede investigar disciplinariamente.', 'Puede iniciar, proseguir o remitir cualquier investigaciÃ³n disciplinaria, desplazando a la oficina de control interno.', 'Prefiere investigar solo los casos mÃ¡s famosos.', 'Debe pedir permiso a la entidad para investigar a sus funcionarios.'], correctOptionIndex: 1, explanation: 'Este poder le permite a la ProcuradurÃ­a asumir la competencia de cualquier proceso disciplinario que se adelante en otra entidad, en razÃ³n de su importancia, trascendencia o para garantizar la imparcialidad.' },
  { id: 430, axisId: 4, text: 'Un servidor pÃºblico que se apropia de recursos del Estado comete una falta gravÃ­sima. Â¿QuÃ© otra responsabilidad podrÃ­a tener?', options: ['Ninguna, solo la disciplinaria.', 'Responsabilidad penal por el delito de peculado.', 'Responsabilidad fiscal por el daÃ±o patrimonial.', 'Ambas, penal y fiscal, ademÃ¡s de la disciplinaria.'], correctOptionIndex: 3, explanation: 'La misma conducta de apropiarse de recursos pÃºblicos configura una falta disciplinaria (incumplimiento de deberes), un delito (peculado) y genera un daÃ±o al patrimonio del Estado (responsabilidad fiscal). Las tres acciones pueden adelantarse de forma independiente.' },
  { id: 431, axisId: 4, text: 'Â¿QuÃ© es la "versiÃ³n libre" en un proceso disciplinario?', options: ['La sentencia que absuelve al investigado.', 'Una oportunidad para que el investigado presente su explicaciÃ³n sobre los hechos, antes de la formulaciÃ³n de cargos.', 'Un testimonio que no se graba.', 'La confesiÃ³n obligatoria del investigado.'], correctOptionIndex: 1, explanation: 'Es una de las primeras manifestaciones del derecho de defensa. El investigado puede, voluntariamente, rendir una declaraciÃ³n para explicar su conducta y aportar las pruebas que considere pertinentes.' },
  { id: 432, axisId: 4, text: 'El principio de "proporcionalidad" de la sanciÃ³n disciplinaria implica que:', options: ['La sanciÃ³n debe corresponder a la gravedad de la falta y a los criterios de graduaciÃ³n establecidos en la ley.', 'La sanciÃ³n siempre debe ser la mÃ¡s alta posible.', 'La sanciÃ³n debe ser proporcional al salario del servidor.', 'Todas las faltas tienen la misma sanciÃ³n: destituciÃ³n.'], correctOptionIndex: 0, explanation: 'La autoridad disciplinaria no puede imponer sanciones de manera arbitraria. Debe analizar la gravedad de la falta, el nivel de culpabilidad, los antecedentes del servidor y otros criterios para que la sanciÃ³n sea justa y proporcional.' },
  { id: 433, axisId: 4, text: 'Â¿La renuncia del servidor pÃºblico termina el proceso disciplinario?', options: ['SÃ­, automÃ¡ticamente.', 'No, el proceso continÃºa hasta que se determine si hubo o no responsabilidad.', 'Solo si la renuncia es aceptada antes de que inicie el proceso.', 'Solo si la falta cometida era leve.'], correctOptionIndex: 1, explanation: 'La acciÃ³n disciplinaria es autÃ³noma de la relaciÃ³n laboral. La renuncia no extingue la posibilidad de que el Estado investigue y sancione una falta cometida durante el ejercicio de las funciones. La sanciÃ³n, de haberla, se registrarÃ¡ para efectos de inhabilidades.' },
  { id: 434, axisId: 4, text: 'Incurrir en "acoso laboral" debidamente comprobado es una falta disciplinaria:', options: ['Leve', 'Grave o gravÃ­sima, segÃºn las circunstancias.', 'No es una falta disciplinaria, solo laboral.', 'Se sanciona con un simple llamado de atenciÃ³n.'], correctOptionIndex: 1, explanation: 'El acoso laboral, ademÃ¡s de tener su propia ley (Ley 1010 de 2006), estÃ¡ catalogado como una falta disciplinaria que puede ser calificada como grave o gravÃ­sima, dependiendo de los hechos y sus consecuencias.' },
  { id: 435, axisId: 4, text: 'Â¿CuÃ¡l es el fin principal del derecho disciplinario?', options: ['Vengarse del servidor pÃºblico que comete un error.', 'Asegurar el cumplimiento de los principios que rigen la funciÃ³n pÃºblica y la correcta prestaciÃ³n del servicio.', 'Enviar a la cÃ¡rcel a los servidores pÃºblicos.', 'Reducir el nÃºmero de empleados del Estado.'], correctOptionIndex: 1, explanation: 'El derecho disciplinario no tiene un fin meramente represivo, sino preventivo y correctivo. Busca garantizar que los servidores pÃºblicos cumplan con sus deberes y que la funciÃ³n pÃºblica se ejerza en beneficio de la comunidad.' },
  { id: 436, axisId: 4, text: 'El "recurso de apelaciÃ³n" contra un fallo de primera instancia busca que:', options: ['El mismo funcionario que tomÃ³ la decisiÃ³n la reconsidere.', 'Un funcionario de superior jerarquÃ­a revise la legalidad y el mÃ©rito de la decisiÃ³n.', 'Se anule todo el proceso y se empiece de cero.', 'Se negocie la sanciÃ³n con el jefe de la entidad.'], correctOptionIndex: 1, explanation: 'La apelaciÃ³n es una garantÃ­a fundamental de la doble instancia, que permite al disciplinado (o a su apoderado) solicitar a un superior que examine el fallo, con la expectativa de que lo revoque, modifique o aclare.' },
  { id: 437, axisId: 4, text: 'Un servidor debe declararse "impedido" para actuar en un proceso cuando:', options: ['El proceso es muy difÃ­cil.', 'Tiene un interÃ©s particular en el resultado o alguna relaciÃ³n de parentesco o amistad Ã­ntima con las partes.', 'No estÃ¡ de acuerdo con la ley que debe aplicar.', 'Tiene mucho trabajo acumulado.'], correctOptionIndex: 1, explanation: 'Los impedimentos y las recusaciones buscan garantizar la imparcialidad del funcionario que adelanta una actuaciÃ³n. Si existe una causal que pueda afectar su objetividad, debe apartarse del conocimiento del caso.' },
  { id: 438, axisId: 4, text: 'La "carga de la prueba" en un proceso disciplinario corresponde a:', options: ['El servidor investigado, quien debe demostrar su inocencia.', 'El Estado (la autoridad disciplinaria), quien debe demostrar la ocurrencia de la falta y la responsabilidad del investigado.', 'El quejoso.', 'Se presume la culpabilidad, por lo tanto no hay necesidad de pruebas.'], correctOptionIndex: 1, explanation: 'En virtud de la presunciÃ³n de inocencia, es la entidad investigadora la que tiene la obligaciÃ³n de recaudar todas las pruebas necesarias para demostrar, mÃ¡s allÃ¡ de toda duda razonable, que el servidor cometiÃ³ la falta y que es responsable.' },
  { id: 439, axisId: 4, text: 'Nombrar en un cargo a una persona que no reÃºne los requisitos legales para desempeÃ±arlo constituye una falta:', options: ['Leve', 'Grave', 'GravÃ­sima', 'No es una falta si la persona es de confianza.'], correctOptionIndex: 2, explanation: 'Nombrar o posesionar en un cargo pÃºblico a una persona sin el lleno de los requisitos es una falta gravÃ­sima, pues atenta contra el principio de mÃ©rito y la legalidad en el acceso a la funciÃ³n pÃºblica.' },
  { id: 440, axisId: 4, text: 'Â¿CuÃ¡l es la diferencia entre "sanciÃ³n" y "medida cautelar"?', options: ['No hay ninguna diferencia.', 'La sanciÃ³n es el castigo final; la medida cautelar es una medida temporal dentro del proceso para asegurar su buen curso.', 'La sanciÃ³n la impone un juez y la medida cautelar la impone el jefe.', 'La medida cautelar siempre es una multa.'], correctOptionIndex: 1, explanation: 'Una sanciÃ³n (destituciÃ³n, suspensiÃ³n) es el resultado de un fallo que declara la responsabilidad. Una medida cautelar (como la suspensiÃ³n provisional) es una decisiÃ³n temporal que se toma durante la investigaciÃ³n para proteger el proceso, y no implica un juicio de culpabilidad.' },
  { id: 441, axisId: 4, text: 'Â¿QuÃ© es el principio de "congruencia" en el fallo disciplinario?', options: ['El fallo debe estar escrito en un lenguaje congruente.', 'La decisiÃ³n final solo puede referirse a los hechos y cargos que fueron formulados en el pliego de cargos.', 'El investigado debe estar de acuerdo con el fallo.', 'El fallo debe ser congruente con las decisiones de otros paÃ­ses.'], correctOptionIndex: 1, explanation: 'Este principio protege el derecho de defensa. Significa que el servidor solo puede ser sancionado por los cargos especÃ­ficos que se le comunicaron formalmente en el pliego de cargos, y no por hechos nuevos o diferentes que no tuvo la oportunidad de controvertir.' },
  { id: 442, axisId: 4, text: 'Un servidor que falsifica un documento pÃºblico para obtener un beneficio comete una falta:', options: ['Leve, si el beneficio era pequeÃ±o.', 'Grave.', 'GravÃ­sima, ademÃ¡s del posible delito penal.', 'No es una falta si nadie resultÃ³ perjudicado.'], correctOptionIndex: 2, explanation: 'Realizar o facilitar la alteraciÃ³n de documentos pÃºblicos es una de las faltas catalogadas como gravÃ­simas en el CÃ³digo Disciplinario, sin perjuicio de la acciÃ³n penal por el delito de falsedad en documento pÃºblico.' },
  { id: 443, axisId: 4, text: 'La "notificaciÃ³n" de las decisiones en el proceso disciplinario es crucial para:', options: ['Hacer pÃºblico el proceso en los medios de comunicaciÃ³n.', 'Garantizar el derecho de defensa y contradicciÃ³n, permitiendo que el interesado conozca las decisiones y pueda interponer recursos.', 'Informar al quejoso sobre el avance del caso.', 'Cumplir con un requisito meramente formal.'], correctOptionIndex: 1, explanation: 'Una decisiÃ³n no es vinculante hasta que se notifica debidamente. La notificaciÃ³n es el acto que permite al disciplinado ejercer su derecho de defensa, por ejemplo, apelando un fallo sancionatorio.' },
  { id: 444, axisId: 4, text: 'Â¿QuiÃ©n ejerce el control disciplinario sobre los abogados en ejercicio de su profesiÃ³n?', options: ['La ProcuradurÃ­a General de la NaciÃ³n.', 'La FiscalÃ­a General de la NaciÃ³n.', 'La ComisiÃ³n Nacional de Disciplina Judicial.', 'El Ministerio de Justicia.'], correctOptionIndex: 2, explanation: 'La ComisiÃ³n Nacional de Disciplina Judicial y sus seccionales son las autoridades encargadas de examinar la conducta y sancionar las faltas de los abogados en ejercicio de su profesiÃ³n y de los funcionarios de la Rama Judicial.' },
  { id: 445, axisId: 4, text: 'Un criterio para graduar la sanciÃ³n es la "confesiÃ³n". Esto significa que:', options: ['Si el servidor confiesa, se le absuelve.', 'La confesiÃ³n puede ser un motivo para disminuir la sanciÃ³n a imponer.', 'La confesiÃ³n no tiene ningÃºn efecto en el proceso disciplinario.', 'Se obliga al servidor a confesar para poder sancionarlo.'], correctOptionIndex: 1, explanation: 'La ley contempla la confesiÃ³n como un criterio de atenuaciÃ³n de la sanciÃ³n. Si el investigado confiesa la comisiÃ³n de la falta antes de la formulaciÃ³n de cargos, la sanciÃ³n puede ser disminuida.' },
  { id: 446, axisId: 4, text: 'Â¿Un servidor pÃºblico en provisionalidad puede ser investigado disciplinariamente?', options: ['No, porque no es de carrera.', 'SÃ­, el rÃ©gimen disciplinario cobija a todos los servidores pÃºblicos, sin importar su tipo de vinculaciÃ³n.', 'Solo si la falta es gravÃ­sima.', 'Solo por el jefe inmediato, no por la ProcuradurÃ­a.'], correctOptionIndex: 1, explanation: 'Todos los servidores pÃºblicos, sean de carrera, de libre nombramiento, en provisionalidad o temporales, son destinatarios de la ley disciplinaria y tienen los mismos deberes y prohibiciones.' },
  { id: 447, axisId: 4, text: 'Actuar con "manifiesto conflicto de intereses" es una falta que atenta contra el principio de:', options: ['Eficiencia.', 'EconomÃ­a.', 'Imparcialidad.', 'Celeridad.'], correctOptionIndex: 2, explanation: 'El principio de imparcialidad exige que los servidores pÃºblicos tomen decisiones objetivas, basadas en el interÃ©s general y no en intereses personales, familiares o de negocios. Actuar en medio de un conflicto de intereses viola directamente este principio.' },
  { id: 448, axisId: 4, text: 'La "indagaciÃ³n preliminar" es una etapa del proceso disciplinario que busca:', options: ['Sancionar inmediatamente al servidor.', 'Verificar la ocurrencia de la conducta, identificar al posible autor y determinar si la conducta constituye falta disciplinaria.', 'Archivar todas las quejas que se presenten.', 'Negociar con el investigado.'], correctOptionIndex: 1, explanation: 'Cuando hay dudas sobre los hechos o sobre quiÃ©n los cometiÃ³, se puede abrir una indagaciÃ³n preliminar. Su objetivo es recolectar la informaciÃ³n bÃ¡sica para decidir si se archiva el caso o si se abre una investigaciÃ³n formal.' },
  { id: 449, axisId: 4, text: 'Â¿Se puede sancionar disciplinariamente a un exservidor pÃºblico?', options: ['No, una vez se retira ya no se le puede investigar.', 'SÃ­, si la falta se cometiÃ³ mientras ejercÃ­a sus funciones y la acciÃ³n no ha prescrito.', 'Solo si se retirÃ³ hace menos de un aÃ±o.', 'Solo si la falta fue la de abandono del cargo.'], correctOptionIndex: 1, explanation: 'El hecho de que una persona ya no sea servidor pÃºblico no impide que el Estado lo investigue y sancione por una falta cometida durante su servicio. La sanciÃ³n de inhabilidad le impedirÃ­a volver a vincularse con el Estado.' },
  { id: 450, axisId: 4, text: 'El "archivo definitivo" de una investigaciÃ³n disciplinaria procede cuando:', options: ['El investigado renuncia.', 'El quejoso retira la queja.', 'EstÃ¡ demostrado que la conducta no existiÃ³, que no es falta disciplinaria o que el investigado no la cometiÃ³.', 'El proceso se vuelve muy largo y complejo.'], correctOptionIndex: 2, explanation: 'El archivo es una decisiÃ³n de fondo que se toma cuando, tras la investigaciÃ³n, se llega a la certeza de que no hay mÃ©rito para continuar con el proceso y formular cargos, ya sea por atipicidad de la conducta, por una causal de justificaciÃ³n o porque no se pudo probar la autorÃ­a.' },// Preguntas de OfimÃ¡tica, Archivo y RedacciÃ³n (Primeras 10 de 100)
const OFIMATICA_QUESTIONS = [
  {
    id: 451,
    axisId: 5,
    text: 'Â¿CuÃ¡l de los siguientes NO es un componente principal de la suite ofimÃ¡tica Microsoft Office?',
    options: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Edge'
    ],
    correctOptionIndex: 3,
    explanation: 'Microsoft Edge es un navegador web, no forma parte de las herramientas principales de la suite ofimÃ¡tica Microsoft Office.'
  },
  {
    id: 452,
    axisId: 5,
    text: 'Â¿QuÃ© combinaciÃ³n de teclas permite copiar un texto seleccionado en la mayorÃ­a de los programas de Windows?',
    options: [
      'Ctrl + X',
      'Ctrl + C',
      'Ctrl + V',
      'Ctrl + Z'
    ],
    correctOptionIndex: 1,
    explanation: 'La combinaciÃ³n Ctrl + C permite copiar el texto seleccionado al portapapeles en la mayorÃ­a de los programas de Windows.'
  },
  {
    id: 453,
    axisId: 5,
    text: 'En Microsoft Word, Â¿quÃ© funciÃ³n cumple la tecla F7?',
    options: [
      'Abrir un documento existente',
      'Activar la revisiÃ³n ortogrÃ¡fica y gramatical',
      'Guardar el documento actual',
      'Imprimir el documento'
    ],
    correctOptionIndex: 1,
    explanation: 'La tecla F7 en Microsoft Word activa la herramienta de revisiÃ³n ortogrÃ¡fica y gramatical.'
  },
  {
    id: 454,
    axisId: 5,
    text: 'Â¿CuÃ¡l es la extensiÃ³n por defecto de los archivos de Microsoft Word 2016 y versiones posteriores?',
    options: [
      '.doc',
      '.docx',
      '.txt',
      '.rtf'
    ],
    correctOptionIndex: 1,
    explanation: 'La extensiÃ³n .docx es el formato estÃ¡ndar para documentos de Word a partir de la versiÃ³n 2007.'
  },
  {
    id: 455,
    axisId: 5,
    text: 'Â¿QuÃ© significa la sigla PDF?',
    options: [
      'Portable Document Format',
      'Personal Data File',
      'Printable Document Format',
      'Public Document File'
    ],
    correctOptionIndex: 0,
    explanation: 'PDF significa Portable Document Format (Formato de Documento PortÃ¡til), un formato desarrollado por Adobe Systems.'
  },
  {
    id: 456,
    axisId: 5,
    text: 'En Excel, Â¿quÃ© fÃ³rmula sumarÃ­a los valores de las celdas A1 hasta A10?',
    options: [
      '=SUMA(A1-A10)',
      '=TOTAL(A1:A10)',
      '=SUMA(A1:A10)',
      '=A1+A10'
    ],
    correctOptionIndex: 2,
    explanation: 'La fÃ³rmula correcta para sumar un rango de celdas en Excel es =SUMA(A1:A10).'
  },
  {
    id: 457,
    axisId: 5,
    text: 'Â¿CuÃ¡l de las siguientes NO es una regla bÃ¡sica de redacciÃ³n oficial?',
    options: [
      'Uso de lenguaje claro y preciso',
      'Estructura lÃ³gica y coherente',
      'Uso excesivo de tecnicismos',
      'CorrecciÃ³n gramatical y ortogrÃ¡fica'
    ],
    correctOptionIndex: 2,
    explanation: 'El uso excesivo de tecnicismos dificulta la comprensiÃ³n del mensaje, por lo que no es una prÃ¡ctica recomendada en la redacciÃ³n oficial.'
  },
  {
    id: 458,
    axisId: 5,
    text: 'Â¿QuÃ© tecla permite seleccionar varios archivos no consecutivos en el Explorador de Windows?',
    options: [
      'Shift',
      'Ctrl',
      'Alt',
      'Tab'
    ],
    correctOptionIndex: 1,
    explanation: 'La tecla Ctrl permite seleccionar mÃºltiples archivos no consecutivos manteniÃ©ndola presionada mientras se hace clic en cada archivo.'
  },
  {
    id: 459,
    axisId: 5,
    text: 'En PowerPoint, Â¿quÃ© vista permite ver las diapositivas en miniatura en el panel izquierdo?',
    options: [
      'Vista Normal',
      'Vista Clasificador de diapositivas',
      'Vista PresentaciÃ³n con diapositivas',
      'Vista PatrÃ³n de diapositivas'
    ],
    correctOptionIndex: 0,
    explanation: 'La Vista Normal muestra las diapositivas en miniatura en el panel izquierdo y la diapositiva actual en el panel principal.'
  },
  {
    id: 460,
    axisId: 5,
    text: 'Â¿CuÃ¡l de las siguientes NO es una funciÃ³n de un sistema de gestiÃ³n documental?',
    options: [
      'Almacenamiento de documentos',
      'Control de versiones',
      'EdiciÃ³n de imÃ¡genes',
      'BÃºsqueda y recuperaciÃ³n de documentos'
    ],
    correctOptionIndex: 2,
    explanation: 'La ediciÃ³n de imÃ¡genes no es una funciÃ³n principal de un sistema de gestiÃ³n documental, que se enfoca en el almacenamiento, control de versiones y recuperaciÃ³n de documentos.'
  }
];

export default OFIMATICA_QUESTIONS;
];