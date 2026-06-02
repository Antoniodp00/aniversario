import { useMemo } from "react";

// Lluvia sutil de pétalos/corazones flotantes sobre el Hero.
// Pure CSS animations — sin coste de JS.
export default function Petals({ count = 18 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 10,
      size: 12 + Math.random() * 18,
      emoji: Math.random() > 0.5 ? "🌸" : "💗",
      drift: (Math.random() - 0.5) * 100,
    }));
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal absolute top-[-10%] opacity-70"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift"]: `${p.drift}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}

      <style>{`
        .petal {
          animation: petal-fall linear infinite;
          will-change: transform;
        }
        @keyframes petal-fall {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.8; }
          100% {
            transform: translate3d(var(--drift, 0), 110vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
