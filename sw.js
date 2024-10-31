self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll([
        '/Index.html',                         // Cache root URL
        '/offline.html',             // Cache offline page
        '/icons/icon-192x192.png',   // Cache icons
        '/icons/icon-512x512.png',
        '/offline-logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached content or fetch from network
      return response || fetch(event.request).catch(() => {
        // If offline, return offline page
        return caches.match('/offline.html');
      });
    })
  );
});
