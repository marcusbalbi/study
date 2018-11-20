var express = require('express');
var router = express.Router();

let counter = 0
/* GET home page. */
router.get('/counter', function(req, res, next) {
  res.status(200).json({ counter })
});

router.post('/counter', function(req, res, next) {
  counter++
  res.status(200).json({ counter })
});

router.delete('/counter', function(req, res, next) {
  counter--
  res.status(200).json({ counter })
});

module.exports = router;
