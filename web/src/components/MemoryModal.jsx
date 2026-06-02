import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Normaliza: acepta `photos: []` o `photo: x` o nada.
function getPhotos(event) {
  if (!event) return [];
  if (Array.isArray(event.photos) && event.photos.length > 0) return event.photos;
  if (event.photo) return [event.photo];
  return [];
}

export default function MemoryModal({ event, onClose }) {
  const photos = getPhotos(event);
  const [index, setIndex] = useState(0);

  // Reset del índice al cambiar de evento
  useEffect(() => {
    setIndex(0);
  }, [event]);

  // Teclado: Esc cierra, ← → navegan
  useEffect(() => {
    if (!event) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % Math.max(photos.length, 1));
      else if (e.key === "ArrowLeft")  setIndex((i) => (i - 1 + Math.max(photos.length, 1)) % Math.max(photos.length, 1));
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [event, onClose, photos.length]);

  const hasMultiple = photos.length > 1;
  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="memory-modal-title"
            className="relative bg-cream rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center text-ink/70 hover:text-rose-600 transition"
            >
              ✕
            </button>

            {/* Carrusel de fotos */}
            {photos.length > 0 && (
              <div className="relative w-full aspect-[3/2] bg-ink/90 overflow-hidden flex-shrink-0">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    {/* Fondo difuminado para rellenar los lados de fotos verticales */}
                    <img
                      src={photos[index]}
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-50"
                    />
                    {/* Foto completa, sin recortar */}
                    <img
                      src={photos[index]}
                      alt={`${event.title} (${index + 1}/${photos.length})`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 left-4 text-5xl drop-shadow-lg pointer-events-none">
                  {event.emoji}
                </div>

                {hasMultiple && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Foto anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-ink/80 hover:text-rose-600 transition"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Foto siguiente"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center text-ink/80 hover:text-rose-600 transition"
                    >
                      ›
                    </button>

                    {/* Indicadores (puntitos) */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {photos.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setIndex(i)}
                          aria-label={`Ir a foto ${i + 1}`}
                          className={`w-2.5 h-2.5 rounded-full transition ${
                            i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Contador */}
                    <div className="absolute top-4 right-16 px-2.5 py-1 rounded-full bg-black/40 text-white text-xs font-medium tabular-nums">
                      {index + 1} / {photos.length}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Contenido */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-xs uppercase tracking-widest text-rose-500 mb-2">
                {formatDate(event.date)}
              </div>
              <h3 id="memory-modal-title" className="font-display text-3xl md:text-4xl text-rose-700 mb-4">
                {event.title}
              </h3>
              <p className="text-ink/80 leading-relaxed text-lg">
                {event.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
