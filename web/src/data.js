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

export const couple = {
  name1: "Tú",            // TODO: tu nombre
  name2: "Ella",          // TODO: su nombre
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
    photo: "https://picsum.photos/seed/notredame-sierra/1200/800",
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
    date: "2026-06-07",
    title: "Un año juntos",
    text: "Y esto es solo el principio.",
    emoji: "💍",
    photo: "https://picsum.photos/seed/aniversario/1200/800",
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
  greeting: "Mi amor,",
  paragraphs: [
    "Hace un año que empezó esto y todavía me cuesta creer la suerte que tengo.",
    "Cada día contigo es una razón nueva para querer que esto siga creciendo.",
    "Gracias por las risas, por los abrazos largos, por aguantarme en mis días raros, y por hacer que los días normales sean especiales.",
    "Aquí va este pequeño regalo: un trocito de internet que es solo nuestro. Espero que te guste tanto como me has gustado tú desde el primer día.",
  ],
  signature: "Tuyo, siempre.",
};

// ---- Cosas que me encantan de ti -----------------------------------------
// Aparecen rotando una a una. Añade, quita o reordena.
export const lovedThings = [
  "Tu risa cuando algo te hace mucha gracia",
  "Cómo te emocionas con las cosas pequeñas",
  "La forma en que me miras cuando piensas que no me doy cuenta",
  "Tus abrazos cuando estoy de bajón",
  "Lo bien que hueles siempre",
  "Que aguantas mis tonterías sin rendirte",
  "Tu manera de cuidar a la gente que quieres",
  "Cómo bailas cuando crees que nadie te mira",
  "Que me haces sentir en casa estés donde estés",
  "Tu cabezonería, aunque luego me toque a mí",
  "Cómo te ríes de mis chistes malos",
  "Tu forma de hacer especial cualquier día",
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
  { id: "viaje-largo",     text: "Hacer un viaje largo juntos" },
  { id: "festival",         text: "Ir a un festival" },
  { id: "playa-amanecer",   text: "Ver un amanecer en la playa" },
  { id: "concierto",        text: "Un concierto de los nuestros" },
  { id: "casa-rural",       text: "Escapada a una casa rural" },
  { id: "tatuaje",          text: "Algo simbólico (¿tatuaje?)" },
  { id: "cocinar",          text: "Cocinar juntos una receta nueva" },
  { id: "extranjero",       text: "Un viaje fuera de España" },
  { id: "noche-estrellas",  text: "Una noche viendo las estrellas" },
  { id: "fotos-polaroid",   text: "Hacernos un álbum de polaroids" },
];
