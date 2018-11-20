var express = require('express');
var router = express.Router();
const SearchUsers = require('../../business/users/SearchUsers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { result: {} });
});

router.post('/', (req, res) => {
  SearchUsers(req.body.query)
    .then((pRes) => {
      res.render('index', {result: pRes, params: req.body})
    })
})

module.exports = router;
