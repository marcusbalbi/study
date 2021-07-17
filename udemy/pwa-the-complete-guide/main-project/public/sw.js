const CACHE_STATIC_NAME = "static-v8";
const CACHE_DYNAMIC_NAME = "dynamic-v2";
self.addEventListener("install", function (event) {
  console.log("[Service Worker] installed", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      console.log("[Service Worker] Precaching App shell");
      cache.addAll([
        "/",
        "/index.html",
        "/offline.html",
        "/src/js/app.js",
        "/src/js/feed.js",
        "/src/js/material.min.js",
        "/src/css/app.css",
        "/src/css/feed.css",
        "/src/images/main-image.jpg",
        "https://fonts.googleapis.com/css?family=Roboto:400,700",
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css",
      ]);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] activated", event);
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((k) => {
          if (k !== CACHE_STATIC_NAME && k !== CACHE_DYNAMIC_NAME) {
            console.log("[Service Worker] removing old cache...", k);
            return caches.delete(k);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // console.log("[Service Worker] fetching...", event);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then((resp) => {
            return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
              cache.put(event.request, resp.clone());
              return resp;
            });
          })
          .catch((err) => {
            return caches.open(CACHE_STATIC_NAME).then(cache => {
              return cache.match('/offline.html')
            });
          });
      }
    })
  );
});
