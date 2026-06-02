// ===========================================================================
//  Datos personales — edita aquí todo el contenido de la web.
//  Las fotos van en /src/assets/photos/ y se importan abajo.
// ===========================================================================

// ---- Imports de fotos de la timeline --------------------------------------
import primeraCita from "./assets/photos/primera-cita.jpeg";
import kampaoh1 from "./assets/photos/kampaoh1.jpg";
import kampaoh2 from "./assets/photos/kampaoh2.jpg";
import kampaoh3 from "./assets/photos/kampaoh3.jpg";
import kampaoh4 from "./assets/photos/kampaoh4.jpg";
import feriaMontilla1 from "./assets/photos/feriaMontilla1.jpg";
import feriaMontilla2 from "./assets/photos/feriaMontilla2.jpg";
import feriaMontilla3 from "./assets/photos/feriaMontilla3.jpg";
import feriaFn1 from "./assets/photos/feriaFn1.jpg";
import feriaFn2 from "./assets/photos/feriaFn2.jpg";
import tardeBonita1 from "./assets/photos/tardeBonita1.jpg";
import tardeBonita2 from "./assets/photos/tardeBonita2.jpg";
import tardeBonita3 from "./assets/photos/tardeBonita3.jpg";
import sorpresa1 from "./assets/photos/s1.jpg";
import sorpresa2 from "./assets/photos/s2.jpg";
import sorpresa3 from "./assets/photos/s3.jpg";
import diaHipercor from "./assets/photos/diaHipercor.jpg";
import feriaAgosto from "./assets/photos/feriaAgosto.jpg";
import argentino from "./assets/photos/argentino.jpg";
import vacaciones1 from "./assets/photos/vacaiones.jpg";
import vacaciones2 from "./assets/photos/vacaciones2.jpg";
import vacaciones3 from "./assets/photos/vacaciones3.jpg";
import vacaciones4 from "./assets/photos/vaciones4.jpg";
import nerja1 from "./assets/photos/Nerja1.jpg";
import nerja2 from "./assets/photos/Nerja2.jpg";
import nerja3 from "./assets/photos/Nerja3.jpg";
import boda1 from "./assets/photos/boda1.jpg";
import boda2 from "./assets/photos/boda2.jpg";
import boda3 from "./assets/photos/boda3.jpg";
import meriendaHipercor from "./assets/photos/meirendaHipercor.jpg";
import cometelo from "./assets/photos/Cometelo.jpg";
import cumple1 from "./assets/photos/Cumple1.jpg";
import cumple2 from "./assets/photos/cumple2.jpg";
import cumple3 from "./assets/photos/cumple3.jpg";
import siQuiero1 from "./assets/photos/siQuiero.jpg";
import siQuiero2 from "./assets/photos/siQuiero2.jpg";
import navidad1 from "./assets/photos/Navidad1.jpg";
import navidad2 from "./assets/photos/Navidad2.jpg";
import voltereta1 from "./assets/photos/voltereta1.jpg";
import voltereta2 from "./assets/photos/voltereta2.jpg";
import voltereta3 from "./assets/photos/voltereta3.jpg";
import voltereta4 from "./assets/photos/voltereta4.jpg";
import miki from "./assets/photos/miki.jpg";
import granada1 from "./assets/photos/grn.jpg";
import granada2 from "./assets/photos/grn2.jpg";
import granada3 from "./assets/photos/grn3.jpg";
import granada4 from "./assets/photos/grn4.jpg";
import granada5 from "./assets/photos/grn5.jpg";
import santaFn from "./assets/photos/santaFn.jpg";
import cruces1 from "./assets/photos/cruces1.jpg";
import cruces2 from "./assets/photos/cruces2.jpg";
import cruces3 from "./assets/photos/cruces3.jpg";
import cruces4 from "./assets/photos/cruces4.jpg";
import feriaCordoba1 from "./assets/photos/feriaCordoba1.jpg";
import feriaCordoba2 from "./assets/photos/feriaCordoba2.jpg";
import feriaCordoba3 from "./assets/photos/feriaCordoba3.jpg";
import feriaCordoba4 from "./assets/photos/feriaCordoba4.jpg";
import feriaCordoba5 from "./assets/photos/feriaCordoba5.jpg";
import feriaCordoba6 from "./assets/photos/feriaCordoba6.jpg";
import feriaCordoba7 from "./assets/photos/feriaCordoba7.jpg";

export const couple = {
  name1: "A",             // inicial para el monograma de arriba
  name2: "S",             // inicial para el monograma de arriba
  // Fecha y hora exactas en que empezasteis (formato ISO con zona horaria).
  // Si no recuerdas la hora, deja 00:00.
  startDate: "2025-06-07T00:00:00+02:00",
  // Aniversario que celebráis ahora:
  anniversaryDate: "2026-06-07T00:00:00+02:00",
};

// ---- Línea de tiempo ------------------------------------------------------
// Cada evento se ordena por fecha automáticamente y se puede pulsar para abrir
// un modal con su foto. Para usar tus fotos reales en lugar de los placeholders:
//   1. Mete la imagen en src/assets/photos/  (p. ej. kampaoh.jpg)
//   2. Importa arriba:  import kampaoh from "./assets/photos/kampaoh.jpg";
//   3. Pon `photo: kampaoh` (una sola) o `photos: [foto1, foto2, foto3]` (carrusel).

export const timeline = [
  {
    date: "2025-06-07",
    title: "La primera vez que quedamos",
    text: "El día que empezó todo. Aquí va vuestro recuerdo de ese primer encuentro.",
    emoji: "💞",
    photo: primeraCita,
  },
  {
    date: "2025-06-14",
    title: "Notre Dame y la sierra",
    text: "Nuestra primera cita juntos: paseo por Notre Dame y escapada a la sierra.",
    emoji: "⛪",
  },
  {
    date: "2025-06-28",
    title: "Escapada al Kampaoh",
    text: "Nuestra primera escapada juntos. Una noche en el Kampaoh que se quedó grabada.",
    emoji: "⛺",
    photos: [kampaoh1, kampaoh2, kampaoh3, kampaoh4],
  },
  {
    date: "2025-07-12",
    title: "Primera feria de Montilla",
    text: "Las luces, la música, las risas… nuestra primera feria juntos.",
    emoji: "🎡",
    photos: [feriaMontilla1, feriaMontilla2, feriaMontilla3],
  },
  {
    date: "2025-07-19",
    title: "Feria de Fernán Núñez",
    text: "Otra feria, otra noche para recordar.",
    emoji: "🎠",
    photos: [feriaFn1, feriaFn2],
  },
  {
    date: "2025-07-23",
    title: "El día de vuelta bonito",
    text: "Ese viaje de vuelta que se quedó grabado para siempre.",
    emoji: "🌅",
    photos: [tardeBonita1, tardeBonita2, tardeBonita3],
  },
  {
    date: "2025-08-03",
    title: "Celebración con sorpresa (y Luffy)",
    text: "Aquella sorpresa especial, la foto de Luffy… un día que no olvidaré.",
    emoji: "🏴‍☠️",
    photos: [sorpresa1, sorpresa2, sorpresa3],
  },
  {
    date: "2025-08-05",
    title: "Un día en el Hipercor",
    text: "Planazo improvisado de los nuestros.",
    emoji: "🛍️",
    photo: diaHipercor,
  },
  {
    date: "2025-08-15",
    title: "Feria de agosto en Fernán Núñez",
    text: "Volvimos a la feria, esta vez en su mejor momento.",
    emoji: "🎆",
    photo: feriaAgosto,
  },
  {
    date: "2025-08-23",
    title: "Nuestro día argentino",
    text: "El día que descubrimos juntos lo bien que se come en el argentino.",
    emoji: "🥩",
    photo: argentino,
  },
  {
    date: "2025-09-02",
    title: "Nuestras primeras vacaciones",
    text: "Las primeras vacaciones juntos. Por fin.",
    emoji: "🧳",
    photos: [vacaciones1, vacaciones2, vacaciones3, vacaciones4],
  },
  {
    date: "2025-09-04",
    title: "Un día en Nerja",
    text: "Playa, sol y tú. Imposible pedir más.",
    emoji: "🏖️",
    photos: [nerja1, nerja2, nerja3],
  },
  {
    date: "2025-09-13",
    title: "Nuestra primera boda",
    text: "Bailamos, reímos, brindamos. Una noche perfecta.",
    emoji: "💒",
    photos: [boda1, boda2, boda3],
  },
  {
    date: "2025-10-03",
    title: "Merendola en el Hipercor",
    text: "Una merienda que sabía mejor por estar contigo.",
    emoji: "🍰",
    photo: meriendaHipercor,
  },
  {
    date: "2025-10-26",
    title: "Día en la sierra en Cómetelo",
    text: "Naturaleza, buena comida y tú al lado.",
    emoji: "🌲",
    photo: cometelo,
  },
  {
    date: "2025-11-10",
    title: "El cumple de mi monita",
    text: "Tu día. Lo celebramos como te mereces.",
    emoji: "🎂",
    photos: [cumple1, cumple2, cumple3],
  },
  {
    date: "2025-12-13",
    title: "Cita en Si Quiero",
    text: "Una cita preciosa que sigo recordando.",
    emoji: "💍",
    photos: [siQuiero1, siQuiero2],
  },
  {
    date: "2025-12-31",
    title: "Nuestras primeras Navidades",
    text: "Las uvas, los abrazos, empezar el año contigo.",
    emoji: "🎉",
    photos: [navidad1, navidad2],
  },
  {
    date: "2026-02-15",
    title: "San Valentín en El Voltereta",
    text: "Nuestro primer San Valentín. Cena especial y noche perfecta.",
    emoji: "💘",
    photos: [voltereta1, voltereta2, voltereta3, voltereta4],
  },
  {
    date: "2026-02-16",
    title: "Yo con mi pana Miki",
    text: "Un día especial con mi pana Miki.",
    emoji: "🤝",
    photo: miki,
  },
  {
    date: "2026-03-28",
    title: "Semana Santa en Granada",
    text: "Vacaciones de Semana Santa, descubriendo Granada juntos.",
    emoji: "🕌",
    photos: [granada1, granada2, granada3, granada4, granada5],
  },
  {
    date: "2026-03-30",
    title: "Semana Santa en el pueblo",
    text: "Procesiones, gente, nuestro sitio.",
    emoji: "🕯️",
    photo: santaFn,
  },
  {
    date: "2026-05-01",
    title: "Nuestras primeras Cruces",
    text: "Las Cruces de Mayo, flores y baile contigo.",
    emoji: "🌺",
    photos: [cruces1, cruces2, cruces3, cruces4],
  },
  {
    date: "2026-05-22",
    title: "Feria de Córdoba",
    text: "La portada encendida y bailar contigo. Tres noches de feria inolvidables.",
    emoji: "🎡",
    photos: [feriaCordoba1, feriaCordoba2, feriaCordoba3, feriaCordoba4, feriaCordoba5, feriaCordoba6, feriaCordoba7],
  },
  {
    date: "2026-06-07",
    title: "Un año juntos",
    text: "Y esto es solo el principio.",
    emoji: "💍",
  },
];

// (Sección de galería eliminada — las fotos ya se ven dentro de cada recuerdo
// en la timeline.)
/*
const P = (img, w = 1000, h = 1500) => ({ src: img, width: w, height: h });

export const gallery = [
  P(primeraCita),
  P(kampaoh2, 1500, 1000),
  P(feriaMontilla1),
  P(boda1),
  P(nerja2, 1500, 1000),
  P(voltereta1),
  P(sorpresa1),
  P(granada1, 1500, 1000),
  P(cumple1),
  P(siQuiero1),
  P(tardeBonita2, 1500, 1000),
  P(navidad1),
  P(cruces2),
  P(feriaFn1),
  P(vacaciones1, 1500, 1000),
  P(argentino),
  P(kampaoh1),
  P(meriendaHipercor, 1500, 1000),
  P(boda2),
  P(feriaMontilla2),
  P(voltereta2),
  P(nerja1),
  P(cometelo, 1500, 1000),
  P(granada2),
  P(cruces1),
  P(diaHipercor, 1500, 1000),
  P(sorpresa2),
  P(kampaoh3),
  P(feriaAgosto, 1500, 1000),
  P(tardeBonita1),
  P(cumple2),
  P(vacaciones2),
  P(voltereta3),
  P(granada3, 1500, 1000),
  P(feriaMontilla3),
  P(boda3),
  P(siQuiero2, 1500, 1000),
  P(miki),
  P(nerja3),
  P(navidad2, 1500, 1000),
  P(kampaoh4),
  P(sorpresa3),
  P(cruces3, 1500, 1000),
  P(tardeBonita3),
  P(feriaFn2),
  P(granada4),
  P(vacaciones3, 1500, 1000),
  P(voltereta4),
  P(cumple3),
  P(santaFn, 1500, 1000),
  P(granada5),
  P(vacaciones4),
  P(cruces4),
];
*/

// ---- Carta ----------------------------------------------------------------
export const letter = {
  greeting: "Mi monita,",
  paragraphs: [
    "Desde el primer día que te vi en la graduación tuve un sentimiento especial contigo. La primera semana que volvimos a hablar supe que quería tener algo contigo, porque era como si te conociera desde el primer día. El primer mes supe que quería estar a tu lado, y después de este año tengo muy seguro que eres tú la persona con la que quiero compartir el resto de mi vida, por todo lo que me haces sentir y el cómo.",
    "Además, como ya sabes, mi objetivo es vivir con mi monita, los gatetes y todo lo que venga, jeje. Y que te amo, mi vida. Muchas gracias por todo lo que haces por mí: aguantarme, quererme, reírte de mis pegos, acompañarme en todo y por todos esos momentos que he vivido este último año, que sin ti ni los hubiera vivido, o los hubiera vivido de manera muy diferente. De verdad, amor, es que me haces mejor persona.",
    "Gracias por acogerme en tu casa. Gracias por los momentos buenos en los que nos reímos, hacemos el bobo, vamos a cenar, vamos al cine, vamos a dar una vuelta al Hipercor a bobear, vemos pelis (bueno, lo intento, jeje), por apoyarme en mis hobbies, esos que me hacen tanta ilusión, y también en los momentos no tan buenos, que también son necesarios para crecer yo mismo como persona y como pareja.",
    "Y de verdad, gracias por poder hablar contigo de cualquier cosa de buena forma, y entendernos. Amor, me haces mejor persona, y aún lo seré más a tu lado, porque esto solo acaba de comenzar y nos queda toda una vida para vivirla juntos. Y eso me motiva y me encanta, porque ¡coño!, que eres tú, mi monita, y no te cambio por nada ni por nadie, cojones. Mi monita, coño, qué graciosa, buena persona y fogosita es, jeje. Que te amo, cojones, coño y ostia puta. Bueno, no sé por qué insulto, ya estoy delirando, pero lo sigo contando porque no sé, jajajajajaja.",
    "Y esta aplicación es lo que desde el primer día he querido hacerte. Es la versión súper 2.0 donde veamos todo lo que hemos vivido y todo lo que queda: Disneyland, Japón y muchas, muchas cosas más.",
  ],
  signature: "Te amo, siempre.",
};

// ---- Cosas que me encantan de ti -----------------------------------------
// Aparecen rotando una a una. Añade, quita o reordena.
export const lovedThings = [
  "Cómo me haces mejor persona sin ni siquiera proponértelo",
  "Que me acogiste en tu casa y en tu vida",
  "Tu risa cuando hacemos el bobo juntos",
  "Lo bien que lo pasamos en cualquier plan, hasta dando una vuelta al Hipercor",
  "Que apoyas mis hobbies y mis ilusiones como si fueran tuyas",
  "Poder hablar contigo de cualquier cosa, siempre de buena forma",
  "Que te ríes de mis tonterías y de mis pegos sin rendirte",
  "Lo graciosa que eres, mi monita",
  "La buena persona que eres con todo el mundo",
  "Que estás conmigo también en los momentos no tan buenos",
  "Imaginar nuestro futuro: la casa, los gatetes y todo lo que venga",
  "Lo fogosita que eres, jeje",
];

// ---- Lugares en el mapa ---------------------------------------------------
// Coordenadas aproximadas de los sitios donde habéis estado.
// Cambia las que no encajen con vuestro pueblo/sitios exactos.
export const places = [
  { name: "Donde empezó todo",     emoji: "💞",   coords: [37.5856, -4.6361], note: "7 de junio de 2025" },
  { name: "Notre Dame · Sierra",   emoji: "⛪",   coords: [37.8845, -4.7800], note: "14 de junio de 2025" },
  { name: "Kampaoh",               emoji: "⛺",   coords: [36.7370, -4.4970], note: "Nuestra primera escapada" },
  { name: "Montilla",              emoji: "🎡",   coords: [37.5856, -4.6361], note: "Feria 2025" },
  { name: "Fernán Núñez",          emoji: "🎠",   coords: [37.6700, -4.7250], note: "Ferias y Semana Santa" },
  { name: "Hipercor",              emoji: "🛍️",  coords: [37.8800, -4.7900], note: "Planazo improvisado" },
  { name: "Nerja",                 emoji: "🏖️", coords: [36.7450, -3.8740], note: "Playa, sol y tú" },
  { name: "Granada",               emoji: "🕌",   coords: [37.1773, -3.5986], note: "Semana Santa 2026" },
  { name: "Córdoba",               emoji: "🎡",   coords: [37.8882, -4.7794], note: "Feria de Córdoba · mayo 2026" },
];

// ---- Estadísticas (se calculan automáticamente desde la timeline) --------
// No las edites aquí, salen solas del array `timeline` y `couple.startDate`.

// ---- Quiz "¿Cuánto me conoces?" -------------------------------------------
export const quiz = [
  {
    question: "¿Dónde fue nuestra primera cita?",
    options: ["En el cine", "Notre Dame y la sierra", "El Voltereta", "En la feria"],
    correct: 1,
  },
  {
    question: "¿Cuántas ferias hemos vivido juntos este año?",
    options: ["2", "3", "4", "5"],
    correct: 2,
  },
  {
    question: "¿Qué nos llevamos de sorpresa el 3 de agosto?",
    options: ["Una tarta", "Una foto de Luffy", "Entradas para un concierto", "Un viaje"],
    correct: 1,
  },
  {
    question: "¿Dónde pasamos nuestras primeras vacaciones?",
    options: ["Granada", "Nerja", "El Kampaoh", "Madrid"],
    correct: 1,
  },
  {
    question: "¿Cuándo empezamos a estar juntos?",
    options: ["6 de junio de 2025", "7 de junio de 2025", "14 de junio de 2025", "1 de julio de 2025"],
    correct: 1,
  },
];

// ---- Próximas aventuras (checklist) --------------------------------------
// Marca/desmarca tocando — se guarda en el navegador.
export const futureAdventures = [
  { id: "disneyland",       text: "Viaje a Disneyland" },
  { id: "viaje-largo",      text: "Un viaje largo juntos" },
  { id: "extranjero",       text: "Un viaje fuera de España" },
  { id: "vivir-juntos",     text: "Vivir juntos" },
  { id: "juego-juntos",     text: "Pasarnos un juego juntos" },
  { id: "playa-amanecer",   text: "Ver el amanecer en la playa" },
  { id: "concierto",        text: "Ir a un concierto" },
];
