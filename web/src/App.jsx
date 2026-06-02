import PasswordGate from "./components/PasswordGate";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import MapSection from "./components/MapSection";
import Passport from "./components/Passport";
import LovedThings from "./components/LovedThings";
import PhotoWall from "./components/PhotoWall";
import FutureAdventures from "./components/FutureAdventures";
import Letter from "./components/Letter";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <PasswordGate>
      <main>
        <Hero />
        <Timeline />
        <MapSection />
        <Passport />
        <LovedThings />
        <PhotoWall />
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
