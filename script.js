const estilos = {
  ACTIVO: [1, 7, 16, 17, 23, 28, 33, 37, 41, 46, 48, 52, 57, 60, 62, 66, 69, 70],
  REFLEXIVO: [2, 3, 8, 10, 14, 21, 25, 31, 34, 36, 39, 44, 47, 51, 54, 56, 59, 63],
  ESTRUCTURADO: [6, 12, 13, 18, 22, 24, 27, 29, 30, 35, 38, 42, 45, 50, 61, 64, 65, 67],
  FUNCIONAL: [4, 5, 9, 11, 15, 19, 20, 26, 32, 40, 43, 49, 53, 55, 58, 68, 71]
};

const descripciones = {
  ACTIVO: "Los docentes con este estilo de enseñanza se plantean con frecuencia nuevos contenidos, motivan con actividades novedosas y/o con problemas reales del entorno, promueven el trabajo en equipo, la generación de ideas y cambian con frecuencia de metodología. Procuran que los alumnos no trabajen mucho tiempo sobre la misma actividad y dejan libertad en su temporalización y orden de realización. Son partidarios de romper las rutinas, de traslucir su estado de ánimo y de trabajar en equipo con otros docentes. Suelen estar bien informados de la actualidad y abiertos a sus discusiones en el aula.",
  REFLEXIVO: "Los docentes con este estilo de enseñanza son partidarios de la planificación detallada. No admiten la improvisación y no suelen impartir contenidos que no estén incluidos en el programa. Fomentan y valoran en los estudiantes la reflexión, el análisis y que sustenten sus ideas desde la racionalidad. Promueven el trabajo individual sobre el grupal. Anuncian las fechas de los exámenes con antelación suficiente y valoran la exactitud de las respuestas además del orden y el detalle. Son responsables, reflexivos, cuidadosos, tranquilos y con mucha paciencia.",
  ESTRUCTURADO: "Los docentes con este estilo de enseñanza otorgan importancia a la planificación y ponen énfasis en que sea coherente, estructurada y bien presentada. Tratan de impartir los contenidos integrados, siempre en un marco teórico amplio, articulado y sistemático. La dinámica de la clase suele desarrollarse bajo una cierta presión con actividades complejas de relacionar y estructurar. Son objetivos, lógicos, perfeccionistas y sistemáticos.",
  FUNCIONAL: "Los docentes con este estilo de enseñanza son partidarios de la planificación, su preocupación es cómo llevarla a la práctica. Las explicaciones son breves y siempre incluyen ejemplos prácticos. Simpatizan con el trabajo en equipo y orientan en la ejecución de las tareas para eludir que caigan en el error. En las evaluaciones abundan los ejercicios prácticos valorando más el resultado final que los procedimientos. Son prácticos, realistas, concretos y con tendencia a rentabilizar su esfuerzo."
};


const preguntas = [
  "La programación me limita a la hora de enseñar los contenidos",
  "La programación me limita a la hora de enseñar los contenidos",
  "Durante el curso prefiero desarrollar pocos temas pero con profundidad.",
  "Cuando doy ejercicios dejo tiempo suficiente para resolverlos.",
  "Las actividades de clase implican, en la mayoría de las veces, aprendizaje de técnicas para ser aplicadas.",
  "Las explicaciones de contenidos siempre las acompaño de ejemplos prácticos y útiles.",
  "Las actividades que propongo están siempre muy estructuradas y con propósitos claros y explícitos.",
  "Las preguntas que surgen (espontáneas o de actualidad) las antepongo sobre lo que estoy haciendo.",
  "En las reuniones de trabajo en equipo con otros/as colegas escucho más que hablo. Soy poco participativo.",
  "Con frecuencia reconozco el mérito de los estudiantes cuando se ha realizado un buen trabajo.",
  "Favorezco e insisto en que los estudiantes piensen bien lo que van a decir antes de hacerlo.",
  "Con frecuencia llevo a clase expertos en la materia, ya que considero que de esta forma se aprende mejor.",
  "La mayoría de los ejercicios que entrego se caracterizan por relacionar, analizar o generalizar.",
  "La mayoría de las veces trabajo y hago trabajar bajo presión",
  "En clase solamente se trabaja sobre lo planificado, dejando lo demás para otros momentos",
  "Pongo lo práctico y lo útil por encima de los sentimientos y las emociones",
  "Me atraen las clases con estudiantes espontáneos, dinámicos, e inquietos",
  "Me es difícil disimular mi estado de ánimo en clases",
  "Tengo dificultad para romper rutinas metodológicas o cambiar de estrategias de enseñanza",
  "Favorezco la búsqueda de 'acortar camino' para llegar a la solución",
  "En mis evaluaciones predominan las preguntas de aplicación/prácticas sobre las teóricas",
  "Hago evaluaciones en clase sólo si las he avisado previamente",
  "Trato que las intervenciones de los alumnos en clase se deduzcan con coherencia",
  "Cuando planifico actividades trato que éstas no sean repetitivas",
  "Permito que los estudiantes se agrupen por intereses o calificaciones equivalentes",
  "En las evaluaciones doy puntaje a la presentación y el orden",
  "La mayoría de las actividades que realizo suelen ser prácticas y relacionadas con la realidad",
  "Prefiero trabajar con colegas de profesión, ya que los considero de un nivel intelectual igual o superior al mío",
  "Con frecuencia propongo a los estudiantes que se planteen preguntas, desafíos o problemas para tratar y/o resolver",
  "Me disgusta dejar una imagen de falta de conocimiento en la temática que estoy impartiendo",
  "Soy partidario(a) de ejercicios y actividades con demostraciones teóricas",
  "Al iniciar el curso tengo planificado, casi al detalle, lo que voy a desarrollar",
  "Procuro evitar el fracaso en las actividades y para ello oriento continuamente",
  "En las reuniones de Departamento, Facultad o Colegio y otras reuniones aporto ideas originales o nuevas",
  "La mayoría de las veces, en las explicaciones aporto varios puntos de vista sin importarme el tiempo que ocupe en ello",
  "Valoro que las respuestas en los exámenes sean lógicas y coherentes",
  "Prefiero estudiantes tranquilos, reflexivos y con cierto método de trabajo",
  "Si en clase alguna situación o actividad no sale bien, no me aproblemo y, sin reparos, la replanteo de otra forma",
  "Prefiero y procuro que en el aula de clases no haya intervenciones espontáneas",
  "Con frecuencia propongo actividades que necesiten buscar información para analizarla y sacar conclusiones",
  "Si una clase funciona bien no considero otras alternativas y/o subjetividades",
  "Con frecuencia, suelo pedir voluntarios/as entre los estudiantes para que expliquen las actividades ante los demás",
  "Los experimentos (problemas) que planteo suelen ser complejos, aunque bien definidos en los pasos a seguir para su realización",
  "Siento cierta preferencia por los estudiantes prácticos y realistas sobre los teóricos e idealistas",
  "En los primeros días de curso presento y, en algunos casos, acuerdo con los estudiantes la planificación",
  "Soy más abierto a relaciones profesionales que a las afectivas",
  "Animo y estimulo a que se rompan rutinas",
  "Doy muchas vueltas a los hechos antes de tomar decisiones",
  "El trabajo metódico y detallista me incomoda y me cansa",
  "Prefiero que los estudiantes respondan a las preguntas de forma breve y precisa",
  "Siempre procuro dar los contenidos integrados más amplios",
  "En la dinámica de la clase no es frecuente que ponga a los estudiantes a trabajar en grupo",
  "En clase, favorezco intencionalmente el aporte de ideas sin ninguna limitación formal",
  "En la planificación, los procedimientos y experiencias prácticas tienen más peso que los contenidos teóricos",
  "Las fechas de las evaluaciones las anuncio con más de dos semanas de antelación",
  "Me encuentro bien entre colegas que tienen ideas que pueden ponerse en práctica",
  "Explico bastante y con detalle ya que creo que así favorezco el aprendizaje",
  "En lo posible, mis explicaciones son breves y, si puedo, dentro de alguna situación real y actual",
  "Los contenidos teóricos los imparto dentro de experiencias y trabajos prácticos",
  "Ante cualquier hecho favorezco que se busquen racionalmente las causas",
  "En las evaluaciones acostumbro a hacer preguntas abiertas",
  "En la planificación, trato fundamentalmente que todo esté estructurado con lógica",
  "Con frecuencia cambio de estrategias metodológicas",
  "Prefiero trabajar individualmente ya que me permite avanzar a mi ritmo y no sentir estrés",
  "En las reuniones trato de analizar los problemas con objetividad y distancia",
  "Mantengo cierta actitud favorable hacia quienes razonan y son coherentes entre lo que dicen y lo que hacen",
  "Siempre que la tarea lo permita, prefiero que los estudiantes trabajen en equipo",
  "En las evaluaciones, valoro que se reflejen los pasos que se dan",
  "No me gusta que se divague. Enseguida pido que se vaya a lo concreto y práctico",
  "Suelo hacer evaluaciones (interrogaciones o pruebas) en clase, incluso sin haberlas anunciado",
  "En ejercicios y trabajos de los estudiantes, considero que la presentación, los detalles y el orden no son tan importantes como el contenido",
  "De una planificación me interesa cómo se va a llevar a la práctica y si es viable",
];

const tbody = document.getElementById("preguntas-body");
const username = document.getElementById("username");
const userId = document.getElementById("userid");

for (let i = 1; i <= 71; i++) {
  const tr = document.createElement("tr");

  const tdIndex = document.createElement("td");
  tdIndex.textContent = i;

  const tdPregunta = document.createElement("td");
  tdPregunta.textContent = preguntas[i] || `Pregunta ${i}`;

  const tdSi = document.createElement("td");
  tdSi.classList.add("center");
  tdSi.innerHTML = `<input type="radio" name="item${i}" value="sí" />`;

  const tdNo = document.createElement("td");
  tdNo.classList.add("center");
  tdNo.innerHTML = `<input type="radio" name="item${i}" value="no" />`;

  tr.appendChild(tdIndex);
  tr.appendChild(tdPregunta);
  tr.appendChild(tdSi);
  tr.appendChild(tdNo);

  tbody.appendChild(tr);
}

async function enviarFormulario() {

  if (!username.value || !userId.value) {
    alert("Por favor, ingrese nombre y documento.");
    return;
  }

  const respuestas = [];
  const conteo = {
    ACTIVO: 0,
    REFLEXIVO: 0,
    ESTRUCTURADO: 0,
    FUNCIONAL: 0
  };

  for (let estilo in estilos) {
    estilos[estilo].forEach((numero) => {
      const respuesta = document.querySelector(`input[name="item${numero}"]:checked`);

      respuestas.push({numero, respuesta: respuesta?.value || "N/A"});

      if (respuesta && respuesta.value === "sí") {
        conteo[estilo]++;
      }
    });
  }

  respuestas.sort((a, b) => a.numero - b.numero);
  const mayor = Math.max(...Object.values(conteo));
  const estilosGanadores = Object.entries(conteo).filter(([_, v]) => v === mayor);

  let estiloGanador = estilosGanadores[0][0]; // si hay empate, toma el primero

  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = `
    <h2>Tu estilo predominante es: <strong>${estiloGanador}</strong></h2>
    <p class="justificado">${descripciones[estiloGanador]}</p>
  `;

    try {
      // Fetch first 10 files
      const valores = [
        [username.value, userId.value, estiloGanador, ...respuestas.map(r => r.respuesta)] // Todos los datos en una sola fila
      ];

      const ultimaFilaVacia = await obtenerUltimaFilaVacia();

      await gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: '1FfwgKIEmwhdffLy1Ppx5cYTE0yA-i6XuSgASvsVoHFo',
        range: `Hoja 1!A${ultimaFilaVacia}`,
        valueInputOption: 'RAW',
        resource: {
          values: valores,
        },
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
}

async function obtenerUltimaFilaVacia() {
  try {
    // Obtener todos los datos de la hoja
    const response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1FfwgKIEmwhdffLy1Ppx5cYTE0yA-i6XuSgASvsVoHFo',
      range: `Hoja 1!A:A`, // Solo la columna A (puedes cambiarla según tus necesidades)
    });

    const rows = response.result.values;
    // Si no hay datos, la primera fila está vacía
    if (!rows || rows.length === 0) {
      return 1;
    }

    // La última fila vacía es la siguiente después de la última fila con datos
    return rows.length + 1;
  } catch (err) {
    console.error("Error al obtener la última fila vacía:", err);
    throw err;
  }
}
