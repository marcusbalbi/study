var express = require('express');
var router = express.Router();
var app = express();
var load = require("express-load");

load("models").then("controllers").into(app);


/* GET home page. */
router.get('/', app.controllers.HomeController.index);

module.exports = router;