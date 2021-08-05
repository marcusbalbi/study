const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const webPush = require("web-push");
const formidable = require("formidable");
const fs = require("fs");
const uuidV4 = require("uuid-v4");
const os = require("os");
const Busboy = require("busboy");
const path = require("path");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const serviceAccount = require("./credentials.json");


const gcconfig = {
  projectId: "balbigram",
  keyFilename: "./credentials.json",
};

const gcs = require("@google-cloud/storage")(gcconfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://balbigram-default-rtdb.firebaseio.com/",
});

exports.storePostData = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return cors(request, response, () => {
    const uuid = uuidV4();

    const busboy = new Busboy({headers: request.headers});

    let upload;
    const fields = {};

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      console.log(
          `File [${fieldname}] filename: ${filename},
          encoding: ${encoding}, mimetype: ${mimetype}`
      );
      const filepath = path.join(os.tmpdir(), filename);
      upload = {file: filepath, type: mimetype};
      file.pipe(fs.createWriteStream(filepath));
    });

    // This will invoked on every field detected
    busboy.on("field",
        (fieldname, val, fieldnameTruncated,
            valTruncated, encoding, mimetype) => {
          fields[fieldname] = val;
        });

    // This callback will be invoked after all uploaded files are saved.
    busboy.on("finish", () => {
      const bucket = gcs.bucket("YOUR_PROJECT_ID.appspot.com");
      bucket.upload(
          upload.file,
          {
            uploadType: "media",
            metadata: {
              metadata: {
                contentType: upload.type,
                firebaseStorageDownloadTokens: uuid,
              },
            },
          },
          function(err, uploadedFile) {
            if (!err) {
              admin
                  .database()
                  .ref("posts")
                  .push({
                    title: fields.title,
                    location: fields.location,
                    rawLocation: {
                      lat: fields.rawLocationLat,
                      lng: fields.rawLocationLng,
                    },
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/" +
                      bucket.name +
                      "/o/" +
                      encodeURIComponent(uploadedFile.name) +
                      "?alt=media&token=" +
                      uuid,
                  })
                  .then(function() {
                    webPush.setVapidDetails(
                        "mailto:balbimarcus@gmail.com",
                        // eslint-disable-next-line
                        "BA5Kjx6HISaokoS5YRKLfWpi-gwE4Ly9L98uK_aMPxGXWsoVnmbVRKS83prFhzEzxoDxSmJTi4UUTFMAXCOMmf4",
                        "vc2H0PFG8DXqdJnUiH8AwU5V7aXaBlArFvkZtyGSSu4"
                    );
                    return admin
                        .database()
                        .ref("subscriptions")
                        .once("value");
                  })
                  .then(function(subscriptions) {
                    subscriptions.forEach(function(sub) {
                      const pushConfig = {
                        endpoint: sub.val().endpoint,
                        keys: {
                          auth: sub.val().keys.auth,
                          p256dh: sub.val().keys.p256dh,
                        },
                      };

                      webPush
                          .sendNotification(
                              pushConfig,
                              JSON.stringify({
                                title: "New Post",
                                content: "New Post added!",
                                openUrl: "/help",
                              })
                          )
                          .catch(function(err) {
                            console.log(err);
                          });
                    });
                    response
                        .status(201)
                        .json({message: "Data stored", id: fields.id});
                  })
                  .catch(function(err) {
                    response.status(500).json({error: err});
                  });
            } else {
              console.log(err);
            }
          }
      );
    });
    busboy.end(request.rawBody);
  });
});
