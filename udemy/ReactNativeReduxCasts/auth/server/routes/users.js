var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
   User.find().then((a) => {
      res.json(a);
   })
});

module.exports = router;
