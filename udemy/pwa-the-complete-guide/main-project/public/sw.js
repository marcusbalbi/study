self.addEventListener("install", function (event) {
  console.log("[Service Worker] installed", event);
  event.waitUntil(
    caches.open("static").then((cache) => {
      console.log("[Service Worker] Precaching App shell");
      cache.addAll(["/", "/index.html", "src/js/app.js"]);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] activated", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // console.log("[Service Worker] fetching...", event);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
