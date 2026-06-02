// Service worker mínimo para hacer la PWA instalable.
// No cachea nada agresivamente; solo provee offline básico de la página inicial.
const CACHE = "aniversario-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(["./", "./index.html"]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;

  e.respondWith(
    fetch(request)
      .then((res) => {
        // Solo cachea respuestas válidas y completas, evitando 206/Partial Content
        if (res.ok && res.status === 200 && res.type === "basic") {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
        }
        return res;
      })
      .catch(() => caches.match(request).then((r) => r || caches.match("./")))
  );
});
