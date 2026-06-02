import { useMemo } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { places } from "../data";

// Icono personalizado con emoji (en lugar del marcador azul de Leaflet)
function emojiIcon(emoji) {
  return L.divIcon({
    className: "emoji-marker",
    html: `<div class="marker-bubble"><span>${emoji}</span></div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 42],
    popupAnchor: [0, -38],
  });
}

export default function MapSection() {
  const positions = useMemo(() => places.map((p) => p.coords), []);
  const center = positions[0] || [37.5856, -4.6361];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Nuestros sitios
      </motion.h2>
      <p className="text-center text-ink/60 mb-10">
        Todos los rincones que hemos pisado juntos
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-xl border border-rose-100 bg-white"
      >
        <MapContainer
          center={center}
          zoom={8}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Polyline
            positions={positions}
            pathOptions={{ color: "#ef4368", weight: 3, opacity: 0.6, dashArray: "6 8" }}
          />

          {places.map((p, i) => (
            <Marker key={p.name + i} position={p.coords} icon={emojiIcon(p.emoji)}>
              <Popup>
                <strong>{p.name}</strong>
                <br />
                <span style={{ color: "#a31f40" }}>{p.note}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>

      <style>{`
        .marker-bubble {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          background: #fff;
          border: 2px solid #ef4368;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(239, 67, 104, 0.35);
          font-size: 20px;
        }
        .leaflet-container { font-family: inherit; }
      `}</style>
    </section>
  );
}
