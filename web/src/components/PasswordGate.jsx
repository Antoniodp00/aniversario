import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STORAGE_KEY = "aniversario-unlocked";

/*
  Página protegida con una palabra/fecha.
  Cambia PASSWORD por algo vuestro (apodo, fecha, palabra clave).
  No es seguridad real — solo evita que pase de largo si comparte el link.
*/
const PASSWORD = "monita";   // ← personalízala

const HINTS = [
  "Te llamo así cuando estamos solos…",
  "Pista: es como te llamo yo",
];

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {}
  }, []);

  function submit(e) {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      setUnlocked(true);
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setHintIndex((i) => Math.min(i + 1, HINTS.length - 1));
    }
  }

  if (unlocked) return children;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-rose-100"
      >
        <div className="text-6xl mb-4 animate-beat">💌</div>
        <h1 className="font-display text-3xl text-rose-700 mb-2">Para ti</h1>
        <p className="text-ink/60 mb-6">Introduce la palabra mágica para entrar</p>

        <motion.form
          onSubmit={submit}
          animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Tu palabra…"
            autoFocus
            className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:border-rose-500 outline-none text-center text-lg font-hand"
          />
          <button
            type="submit"
            className="mt-4 w-full px-5 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium transition"
          >
            Entrar
          </button>
        </motion.form>

        <p className="mt-4 text-sm text-ink/50 italic">
          {HINTS[hintIndex]}
        </p>
      </motion.div>
    </main>
  );
}
