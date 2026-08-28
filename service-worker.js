// ===============================
// Amirali Gholian PWA Service Worker
// Version 2.0.0
// ===============================

const VERSION = "2.0.0";

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
    "/network_lab.html",
    "/project.html",
    "/manifest.json",
    "/offline.html",
    "/404.html",
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

// درخواست‌های API به Supabase (دیتای داینامیک: امتحان، پروفایل، فایل کاربر و ...)
// این‌ها هیچ‌وقت نباید کش بشن، چون هر بار باید تازه از سرور بیان
const API_NO_CACHE_PATTERNS = [
    "/rest/v1/",
    "/auth/v1/",
    "/storage/v1/object/sign",  // لینک‌های امضاشده موقت
    "/functions/v1/"
];

function isApiPath(url) {

    const path = new URL(url).pathname;

    return API_NO_CACHE_PATTERNS.some(p => path.includes(p));

}

// ===============================
// Install
// ===============================

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(

        caches.open(STATIC_CACHE)

            .then(cache => {

                // اگه یکی از فایل‌ها 404 بده یا خطا بده، کل نصب فیل نشه
                return Promise.all(

                    STATIC_FILES.map(url =>

                        cache.add(url).catch(err => {

                            console.warn("Service worker: cache failed for", url, err);

                        })

                    )

                );

            })

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

    // فقط درخواست‌های http/https رو مدیریت کن (نه chrome-extension و مشابه)
    if (!event.request.url.startsWith("http")) return;

    const request = event.request;

    const accept = request.headers.get("accept") || "";

    // صفحه‌های حساس (لاگین/پروفایل/امتحان) - فقط از شبکه، بدون کش
    // ولی اگه آفلاین بودیم و خود صفحه HTML بود، offline.html نشون بده
    // (این fallback فقط می‌خونه، هیچ‌وقت خود صفحه رو کش نمی‌کنه)
    if (isNoCachePath(request.url)) {

        event.respondWith(

            fetch(request, { cache: "no-store" })

                .catch(() => {

                    if (accept.includes("text/html")) {

                        return caches.match(OFFLINE_PAGE);

                    }

                    return Promise.reject("offline and no fallback for this resource type");

                })

        );

        return;

    }

    // درخواست‌های API (Supabase و مشابه) - فقط از شبکه، بدون کش
    if (isApiPath(request.url)) {

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
