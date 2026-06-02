import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lovedThings } from "../data";

export default function LovedThings() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % lovedThings.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Cosas que me encantan de ti
      </motion.h2>
      <p className="text-ink/60 mb-12">Solo unas pocas. La lista es infinita.</p>

      <div className="relative h-32 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
            exit={{    opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center font-hand text-3xl md:text-4xl text-rose-700 px-6"
          >
            “{lovedThings[index]}”
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {lovedThings.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Frase ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-rose-500" : "bg-rose-200 hover:bg-rose-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
