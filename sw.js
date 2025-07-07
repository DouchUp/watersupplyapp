const CACHE_NAME = 'water-app-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/loader.css',
  '/login.js',
  '/bills.html',
  '/history.html',
  '/login.html',
  'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css',
  'https://static.vecteezy.com/system/resources/previews/017/287/470/non_2x/glass-of-water-color-icon-drinking-glass-silhouette-pictogram-glassful-of-clean-water-colorful-icon-illustration-vector.jpg',
  'https://i.ibb.co/zhMc28N4/bottle.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});