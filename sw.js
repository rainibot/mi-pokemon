self.addEventListener('fetch', (event) => {
  // Permite que la app cargue recursos normalmente
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});