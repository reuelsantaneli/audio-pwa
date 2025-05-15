self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("audio-pwa").then(cache => {
      return cache.addAll(["index.html", "manifest.json", "style.css"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
