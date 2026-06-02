import { useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "../data";
import MemoryModal from "./MemoryModal";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ¿Tiene al menos una foto real? (descarta placeholders externos http)
function hasRealPhoto(event) {
  if (Array.isArray(event.photos) && event.photos.length > 0) return true;
  if (event.photo && !/^https?:\/\//.test(event.photo)) return true;
  return false;
}

function Item({ event, index, onOpen }) {
  const isLeft = index % 2 === 0;
  const clickable = hasRealPhoto(event);

  const baseClasses = `w-full max-w-sm h-56 flex flex-col text-left bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-rose-100 ${
    clickable
      ? "cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-1 hover:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
      : "cursor-default"
  } ${isLeft ? "md:text-right md:items-end" : "md:text-left md:items-start"}`;

  const inner = (
    <>
      <div className="text-4xl mb-2">{event.emoji}</div>
      <div className="text-xs uppercase tracking-widest text-rose-500 mb-1">
        {formatDate(event.date)}
      </div>
      <h3 className="font-display text-2xl text-rose-700 mb-2 line-clamp-2">
        {event.title}
      </h3>
      <p className="text-ink/70 leading-relaxed line-clamp-2 flex-1">
        {event.text}
      </p>
    </>
  );

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-6 mb-12`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={`md:w-1/2 flex ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
        {clickable ? (
          <button type="button" onClick={() => onOpen(event)} className={baseClasses}>
            {inner}
          </button>
        ) : (
          <div className={baseClasses}>{inner}</div>
        )}
      </div>

      <div className="hidden md:flex w-12 flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-rose-500 ring-4 ring-rose-200 mt-8" />
      </div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

export default function Timeline() {
  const [selected, setSelected] = useState(null);
  const sorted = [...timeline].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nuestra historia
      </motion.h2>
      <p className="text-center text-ink/60 mb-16">
        Los momentos que nos han traído hasta aquí · <span className="text-rose-500">pulsa para ver las fotos</span>
      </p>

      <div className="absolute left-1/2 top-48 bottom-12 w-0.5 bg-rose-200 hidden md:block -translate-x-1/2" />

      <div className="relative">
        {sorted.map((event, i) => (
          <Item
            key={event.date + event.title}
            event={event}
            index={i}
            onOpen={setSelected}
          />
        ))}
      </div>

      <MemoryModal event={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
