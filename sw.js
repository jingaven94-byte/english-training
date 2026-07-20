// Simple service worker for offline caching
const CACHE_NAME = 'eng-v1';
const urlsToCache = [
  '/',
  'index.html',
  'css/style.css',
  'data/courses.js',
  'js/app.js',
  'js/navigation.js',
  'js/today.js',
  'js/plan.js',
  'js/practice.js',
  'js/stats.js',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
