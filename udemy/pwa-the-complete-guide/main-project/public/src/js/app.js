let deferredPrompt = null;

let enablePushNotificationsButtons = document.querySelectorAll(
  ".enable-notifications"
);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("service worker registered");
  });
}

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

function displayConfirmPermission() {
  const options = {
    body: "Obrigado!!!"
  };

  new Notification("Notificações ativas", options);
}

function askForNotificationPermission() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      displayConfirmPermission();
    }
  });
}

if ("Notification" in window) {
  enablePushNotificationsButtons.forEach((button) => {
    button.style.display = "inline-block";
    button.addEventListener("click", askForNotificationPermission);
  });
}
