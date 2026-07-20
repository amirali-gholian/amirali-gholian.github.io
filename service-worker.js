// =====================================================
// Amirali Gholian PWA Service Worker
// Production Version 3.0.0
// Optimized for Supabase + PWA
// =====================================================

const VERSION = "3.0.0";

const STATIC_CACHE = `static-${VERSION}`;
const DYNAMIC_CACHE = `dynamic-${VERSION}`;
const IMAGE_CACHE = `images-${VERSION}`;

const OFFLINE_PAGE = "/offline.html";

const STATIC_FILES = [
    "/",
    "/index.html",
    "/offline.html",
    "/manifest.json",
    "/logo.webp",
    "/logo_2.png"
];

// ============================================
// Install
// ============================================

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(STATIC_CACHE)

            .then(cache => cache.addAll(STATIC_FILES))

    );

});

// ============================================
// Activate
// ============================================

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

// ============================================
// Helper
// ============================================

function isSupabase(url) {

    return (

        url.hostname.includes("supabase.co") ||

        url.pathname.startsWith("/rest/v1") ||

        url.pathname.startsWith("/auth/v1") ||

        url.pathname.startsWith("/storage/v1") ||

        url.pathname.startsWith("/functions/v1")

    );

}

function isStatic(request) {

    return (

        request.destination === "script" ||

        request.destination === "style" ||

        request.destination === "font"

    );

}

// ============================================
// Fetch
// ============================================

self.addEventListener("fetch", event => {

    const request = event.request;

    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // Never cache Supabase

    if (isSupabase(url)) {

        return;

    }
        // ============================================
    // HTML
    // Network First
    // ============================================

    if (request.mode === "navigate") {

        event.respondWith(

            (async () => {

                try {

                    const response = await fetch(request);

                    const cache = await caches.open(DYNAMIC_CACHE);

                    cache.put(request, response.clone());

                    return response;

                } catch (error) {

                    const cached = await caches.match(request);

                    if (cached) return cached;

                    return caches.match(OFFLINE_PAGE);

                }

            })()

        );

        return;

    }

    // ============================================
    // Images
    // Cache First
    // ============================================

    if (request.destination === "image") {

        event.respondWith(

            (async () => {

                const cached = await caches.match(request);

                if (cached) {

                    return cached;

                }

                try {

                    const response = await fetch(request);

                    const cache = await caches.open(IMAGE_CACHE);

                    cache.put(request, response.clone());

                    return response;

                } catch {

                    return caches.match("/logo.webp");

                }

            })()

        );

        return;

    }

    // ============================================
    // JS / CSS / Fonts
    // Stale While Revalidate
    // ============================================

    if (isStatic(request)) {

        event.respondWith(

            (async () => {

                const cache = await caches.open(DYNAMIC_CACHE);

                const cached = await cache.match(request);

                const networkFetch = fetch(request)

                    .then(response => {

                        if (response.ok) {

                            cache.put(request, response.clone());

                        }

                        return response;

                    })

                    .catch(() => cached);

                return cached || networkFetch;

            })()

        );

        return;

    }
        // ============================================
    // Other Requests
    // Network First
    // ============================================

    event.respondWith(

        (async () => {

            try {

                const response = await fetch(request);

                if (response.ok) {

                    const cache = await caches.open(DYNAMIC_CACHE);

                    cache.put(request, response.clone());

                }

                return response;

            } catch {

                const cached = await caches.match(request);

                if (cached) {

                    return cached;

                }

                return new Response("Offline", {

                    status: 503,

                    statusText: "Offline"

                });

            }

        })()

    );

});

// ============================================
// Message
// ============================================

self.addEventListener("message", event => {

    if (event.data === "skipWaiting") {

        self.skipWaiting();

    }

    if (event.data === "clearCache") {

        event.waitUntil(

            caches.keys().then(keys =>

                Promise.all(

                    keys.map(key => caches.delete(key))

                )

            )

        );

    }

});

// ============================================
// Background Sync
// ============================================

self.addEventListener("sync", event => {

    if (event.tag === "sync-data") {

        event.waitUntil(

            Promise.resolve()

        );

    }

});
// ============================================
// Push Notifications
// ============================================

self.addEventListener("push", event => {

    if (!event.data) return;

    const data = event.data.json();

    const options = {

        body: data.body || "",

        icon: "/logo_2.png",

        badge: "/logo_2.png",

        vibrate: [200, 100, 200],

        requireInteraction: false,

        renotify: true,

        data: data.url || "/"

    };

    event.waitUntil(

        self.registration.showNotification(

            data.title || "Notification",

            options

        )

    );

});

// ============================================
// Notification Click
// ============================================

self.addEventListener("notificationclick", event => {

    event.notification.close();

    event.waitUntil(

        clients.matchAll({

            type: "window",

            includeUncontrolled: true

        }).then(windowClients => {

            for (const client of windowClients) {

                if ("focus" in client) {

                    client.focus();

                    if (event.notification.data) {

                        client.navigate(event.notification.data);

                    }

                    return;

                }

            }

            if (clients.openWindow) {

                return clients.openWindow(

                    event.notification.data || "/"

                );

            }

        })

    );

});

// ============================================
// Periodic Cleanup
// ============================================

self.addEventListener("periodicsync", event => {

    if (event.tag === "cleanup-cache") {

        event.waitUntil(

            caches.keys().then(keys =>

                Promise.all(

                    keys.map(key => {

                        if (

                            key !== STATIC_CACHE &&

                            key !== DYNAMIC_CACHE &&

                            key !== IMAGE_CACHE

                        ) {

                            return caches.delete(key);

                        }

                    })

                )

            )

        );

    }

});

// ============================================
// End of File
// ============================================
