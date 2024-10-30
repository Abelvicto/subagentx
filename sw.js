self.addEventListener('install', (event) => {
<<<<<<< HEAD
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll([
        '/',                    // Cache root URL
        '/offline.html',        // Cache offline page
        '/icons/icon-192x192.png',  // Cache icon
        '/icons/icon-512x512.png',
        '/offline-logo.png'     // Cache offline logo
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // If offline, return offline page
        return caches.match('/offline.html');
      });
    })
  );
});
=======
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
  
>>>>>>> 6a8f04c2dc8c210907763f03450fdc0f2f6b7442
