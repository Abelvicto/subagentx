self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('app-cache').then((cache) => {
        return cache.addAll([
          'https://script.google.com/macros/s/AKfycbwRIWG9LIPPTPH5c-3IcO5RLXWaP2T7BHBqtWVcBFuEFa25Y--UHFrClbA4CV05h2HJcA/exec',  // Your web app URL
          '/offline.html',  // Cache your offline page
          '/icons/icon-192x192.png',  // Cache icon
          '/icons/icon-512x512.png',
          '/offline-logo.png'  // Cache offline logo
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
  
