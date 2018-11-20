var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports  = function () {
  var app = express();

  app.set('view engine','ejs');
  app.set('views','./app/views');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(expressValidator());

  app.use(function (req, res, next) {
    console.log('DADOS DA REQUISIÇÃO', req.body)
    next();
  });

  load('routes', {cwd:'app'})
    .then('common')
    .then('database')
    .into(app);

    app.use(function (error, req, res, next) {
      res.status(500).render('erros/500', {
        error: error
      });
      next();
    });

  return app;
};
