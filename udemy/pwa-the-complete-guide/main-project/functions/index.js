const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const webPush = require("web-push");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://balbigram-default-rtdb.firebaseio.com/",
});

exports.storePostData = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return cors(request, response, () => {
    const ref = admin.database().ref("posts");

    ref.once("value", (snapshot) => {
      functions.logger.info("dados!", snapshot);
    });
    admin.database().ref("posts").push({
      id: request.body.id,
      title: request.body.title,
      location: request.body.location,
      image: request.body.image,
    }).then(() => {
      webPush.setVapidDetails(
          "mailto:balbimarcus@gmail.com",
          // eslint-disable-next-line
          "BA5Kjx6HISaokoS5YRKLfWpi-gwE4Ly9L98uK_aMPxGXWsoVnmbVRKS83prFhzEzxoDxSmJTi4UUTFMAXCOMmf4",
          "vc2H0PFG8DXqdJnUiH8AwU5V7aXaBlArFvkZtyGSSu4"
      );
      return admin.database().ref("subsscriptions").once("value");
    }).then((subs) => {
      subs.forEach((sub) => {
        const pushConfig = {
          endpoint: sub.val().endpoint,
          keys: {
            auth: sub.val().keys.auth,
            p256dh: sub.val().keys.p256dh,
          },
        };
        webPush.sendNotification(pushConfig,
            JSON.stringify({title: "New Post!", content: "New post Added!"}))
            .catch((err) => {
              console.log(err);
            });
      });
      response.status(201)
          .json({message: "data Stored", id: request.body.id});
    }).catch((err) => {
      functions.logger.error("Error saving data!", err);
      response.status(500).json({error: err.message});
    });
  });
});
