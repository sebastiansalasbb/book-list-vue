import type { Libro } from '@/types/libro'
import { reactive } from 'vue'

const estado = reactive<{ listaDeLibros: Libro[] }>({
  listaDeLibros: [
    {
      titulo: 'Una breve historia del tiempo',
      autor: 'Stephen Hawking',
      descripcion:
        'awking pasa revista a las grandes teorías cosmológicas desde Aristóteles hasta nuestros dias. Tras explicar con gran claridad las aportaciones de Galileo y Newton, nos lleva paso a paso, hasta la teoría de la relatividad de Einstein y hasta la otra gran teoría física del siglo XX, la mecánica cuántica. Finalmente explora las posibilidades de combinar ambas teorías en una sola teoría unificada completa que nos permita verificar inquientantes reflexiones: ¿Cuál es la naturaleza del tiempo? Al colapsarse un universo en expansión ¿viaja el tiempo hacia atrás? ¿Puede ser el universo un continuum sin principios ni fronteras? Todo está en este libro mítico, reconocido por el mundo entero como una aportación de primer orden al pensamiento científico y a la entera cultura universal, en el que Hawking nos explica, con asombrosa sencillez, las leyes que desvelan la compleja danza geométrica creadora del mundo y de la vida.',

      formato: 'Libro Físico',
      editorial: 'Booket',
      anio: 2015,
      idioma: 'Español',
      paginas: 256,
      encuadernacion: 'Tapa Blanda',
      dimensiones: '12 x 19 cm',
      isbn13: '9789584245182',
      categoria: 'Ciencias',
      portadaUrl: '/img/Unabrevehistoriadeltiempo.webp',
    },
    {
      titulo: 'Hábitos atómicos',
      autor: 'James Clear',
      descripcion:
        'HÁBITOS ATÓMICOS parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos. ¿Por qué es tan fácil caer en los malos hábitos y tan complicado seguir los buenos?',

      formato: 'Libro Físico',
      editorial: 'Booket',
      coleccion: 'Booket',
      anio: 2024,
      idioma: 'Español',
      paginas: 328,
      encuadernacion: 'Tapa Blanda',
      dimensiones: '13 x 19 cm',
      isbn13: '9786287574922',
      categoria: 'Desarrollo personal',
      portadaUrl: '/img/habitosatomicos.webp',
    },
    {
      titulo: 'Pensar rápido, pensar despacio',
      autor: 'Daniel Kahneman',
      descripcion:
        'En Pensar rápido, pensar despacio, Kahneman nos ofrece una revolucionaria perspectiva del cerebro y explica los dos sistemas que modelan cómo pensamos. El Sistema 1 es rápido, intuitivo y emocional, mientras que el Sistema 2 es más lento, deliberativo y lógico. El impacto de la aversión a la pérdida y el exceso de confianza en las estrategias empresariales, la dificultad de predecir lo que nos hará felices en el futuro o el profundo efecto de los sesgos cognitivos sobre lo que hacemos solo puede ser comprendido si entendemos el funcionamiento conjunto de los dos sistemas a la hora de formular nuestros juicios y decisiones. ¿Cuándo podemos confiar en nuestras intuiciones y cuándo no? ¿Cómo podemos aprovechar los beneficios del pensamiento lento? Kahneman nos ofrece las respuestas a estas preguntas y añade, además, enseñanzas prácticas e iluminadoras sobre cómo se adoptan decisiones en la vida profesional o personal, y sobre cómo podemos usar distintas técnicas para protegernos de los fallos mentales que nos crean problemas. Un libro que cambiará para siempre nuestra manera de pensar sobre cómo pensamos.«Los más entusiastas lo comparan con Galileo y Darwin».El Mundo',

      formato: 'Libro Físico',
      editorial: 'DEBATE',
      anio: 2025,
      idioma: 'Español',
      paginas: 672,
      encuadernacion: 'Tapa Blanda',
      dimensiones: '23 x 15 cm',
      isbn13: '9789566247838',
      categoria: 'Desarrollo personal',
      portadaUrl: '/img/pensar-rapido-pensar-despacio.webp',
    },
    {
      titulo: 'Privacidad es Poder',
      autor: 'Carissa Véliz',
      editorial: 'Debate',
      coleccion: 'Sociedad',
      anio: 2021,
      idioma: 'Español',
      paginas: 304,
      encuadernacion: 'Tapa Blanda',
      dimensiones: '23.00 x 15.20 cm',
      isbn13: '9788418056680',
      edicion: '001',
      formato: 'Libro Físico',
      categoria: 'Informática',
      portadaUrl: '/img/privacidad-es-poder.webp',
      descripcion:
        'Seleccionado por The Economist como uno de los libros del año. La guía definitiva para afrontar uno de los problemas más acuciantes de nuestro tiempo: la pérdida de la privacidad. Nos vigilan. Saben que estás leyendo estas palabras. Gobiernos y cientos de empresas nos espían: a ti y a todos tus conocidos. A todas horas, todos los días. Rastrean y registran todo lo que pueden: nuestra ubicación, nuestras comunicaciones, nuestras búsquedas en internet, nuestra información biométrica, nuestras relaciones sociales, nuestras compras, nuestros problemas médicos y mucho más. Quieren saber quiénes somos, qué pensamos, dónde nos duele. Quieren predecir nuestro comportamiento e influir en él. Tienen demasiado poder. Su poder proviene de nosotros, de ti, de tus datos. Recuperar la privacidad es la única manera de que podamos asumir de nuevo el mando de nuestras vidas y de nuestras sociedades. La privacidad es tan colectiva como personal, y es hora de retomar el control. Privacidad es poder es el primer libro que propone el fin de la economía de los datos. Carissa Véliz explica cómo nuestros datos personales están cediendo demasiado poder a las grandes empresas tecnológicas y a los gobiernos, por qué esto es importante y qué podemos hacer al respecto.',
    },
    {
      titulo: 'Inteligencia artificial aplicada',
      autor: 'Alexander Ortiz Ocaña',
      editorial: 'Ecoe Ediciones',
      anio: 2025,
      idioma: 'Español',
      paginas: 100,
      encuadernacion: 'Tapa Blanda',
      dimensiones: '24 x 17 cm',
      isbn13: '9789585084698',
      formato: 'Libro Físico',
      categoria: 'Informática',
      portadaUrl: '/img/inteligencia-artificial-aplicada.webp',
      descripcion:
        'Este libro explora la aplicación de la inteligencia artificial en la educación, analizando tendencias, casos prácticos, desafíos y oportunidades en un contexto de innovación acelerada. Desde sistemas de tutoría adaptativa hasta herramientas predictivas para evaluar el rendimiento estudiantil y la automatización de tareas administrativas, ofrece una visión integral y actualizada sobre cómo la IA está transformando el ámbito educativo.',
    },
    {
      titulo: 'El Triángulo de Cerro Moreno',
      autor: 'Hugo Riquelme Becerra',
      editorial: 'Suma De Letras',
      anio: 2025,
      idioma: 'Español',
      paginas: 240,
      encuadernacion: 'Tapa Blanda',
      dimensiones: '23 x 15 cm',
      peso: 0.32,
      isbn13: '9789566190523',
      formato: 'Libro Físico',
      categoria: 'Ciencias',
      portadaUrl: '/img/el-triangulo-de-cerro-moreno.webp',
      descripcion:
        'Extraños sucesos tienen lugar en el cielo del norte de Chile. Aviones y pilotos desaparecen sin dejar rastro. Esta es su desconocida historia, hasta ahora..Antofagasta, enero, 1981. Un vuelo de rutina marcará el destino del piloto Carlos González de la Fuerza Área de Chile. Su sueño de avanzar en la carrera militar y ofrecerle un mejor pasar a su esposa y su pequeño hijo se verán interrumpidos debido a un inexplicable suceso ocurrido mientras piloteaba su Hawker Hunter. El fenómeno del que fue testigo lo hará dudar de su cordura. Esta novela revela una serie de misteriosos acontecimientos, registrados durante décadas en la zona de Cerro Moreno en Antofagasta, a través de una inquietante trama llena de suspenso, que amenaza los límites de la realidad que conocemos.',
    },
  ],
})

export const useLibros = () => {
  const anadirLibro = (nuevoLibro: Libro) => {
    estado.listaDeLibros.push(nuevoLibro)
  }

  const eliminarLibro = ({ tituloPorBorrar }: { tituloPorBorrar: string }) => {
    const librosFiltrados = estado.listaDeLibros.filter(
      (item: Libro) => item.titulo !== tituloPorBorrar,
    )
    estado.listaDeLibros = [...librosFiltrados]
  }

  return {
    estado,
    anadirLibro,
    eliminarLibro,
  }
}
