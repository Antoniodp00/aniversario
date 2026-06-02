import { useEffect, useRef, useState } from "react";

/*
  Reproductor de música flotante.
  Para usar vuestra canción:
    1. Mete el archivo MP3 en /public/music.mp3
       (o cambia src abajo si quieres otro nombre / formato)
    2. Asegúrate de tener derechos para usarla — si es de Spotify/YouTube,
       puedes descargar el audio con herramientas legales o usar un MP3 propio.

  Si no existe el archivo, el botón se oculta sin romper nada.
*/
const TRACK_SRC = "/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  // Comprobar si el archivo existe
  useEffect(() => {
    fetch(TRACK_SRC, { method: "HEAD" })
      .then((r) => setAvailable(r.ok))
      .catch(() => setAvailable(false));
  }, []);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  }

  if (!available) return null;

  return (
    <>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-rose-200 hover:bg-rose-50 hover:scale-105 transition flex items-center justify-center text-2xl"
      >
        <span className={playing ? "animate-pulse" : ""}>{playing ? "🔊" : "🎵"}</span>
      </button>
    </>
  );
}
