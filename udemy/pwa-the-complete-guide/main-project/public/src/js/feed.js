var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);
var sharedMomentsArea = document.querySelector("#shared-moments");
var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var locationInput = document.querySelector("#location");

function openCreatePostModal() {
  // createPostArea.style.display = 'block';
  // setTimeout(function() {
  createPostArea.style.transform = "translateY(0)";
  // }, 1);
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(console.log);

    deferredPrompt = null;
  }

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.getRegistrations()
  //     .then(function(registrations) {
  //       for (var i = 0; i < registrations.length; i++) {
  //         registrations[i].unregister();
  //       }
  //     })
  // }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);

// Currently not in use, allows to save assets in cache on demand otherwise
// function onSaveButtonClicked(event) {
//   console.log("clicked");
//   if ("caches" in window) {
//     caches.open("user-requested").then(function (cache) {
//       cache.add("https://httpbin.org/get");
//       cache.add("/src/images/sf-boat.jpg");
//     });
//   }
// }

function clearCards() {
  while (sharedMomentsArea.hasChildNodes()) {
    sharedMomentsArea.removeChild(sharedMomentsArea.lastChild);
  }
}

function createCard(data) {
  var cardWrapper = document.createElement("div");
  cardWrapper.className = "post-card-item";
  cardWrapper.className = "shared-moment-card mdl-card mdl-shadow--2dp";
  var cardTitle = document.createElement("div");
  cardTitle.className = "mdl-card__title";
  cardTitle.style.backgroundImage = `url("${data.image}")`;
  cardTitle.style.backgroundSize = "cover";
  cardTitle.style.height = "180px";
  cardWrapper.appendChild(cardTitle);
  var cardTitleTextElement = document.createElement("h2");
  cardTitleTextElement.className = "mdl-card__title-text";
  cardTitleTextElement.textContent = data.title;
  cardTitleTextElement.style.color = "white";
  cardTitle.appendChild(cardTitleTextElement);
  var cardSupportingText = document.createElement("div");
  cardSupportingText.className = "mdl-card__supporting-text";
  cardSupportingText.textContent = data.location;
  cardSupportingText.style.textAlign = "center";
  // var cardSaveButton = document.createElement("button");
  // cardSaveButton.textContent = "Save";
  // cardSaveButton.addEventListener("click", onSaveClicked);
  // cardSupportingText.appendChild(cardSaveButton);
  cardWrapper.appendChild(cardSupportingText);
  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);
}

function updateUI(data) {
  document.querySelector("#shared-moments").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    createCard(data[i]);
  }
}

const url = "https://balbigram-default-rtdb.firebaseio.com/posts.json";
let networkDataReceived = false;
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
    console.log("From web", data);
    var dataArray = [];
    for (var key in data) {
      dataArray.push(data[key]);
    }
    updateUI(dataArray);
  });

if ("indexedDB" in window) {
  readAllData("posts").then(function (data) {
    if (!networkDataReceived) {
      console.log("From cache", data);
      updateUI(data);
    }
  });
}

function sendData() {
  fetch("https://us-central1-balbigram.cloudfunctions.net/storePostData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: new Date().toISOString(),
      title: titleInput.value,
      location: locationInput.value,
      // image:
      //   "https://firebasestorage.googleapis.com/v0/b/pwagram-99adf.appspot.com/o/sf-boat.jpg?alt=media&token=19f4770c-fc8c-4882-92f1-62000ff06f16",
    }),
  }).then(function (res) {
    console.log("Sent data", res);
    updateUI();
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (titleInput.value.trim() === "" || locationInput.value.trim() === "") {
    alert("Please enter valid data!");
    return;
  }

  closeCreatePostModal();

  if ("serviceWorker" in navigator && "SyncManager" in window) {
    navigator.serviceWorker.ready.then(function (sw) {
      var post = {
        id: new Date().toISOString(),
        title: titleInput.value,
        location: locationInput.value,
      };
      writeData("sync-posts", post)
        .then(function () {
          return sw.sync.register("sync-new-posts");
        })
        .then(function () {
          var snackbarContainer = document.querySelector("#confirmation-toast");
          var data = { message: "Your Post was saved for syncing!" };
          snackbarContainer.MaterialSnackbar.showSnackbar(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  } else {
    sendData();
  }
});
