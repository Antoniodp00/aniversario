import PasswordGate from "./components/PasswordGate";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import MapSection from "./components/MapSection";
import LovedThings from "./components/LovedThings";
import Quiz from "./components/Quiz";
import FutureAdventures from "./components/FutureAdventures";
import Letter from "./components/Letter";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <PasswordGate>
      <main>
        <Hero />
        <Stats />
        <Timeline />
        <MapSection />
        <LovedThings />
        <Quiz />
        <FutureAdventures />
        <Letter />
        <footer className="text-center py-10 text-ink/40 text-sm">
          Hecho con <span className="text-rose-500">♥</span> para ti
        </footer>
        <MusicPlayer />
      </main>
    </PasswordGate>
  );
}
