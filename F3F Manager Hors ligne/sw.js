// --- CONFIGURATION ---
// Changez ce numéro pour forcer une mise à jour chez les utilisateurs
const CACHE_NAME = 'f3f-manager-v5.7'; 

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icon.png',
  './manifest.json'
];

// --- INSTALLATION (Mise en cache initiale) ---
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force le nouveau SW à prendre le relais immédiatement
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// --- ACTIVATION (Nettoyage des vieilles versions) ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Prend le contrôle de la page immédiatement
});

// --- INTERCEPTION RÉSEAU (Offline first) ---
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si trouvé dans le cache, on le rend, sinon on va sur internet
      return response || fetch(event.request);
    })
  );
});