var express = require('express');
var path = require('path');
var errorHandler = require('./bootstrap/ErrorHandler');
var providers = require("./bootstrap/Providers");

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

providers.provide(app);

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.render("errors/404");
});

errorHandler.handle(app);


module.exports = app;
