self.addEventListener("install", function (event) {
  console.log("[Service Worker] installed", event);
});

self.addEventListener("activate", function (event) {
  console.log("[Service Worker] activated", event);
  return self.clients.claim();
});


