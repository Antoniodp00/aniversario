import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { couple } from "../data";
import Petals from "./Petals";

function useTimeTogether(startISO) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const start = new Date(startISO).getTime();
  const diff = Math.max(0, now - start);
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours   = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
}

function Cell({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[72px] md:min-w-[96px]">
      <div className="font-display text-4xl md:text-6xl text-rose-600 tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="uppercase tracking-widest text-xs md:text-sm text-ink/60 mt-1">
        {label}
      </div>
    </div>
  );
}

function getInitial(name) {
  return (name || "").trim().charAt(0).toUpperCase() || "♥";
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useTimeTogether(couple.startDate);

  // Easter egg: pulsa el corazón 7 veces
  const [hits, setHits] = useState(0);
  const [secret, setSecret] = useState(false);

  function tapHeart() {
    setHits((h) => {
      const n = h + 1;
      if (n >= 7 && !secret) {
        setSecret(true);
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.4 },
          colors: ["#ef4368", "#ff9fb2", "#a31f40", "#ffe4ea"],
        });
        setTimeout(() => setSecret(false), 5000);
      }
      return n;
    });
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <Petals />

      {/* Monograma de iniciales */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 font-display text-rose-300">
          <span className="text-3xl">{getInitial(couple.name1)}</span>
          <span className="text-2xl">·</span>
          <span className="text-3xl">{getInitial(couple.name2)}</span>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={tapHeart}
        aria-label="Pulsa el corazón"
        className="text-6xl md:text-7xl mb-6 animate-beat select-none focus:outline-none cursor-pointer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileTap={{ scale: 1.3 }}
      >
        ❤️
      </motion.button>

      <motion.h1
        className="font-display text-5xl md:text-7xl text-rose-700 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {couple.name1} <span className="font-hand text-rose-500">&amp;</span> {couple.name2}
      </motion.h1>

      <motion.p
        className="font-hand text-2xl md:text-3xl text-rose-500 mt-2 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Un año juntos
      </motion.p>

      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 px-4 py-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Cell value={days} label="días" />
        <Cell value={hours} label="horas" />
        <Cell value={minutes} label="min" />
        <Cell value={seconds} label="seg" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-ink/40 text-sm animate-floaty z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓ desliza para descubrir nuestra historia
      </motion.div>

      {/* Mensaje secreto del easter egg */}
      <AnimatePresence>
        {secret && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-24 z-20 px-6 py-3 rounded-full bg-rose-500 text-white shadow-2xl font-hand text-2xl"
          >
            ¡Te quiero! 💗
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
