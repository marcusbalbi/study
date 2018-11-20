var express = require('express')
var router = express.Router()
var colorController = require('../controllers/ColorController')
/* GET home page. */
router.get('/colors', colorController.index)
router.get('/colors/:id', colorController.show)

module.exports = router
