const CACHE_NAME = 'travelore-cache-v1';
const STATIC_ASSETS = [
    '/',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png',
];

const API_CACHE_NAME = 'travelore-api-cache-v1';
const API_ROUTES = [
    '/api/metrics',
    '/api/content/metrics',
    '/api/revenue/breakdown',
    '/api/destinations/trending',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME && name !== API_CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // API routes - network first, then cache
    if (API_ROUTES.some((route) => url.pathname.startsWith(route))) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const clonedResponse = response.clone();
                    caches.open(API_CACHE_NAME).then((cache) => {
                        cache.put(request, clonedResponse);
                    });
                    return response;
                })
                .catch(() => {
                    return caches.match(request);
                })
        );
        return;
    }

    // Static assets - cache first, then network
    event.respondWith(
        caches.match(request).then((response) => {
            if (response) {
                return response;
            }

            return fetch(request).then((response) => {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                const clonedResponse = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, clonedResponse);
                });

                return response;
            });
        })
    );
}); 