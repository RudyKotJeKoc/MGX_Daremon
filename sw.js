// ===================================================================================
// DAREMON Radio ETS - Service Worker v11
//
// Strategie:
// - Zwiększono wersję cache do v9, aby wymusić aktualizację wszystkich zasobów,
//   w tym nowego pliku styles.css.
// - Dodano lokalne ikony do pamięci podręcznej dla pełnej funkcjonalności offline.
// ===================================================================================

const CACHE_NAME = 'daremon-radio-v11'; // WAŻNE: Zmiana wersji cache

// Basis app-resources (App Shell) z dodanymi ikonami i nowymi zasobami
const APP_SHELL_ASSETS = [
    './',
    './index.html',
    './app.js',
    './polls.html',
    './vso-calculator.html',
    './polls-page.js',
    './polls.css',
    './poll-system.js',
    './config.js',
    './styles.css',
    './manifest.json',
    './tracks.json',
    './playlist.json',
    './mottos.json',
    './locales/nl.json',
    './locales/pl.json',
    './locales/en.json',
    './assets/styles-ERJDJl1l.css',
    './icons/icon-192.svg',
    './icons/icon-512.svg',
    '/images/favicon.jpg'
];

self.addEventListener('install', e => {
    console.log('[Service Worker] Instalacja nowej wersji v10...');
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] Caching van basis app-resources.');
            return cache.addAll(APP_SHELL_ASSETS);
        }).catch(err => {
            console.error('[Service Worker] Fout podczas instalacji:', err);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    console.log('[Service Worker] Aktywacja v10...');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Usuwanie starego cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);

    // Stale-while-revalidate dla playlisty i tłumaczeń oraz motto
    if (url.pathname.endsWith('playlist.json') || url.pathname.endsWith('tracks.json') || url.pathname.endsWith('mottos.json') || url.pathname.includes('/locales/')) {
        e.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(e.request).then(cachedResponse => {
                    const fetchPromise = fetch(e.request).then(networkResponse => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    }).catch(err => {
                        console.warn('[Service Worker] Błąd sieci, używam cache dla:', e.request.url, err);
                        return cachedResponse; // Zwróć z cache jeśli sieć zawiedzie
                    });
                    return cachedResponse || fetchPromise;
                });
            })
        );
        return;
    }

    // Cache first, then network dla audio
    if (url.pathname.startsWith('/music/')) {
        e.respondWith(
            caches.match(e.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(e.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // Cache first dla reszty zasobów (app shell)
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request).catch(err => {
                console.error('[Service Worker] Błąd fetch dla:', e.request.url, err);
            });
        })
    );
});

// Error event handler
self.addEventListener('error', (event) => {
    console.error('[Service Worker] Error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
    console.error('[Service Worker] Unhandled Promise Rejection:', event.reason);
});

// Allow page to trigger immediate activation of a waiting SW
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});