import { useMemo } from "react";
import { motion } from "framer-motion";
import { timeline } from "../data";

// Coge la primera foto "real" de cada recuerdo (descarta los placeholders
// externos tipo picsum.photos) y la convierte en una polaroid con su título.
function buildPhotos() {
  return timeline
    .map((e) => {
      const src = Array.isArray(e.photos) ? e.photos[0] : e.photo;
      return src ? { src, title: e.title, emoji: e.emoji } : null;
    })
    .filter((p) => p && !/^https?:\/\//.test(p.src));
}

// Rotaciones fijas para el efecto "pegadas a mano" en la pared.
const TILTS = [-6, 4, -3, 7, -5, 3, -7, 5, -4, 6, -2, 8, -6, 4, -5, 3, -8, 5, -3, 6, -4, 7];

function Polaroid({ photo, index }) {
  const tilt = TILTS[index % TILTS.length];

  return (
    <motion.figure
      className="group relative bg-white p-3 pb-12 rounded-sm shadow-lg w-44 md:w-52"
      style={{ rotate: `${tilt}deg` }}
      initial={{ opacity: 0, y: 40, rotate: tilt }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ rotate: 0, scale: 1.06, zIndex: 10 }}
    >
      {/* "Celo" decorativo arriba */}
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 bg-rose-200/50 rotate-2 rounded-sm" />
      <div className="aspect-square overflow-hidden bg-rose-100">
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <figcaption className="absolute bottom-3 inset-x-0 px-3 text-center font-hand text-lg text-ink/80 leading-tight truncate">
        {photo.emoji} {photo.title}
      </figcaption>
    </motion.figure>
  );
}

export default function PhotoWall() {
  const photos = useMemo(buildPhotos, []);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nuestra pared de fotos
      </motion.h2>
      <p className="text-center text-ink/60 mb-14">
        Un trocito de cada momento · pasa el ratón por encima
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
        {photos.map((p, i) => (
          <Polaroid key={p.src + i} photo={p} index={i} />
        ))}
      </div>
    </section>
  );
}
