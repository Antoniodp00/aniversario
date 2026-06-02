import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quiz } from "../data";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[index];

  function choose(i) {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.correct) setScore((s) => s + 1);

    setTimeout(() => {
      if (index + 1 >= quiz.length) {
        setDone(true);
      } else {
        setIndex((n) => n + 1);
        setPicked(null);
      }
    }, 1100);
  }

  function reset() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ¿Cuánto me conoces?
      </motion.h2>
      <p className="text-center text-ink/60 mb-10">Un mini-quiz nuestro</p>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 border border-rose-100"
          >
            <div className="text-xs uppercase tracking-widest text-rose-500 mb-2">
              Pregunta {index + 1} de {quiz.length}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-rose-700 mb-6">
              {q.question}
            </h3>

            <div className="grid gap-3">
              {q.options.map((opt, i) => {
                const isPicked = picked === i;
                const isCorrect = i === q.correct;
                const reveal = picked !== null;
                let cls =
                  "w-full text-left px-5 py-3 rounded-xl border transition focus:outline-none ";
                if (!reveal) {
                  cls += "border-rose-100 hover:border-rose-400 hover:bg-rose-50";
                } else if (isCorrect) {
                  cls += "border-green-400 bg-green-50 text-green-800";
                } else if (isPicked) {
                  cls += "border-rose-400 bg-rose-50 text-rose-700";
                } else {
                  cls += "border-rose-100 opacity-60";
                }
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={reveal}
                    onClick={() => choose(i)}
                    className={cls}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-rose-100"
          >
            <div className="text-6xl mb-3">{score === quiz.length ? "🏆" : "💖"}</div>
            <h3 className="font-display text-3xl text-rose-700 mb-2">
              {score}/{quiz.length}
            </h3>
            <p className="text-ink/70 mb-6">
              {score === quiz.length
                ? "¡Perfecto! Sabía que te acordabas de todo."
                : score >= quiz.length / 2
                ? "Casi casi… te quiero igual."
                : "No pasa nada, te lo cuento otra vez encantado."}
            </p>
            <button
              type="button"
              onClick={reset}
              className="px-5 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition"
            >
              Volver a intentarlo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
