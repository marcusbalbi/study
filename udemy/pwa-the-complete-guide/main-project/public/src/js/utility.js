const dbPromise = idb.open("post-store", 1, function (db) {
  if (!db.objectStoreNames.contains("posts")) {
    db.createObjectStore("posts", { keyPath: "id" });
  }
  if (!db.objectStoreNames.contains("sync-posts")) {
    db.createObjectStore("sync-posts", { keyPath: "id" });
  }
});

function writeData(st, data) {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readwrite");
    var store = tx.objectStore(st);
    store.put(data);
    return tx.complete;
  });
}

function readAllData(st) {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readonly");
    var store = tx.objectStore(st);
    return store.getAll();
  });
}

function clearAllData() {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readwrite");
    var store = tx.objectStore(st);
    store.clear();
    return tx.complete;
  });
}

function deleteItemFromData(st, id) {
  return dbPromise.then((db) => {
    const tx = db.transaction(st, "readwrite");
    var store = tx.objectStore(st);
    store.delete(id);
    return tx.complete;
  });
}
