var express = require('express');
var router = express.Router();
var firebase = require('../models/firebase')

/* GET home page. */
router.get('/', async function (req, res, next) {
  await firebase.database().ref('/test').push({
    random: 'random-' + Math.floor(Math.random() * 50)
  })
  await firebase.database().ref('/test').once('value')
    .then((snp) => {
      let data = snp.val()
      res.json(data)
    })
});

router.get('/test-2', async function (req, res, next) {
  await firebase.database().ref('/test-2').push({
    random: 'random-' + Math.floor(Math.random() * 50)
  })
});

module.exports = router;
