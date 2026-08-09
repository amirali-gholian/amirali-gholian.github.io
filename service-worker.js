// ===============================
// Amirali Gholian PWA Service Worker
// Version 1.0.0
// ===============================

const VERSION = "1.0.2";

const STATIC_CACHE = `static-${VERSION}`;
const DYNAMIC_CACHE = `dynamic-${VERSION}`;
const IMAGE_CACHE = `images-${VERSION}`;

const OFFLINE_PAGE = "/offline.html";

// فقط این صفحه‌ها کش می‌شن
const STATIC_FILES = [
    "/",
    "/index.html",
    "/doc.html",
    "/python.html",
    "/linux.html",
    "/ai.html",
    "/netsec.html",
    "/style.css",
    "/manifest.json",
    "/offline.html",
    "/logo_2.png",
    "/logo.webp"
];

// این صفحه‌ها اصلاً نباید کش بشن (لاگین، پروفایل، امتحان‌ها)
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

    return NO_CACHE_PATHS.some(p => path === p || path.endsWith(p));

}

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

        caches.keys().then(keys => {

            return Promise.all(

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

        })

    );

    self.clients.claim();

});

// ===============================
// Fetch
// ===============================

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    const request = event.request;

    const accept = request.headers.get("accept") || "";

    // صفحه‌های حساس (لاگین/پروفایل/امتحان) - فقط از شبکه، بدون کش
    if (isNoCachePath(request.url)) {

        event.respondWith(

            fetch(request, { cache: "no-store" })

        );

        return;

    }

    // HTML Pages
    if (accept.includes("text/html")) {

        event.respondWith(

            fetch(request)

                .then(response => {

                    const clone = response.clone();

                    caches.open(DYNAMIC_CACHE)

                        .then(cache => cache.put(request, clone));

                    return response;

                })

                .catch(() =>

                    caches.match(request)

                        .then(res => res || caches.match(OFFLINE_PAGE))

                )

        );

        return;

    }

    // Images
    if (request.destination === "image") {

        event.respondWith(

            caches.match(request)

                .then(cache => {

                    if (cache) return cache;

                    return fetch(request)

                        .then(response => {

                            const clone = response.clone();

                            caches.open(IMAGE_CACHE)

                                .then(cache => cache.put(request, clone));

                            return response;

                        });

                })

        );

        return;

    }

    // CSS JS Fonts
    event.respondWith(

        caches.match(request)

            .then(cache => {

                if (cache) return cache;

                return fetch(request)

                    .then(response => {

                        const clone = response.clone();

                        caches.open(DYNAMIC_CACHE)

                            .then(cache => cache.put(request, clone));

                        return response;

                    });

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
// Background Sync (Optional)
// ===============================

self.addEventListener("sync", event => {

    if (event.tag === "sync-data") {

        event.waitUntil(

            Promise.resolve()

        );

    }

});

// ===============================
// Push Notifications (Future)
// ===============================

self.addEventListener("push", event => {

    if (!event.data) return;

    const data = event.data.json();

    event.waitUntil(

        self.registration.showNotification(data.title, {

            body: data.body,

            icon: "/logo_2.png",

            badge: "/logo_2.png"

        })

    );

});
