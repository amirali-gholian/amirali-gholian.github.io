// ===============================
// Amirali Gholian PWA Service Worker
// Version 2.0.0
// ===============================

const VERSION = "2.0.0";

const STATIC_CACHE = `static-${VERSION}`;
const DYNAMIC_CACHE = `dynamic-${VERSION}`;
const IMAGE_CACHE = `images-${VERSION}`;

const OFFLINE_PAGE = "/offline.html";

const STATIC_FILES = [
    "/",
    "/index.html",
    "/manifest.json",
    OFFLINE_PAGE,
    "/logo_2.png",
    "/logo.webp"
];

// ===============================
// Install
// ===============================

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(STATIC_CACHE)

            .then(cache => cache.addAll(STATIC_FILES))

    );

});

// ===============================
// Activate
// ===============================

self.addEventListener("activate", event => {

    event.waitUntil(

        (async () => {

            const keys = await caches.keys();

            await Promise.all(

                keys.map(key => {

                    if (

                        key !== STATIC_CACHE &&

                        key !== DYNAMIC_CACHE &&

                        key !== IMAGE_CACHE

                    ) {

                        return caches.delete(key);

                    }

                })

            );

            await self.clients.claim();

        })()

    );

});

// ===============================
// Fetch
// ===============================

self.addEventListener("fetch", event => {

    const request = event.request;

    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // =====================================
    // Never cache Supabase
    // =====================================

    if (

        url.hostname.includes("supabase.co") ||

        url.pathname.startsWith("/rest/v1") ||

        url.pathname.startsWith("/auth/v1") ||

        url.pathname.startsWith("/storage/v1")

    ) {

        return;

    }

    // =====================================
    // HTML - Network First
    // =====================================

    if (request.mode === "navigate") {

        event.respondWith(

            fetch(request)

                .then(async response => {

                    const cache = await caches.open(DYNAMIC_CACHE);

                    cache.put(request, response.clone());

                    return response;

                })

                .catch(async () => {

                    return (

                        await caches.match(request)

                    ) || (

                        await caches.match(OFFLINE_PAGE)

                    );

                })

        );

        return;

    }

    // =====================================
    // Images - Cache First
    // =====================================

    if (request.destination === "image") {

        event.respondWith(

            caches.match(request)

                .then(async cached => {

                    if (cached) return cached;

                    const response = await fetch(request);

                    const cache = await caches.open(IMAGE_CACHE);

                    cache.put(request, response.clone());

                    return response;

                })

        );

        return;

    }
    // =====================================
    // CSS / JS / Fonts
    // Stale While Revalidate
    // =====================================

    event.respondWith(

        caches.match(request)

            .then(async cached => {

                const networkFetch = fetch(request)

                    .then(async response => {

                        if (

                            response &&

                            response.ok

                        ) {

                            const cache = await caches.open(DYNAMIC_CACHE);

                            cache.put(request, response.clone());

                        }

                        return response;

                    })

                    .catch(() => cached);

                return cached || networkFetch;

            })

    );

});

// ===============================
// Message
// ===============================

self.addEventListener("message", event => {

    if (event.data === "skipWaiting") {

        self.skipWaiting();

    }

});

// ===============================
// Background Sync
// ===============================

self.addEventListener("sync", event => {

    if (event.tag === "sync-data") {

        event.waitUntil(

            Promise.resolve()

        );

    }

});

// ===============================
// Push Notifications
// ===============================

self.addEventListener("push", event => {

    if (!event.data) return;

    const data = event.data.json();

    event.waitUntil(

        self.registration.showNotification(

            data.title,

            {

                body: data.body,

                icon: "/logo_2.png",

                badge: "/logo_2.png",

                vibrate: [200, 100, 200],

                renotify: true,

                requireInteraction: false

            }

        )

    );

});
