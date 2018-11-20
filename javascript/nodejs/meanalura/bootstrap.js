exports.configurar = function() {

    var express = require('express');
    var path = require('path');
    var bodyParser = require('body-parser');


    var app = express();

    app.set('views', path.join(__dirname, 'views'));

    app.set('view engine', 'ejs');

    app.set('port', process.env.PORT || 3000);


    app.use(express.static(path.join(__dirname,'public')));
    
    app.use(bodyParser.json());
    
    app.use(bodyParser.urlencoded({extended: true}));
    
//    app.use(function (req, res, next) {
//        console.log(req.body) // populated!
//        next();
//      });

    return app;

};