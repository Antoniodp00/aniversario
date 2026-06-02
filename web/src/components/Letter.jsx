import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import confetti from "canvas-confetti";
import { letter } from "../data";

function Typewriter({ text, speed = 28, start }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!start) return;
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);

  return <span>{shown}</span>;
}

export default function Letter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [opened, setOpened] = useState(false);

  return (
    <section ref={ref} className="py-24 px-6 max-w-3xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Para ti
      </motion.h2>

      {!opened ? (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            type="button"
            onClick={() => {
              setOpened(true);
              // Lluvia de confeti al abrir la carta 💗
              const duration = 2500;
              const end = Date.now() + duration;
              const colors = ["#ef4368", "#ff9fb2", "#a31f40", "#ffe4ea", "#ffffff"];
              (function frame() {
                confetti({ particleCount: 5, angle: 60,  spread: 55, origin: { x: 0 }, colors });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors });
                if (Date.now() < end) requestAnimationFrame(frame);
              })();
            }}
            className="group flex flex-col items-center gap-4 focus:outline-none"
          >
            <div className="text-7xl md:text-8xl group-hover:scale-110 transition-transform animate-floaty">
              💌
            </div>
            <span className="font-hand text-2xl text-rose-600 group-hover:text-rose-700">
              Ábreme
            </span>
          </button>
        </motion.div>
      ) : (
        <motion.article
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-rose-100 relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl">💗</div>

          <p className="font-hand text-3xl text-rose-700 mb-6">
            <Typewriter text={letter.greeting} start={opened} speed={60} />
          </p>

          {letter.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-lg leading-relaxed text-ink/80 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.6, duration: 0.6 }}
            >
              {p}
            </motion.p>
          ))}

          <motion.p
            className="font-hand text-2xl text-rose-600 text-right mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + letter.paragraphs.length * 0.6 + 0.3 }}
          >
            {letter.signature}
          </motion.p>
        </motion.article>
      )}
    </section>
  );
}
