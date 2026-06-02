import { motion } from "framer-motion";
import { couple, timeline } from "../data";

// Estadísticas calculadas automáticamente desde la timeline.
function computeStats() {
  const startMs = new Date(couple.startDate).getTime();
  const now = Date.now();
  const days = Math.floor((now - startMs) / (1000 * 60 * 60 * 24));

  const totalMoments = timeline.length;
  const ferias = timeline.filter((e) => /feria/i.test(e.title)).length;
  const escapadas = timeline.filter((e) =>
    /(escapada|vacaciones|granada|nerja|kampaoh)/i.test(e.title)
  ).length;
  const totalPhotos = timeline.reduce((acc, e) => {
    if (Array.isArray(e.photos)) return acc + e.photos.length;
    if (e.photo) return acc + 1;
    return acc;
  }, 0);

  return [
    { value: days, label: "días juntos" },
    { value: totalMoments, label: "momentazos" },
    { value: ferias, label: "ferias" },
    { value: escapadas, label: "escapadas" },
    { value: totalPhotos, label: "fotos guardadas" },
    { value: "∞", label: "razones para seguir" },
  ];
}

export default function Stats() {
  const stats = computeStats();

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nuestro año en números
      </motion.h2>
      <p className="text-center text-ink/60 mb-12">Un resumen de lo que llevamos vivido</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-rose-100 p-6 text-center"
          >
            <div className="font-display text-4xl md:text-5xl text-rose-600 tabular-nums">
              {s.value}
            </div>
            <div className="mt-2 uppercase tracking-widest text-xs text-ink/60">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
