const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
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
      response.status(201)
          .json({message: "data Stored", id: request.body.id});
    }).catch((err) => {
      functions.logger.error("Error saving data!", err);
      response.status(500).json({error: err.message});
    });
  });
});
