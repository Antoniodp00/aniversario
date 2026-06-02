import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { futureAdventures } from "../data";

const STORAGE_KEY = "aniversario-future";

export default function FutureAdventures() {
  const [done, setDone] = useState({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
  }, []);

  function toggle(id) {
    setDone((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  const total = futureAdventures.length;
  const completed = futureAdventures.filter((a) => done[a.id]).length;
  const pct = Math.round((completed / total) * 100);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Próximas aventuras
      </motion.h2>
      <p className="text-center text-ink/60 mb-8">
        Cosas que quiero vivir contigo · pulsa para marcar
      </p>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-rose-100">
        <div className="mb-5">
          <div className="flex items-center justify-between text-sm text-ink/60 mb-2">
            <span>{completed} de {total} completadas</span>
            <span className="font-medium text-rose-600">{pct}%</span>
          </div>
          <div className="h-2 bg-rose-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-400 to-rose-600"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>

        <ul className="space-y-2">
          {futureAdventures.map((a) => {
            const checked = !!done[a.id];
            return (
              <li key={a.id}>
                <button
                  type="button"
                  onClick={() => toggle(a.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition ${
                    checked
                      ? "bg-rose-50 border-rose-300"
                      : "bg-white border-rose-100 hover:border-rose-300"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                      checked
                        ? "bg-rose-500 border-rose-500 text-white"
                        : "border-rose-300"
                    }`}
                  >
                    {checked && "✓"}
                  </span>
                  <span
                    className={`text-base ${
                      checked ? "line-through text-ink/50" : "text-ink"
                    }`}
                  >
                    {a.text}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
