import { motion } from "framer-motion";
import { places } from "../data";

// Rotaciones fijas (deterministas) para que cada sello caiga un poco torcido,
// como si se hubiera estampado a mano en un cuaderno de viaje.
const TILTS = [-7, 5, -3, 8, -5, 4, -8, 3, 6, -4, 7, -6];

function Stamp({ place, index }) {
  const tilt = TILTS[index % TILTS.length];

  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 1.8, rotate: tilt - 12 }}
      whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 320, damping: 16, delay: index * 0.05 }}
    >
      <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-[3px] border-dashed border-rose-400/70 flex flex-col items-center justify-center text-center px-3 select-none">
        <div className="absolute inset-1.5 rounded-full border border-rose-300/50 pointer-events-none" />
        <div className="text-4xl mb-1 drop-shadow-sm">{place.emoji}</div>
        <div className="font-display text-sm leading-tight text-rose-700 uppercase tracking-wide">
          {place.name}
        </div>
        <div className="mt-1 text-[10px] text-rose-500/80 leading-snug">
          {place.note}
        </div>
      </div>
    </motion.div>
  );
}

export default function Passport() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nuestro pasaporte
      </motion.h2>
      <p className="text-center text-ink/60 mb-12">
        Un sello por cada sitio que hemos pisado juntos
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl shadow-xl border border-rose-100 p-8 md:p-12 overflow-hidden"
        style={{
          backgroundColor: "#faf3e7",
          backgroundImage:
            "radial-gradient(at 15% 15%, rgba(239,67,104,0.06), transparent 45%)," +
            "radial-gradient(at 85% 85%, rgba(239,67,104,0.06), transparent 45%)",
        }}
      >
        {/* Cabecera tipo cuaderno de viaje */}
        <div className="flex items-center justify-center gap-3 mb-10 text-rose-700/80">
          <span className="h-px w-10 bg-rose-300" />
          <span className="font-hand text-2xl">passport · nosotros</span>
          <span className="h-px w-10 bg-rose-300" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4">
          {places.map((p, i) => (
            <Stamp key={p.name + i} place={p} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
