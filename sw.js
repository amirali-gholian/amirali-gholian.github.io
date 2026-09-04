// ======================================================
// Amirali Gholian PWA Service Worker
// Version 3.2.0
// ======================================================

const VERSION = "3.2.0";

const STATIC_CACHE = `static-${VERSION}`;
const DYNAMIC_CACHE = `dynamic-${VERSION}`;
const IMAGE_CACHE = `images-${VERSION}`;

const OFFLINE_PAGE = "/offline.html";

// ======================================================
// Static files
// ======================================================

const STATIC_FILES = [
    "/style.css",
    "/manifest.json",
    "/offline.html",
    "/404.html",
    "/logo_2.png",
    "/logo.webp"
];

// ======================================================
// Paths that must NEVER be cached
// ======================================================

const NO_CACHE_PATHS = [
    "/login/login.html",
    "/profile.html",
    "/exam.html",
    "/exam02.html",
    "/linux02.html",
    "/linux-questions.js",
    "/python02.html",
    "/questions.js"
];

function isNoCachePath(url) {
    const path = new URL(url).pathname;

    return NO_CACHE_PATHS.some(pathname =>
        path === pathname || path.endsWith(pathname)
    );
}

// ======================================================
// API endpoints that must NEVER be cached
// ======================================================

const API_NO_CACHE_PATTERNS = [
    "/rest/v1/",
    "/auth/v1/",
    "/storage/v1/object/sign",
    "/functions/v1/"
];

function isApiPath(url) {
    const path = new URL(url).pathname;

    return API_NO_CACHE_PATTERNS.some(pattern =>
        path.includes(pattern)
    );
}

// ======================================================
// Check same-origin
// ======================================================

function isSameOrigin(url) {
    try {
        return new URL(url).origin === self.location.origin;
    } catch {
        return false;
    }
}

// ======================================================
// Check successful response
// ======================================================

function isValidResponse(response) {
    return response &&
           response.status >= 200 &&
           response.status < 400;
}

// ======================================================
// INSTALL
// ======================================================

self.addEventListener("install", event => {

    console.log(`[SW ${VERSION}] Installing...`);

    event.waitUntil(

        caches.open(STATIC_CACHE)

            .then(async cache => {

                for (const url of STATIC_FILES) {

                    try {

                        const response = await fetch(url, {
                            cache: "no-cache"
                        });

                        if (!isValidResponse(response)) {
                            console.warn(`[SW ${VERSION}] Failed to cache:`, url, response.status);
                            continue;
                        }

                        await cache.put(url, response);

                        console.log(`[SW ${VERSION}] Cached:`, url);

                    } catch (error) {
                        console.warn(`[SW ${VERSION}] Cache error:`, url, error);
                    }
                }

            })

    );

    // Activate new Service Worker immediately
    self.skipWaiting();
});

// ======================================================
// ACTIVATE
// ======================================================

self.addEventListener("activate", event => {

    console.log(`[SW ${VERSION}] Activating...`);

    event.waitUntil(

        caches.keys()

            .then(cacheNames => {

                return Promise.all(

                    cacheNames.map(cacheName => {

                        const isCurrentCache =
                            cacheName === STATIC_CACHE ||
                            cacheName === DYNAMIC_CACHE ||
                            cacheName === IMAGE_CACHE;

                        if (!isCurrentCache) {
                            console.log(`[SW ${VERSION}] Deleting old cache:`, cacheName);
                            return caches.delete(cacheName);
                        }

                        return Promise.resolve();
                    })

                );

            })

            .then(() => {
                console.log(`[SW ${VERSION}] Activated`);
                return self.clients.claim();
            })

    );
});

// ======================================================
// FETCH
// ======================================================

self.addEventListener("fetch", event => {

    const request = event.request;

    // Only GET
    if (request.method !== "GET") {
        return;
    }

    // Ignore non-http requests
    if (!request.url.startsWith("http")) {
        return;
    }

    // Ignore cross-origin requests
    // This prevents the SW from interfering with
    // Supabase, jsDelivr, Cloudflare Insights, etc.
    if (!isSameOrigin(request.url)) {
        return;
    }

    // ==================================================
    // NO-CACHE PATHS
    // ==================================================

    if (isNoCachePath(request.url)) {

        event.respondWith(

            fetch(request, {
                cache: "no-store"
            })

            .catch(() => {

                if (
                    request.destination === "document" ||
                    request.headers.get("accept")?.includes("text/html")
                ) {
                    return caches.match(OFFLINE_PAGE);
                }

                return Response.error();

            })

        );

        return;
    }

    // ==================================================
    // API
    // ==================================================

    if (isApiPath(request.url)) {

        event.respondWith(
            fetch(request, {
                cache: "no-store"
            })
        );

        return;
    }

    // ==================================================
    // HTML / NAVIGATION
    // Network First
    // ==================================================

    if (
        request.mode === "navigate" ||
        request.destination === "document"
    ) {

        event.respondWith(

            fetch(request, {
                cache: "no-cache"
            })

            .then(response => {

                if (!isValidResponse(response)) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const clone = response.clone();

                caches.open(DYNAMIC_CACHE)
                    .then(cache => {
                        cache.put(request, clone).catch(error => {
                            console.warn(`[SW ${VERSION}] HTML cache error:`, error);
                        });
                    });

                return response;

            })

            .catch(() => {

                return caches.match(request)
                    .then(cachedResponse => {

                        if (cachedResponse) {
                            return cachedResponse;
                        }

                        return caches.match(OFFLINE_PAGE);

                    });

            })

        );

        return;
    }

    // ==================================================
    // IMAGES
    // Cache First
    // ==================================================

    if (request.destination === "image") {

        event.respondWith(

            caches.match(request)

                .then(cachedResponse => {

                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    return fetch(request)

                        .then(response => {

                            if (!isValidResponse(response)) {
                                return response;
                            }

                            const clone = response.clone();

                            caches.open(IMAGE_CACHE)
                                .then(cache => {
                                    cache.put(request, clone).catch(error => {
                                        console.warn(`[SW ${VERSION}] Image cache error:`, error);
                                    });
                                });

                            return response;

                        });

                })

        );

        return;
    }

    // ==================================================
    // CSS / JS / Fonts / Other static resources
    // Cache First
    // ==================================================

    event.respondWith(

        caches.match(request)

            .then(cachedResponse => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(request)

                    .then(response => {

                        if (!isValidResponse(response)) {
                            return response;
                        }

                        const clone = response.clone();

                        caches.open(DYNAMIC_CACHE)
                            .then(cache => {
                                cache.put(request, clone).catch(error => {
                                    console.warn(`[SW ${VERSION}] Resource cache error:`, error);
                                });
                            });

                        return response;

                    });

            })

    );

});

// ======================================================
// MESSAGE
// ======================================================

self.addEventListener("message", event => {

    if (!event.data) {
        return;
    }

    if (event.data === "skipWaiting") {
        console.log(`[SW ${VERSION}] skipWaiting requested`);
        self.skipWaiting();
    }

});

// ======================================================
// Background Sync
// ======================================================

self.addEventListener("sync", event => {

    if (event.tag === "sync-data") {
        event.waitUntil(Promise.resolve());
    }

});

// ======================================================
// Push Notifications
// ======================================================

self.addEventListener("push", event => {

    if (!event.data) {
        return;
    }

    try {

        const data = event.data.json();

        event.waitUntil(

            self.registration.showNotification(
                data.title || "Amirali Gholian",
                {
                    body: data.body || "",
                    icon: "/logo_2.png",
                    badge: "/logo_2.png"
                }
            )

        );

    } catch (error) {
        console.error(`[SW ${VERSION}] Push notification error:`, error);
    }

});
