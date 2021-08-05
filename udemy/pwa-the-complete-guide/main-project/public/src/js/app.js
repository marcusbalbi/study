
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

function displayConfirmNotification() {
  const options = {
    body: "Obrigado por se registrar no app!",
    icon: "/src/images/icons/app-icon-96x96.png",
    image: "/src/images/sf-boat.jpg",
    dir: "ltr",
    lang: "en-US",
    vibrate: [100, 50, 200],
    badge: "/src/images/icons/app-icon-96x96.png",
    tag: "confirm-notification",
    renotify: true,
    actions: [
      {
        action: "confirm",
        title: "Ok",
        icon: '"/src/images/icons/app-icon-96x96.png"',
      },
      {
        action: "cancel",
        title: "Cancel",
        icon: '"/src/images/icons/app-icon-96x96.png"',
      },
    ],
  };

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((swreg) => {
      swreg.showNotification("Notificações ativas", options);
    });
  }
}

function configPubSub() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  let reg = null;
  navigator.serviceWorker.ready
    .then((swreg) => {
      reg = swreg;
      return swreg.pushManager.getSubscription();
    })
    .then((sub) => {
      if (null === sub) {
        let vapidPublicKey =
          "BA5Kjx6HISaokoS5YRKLfWpi-gwE4Ly9L98uK_aMPxGXWsoVnmbVRKS83prFhzEzxoDxSmJTi4UUTFMAXCOMmf4";
        const converted = urlBase64ToUint8Array(vapidPublicKey);
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: converted,
        });
      } else {
      }
    })
    .then((newSub) => {
      return fetch(
        "https://balbigram-default-rtdb.firebaseio.com/subscriptions.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newSub),
        }
      );
    })
    .then((res) => {
      if (res.ok) {
        displayConfirmNotification();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function askForNotificationPermission() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      configPubSub();
    }
  });
}

if ("Notification" in window && "serviceWorker" in navigator) {
  enablePushNotificationsButtons.forEach((button) => {
    button.style.display = "inline-block";
    button.addEventListener("click", askForNotificationPermission);
  });
}