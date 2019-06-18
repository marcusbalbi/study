var admin = require("firebase-admin");

var serviceAccount = require('./firebase-config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expenses-dd3ec.firebaseio.com"
});

module.exports = admin