var express = require('express');
var routes = require('./routes');
var api = require('./rest-api');

var http = require('http');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../src')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/funcionarios', api.salvaFuncionario);
app.get('/funcionarios/:id', api.obtemFuncionario);
//app.put('/contatos/:id', routes.atualizaContato);
app.delete('/funcionarios/:id', api.removeFuncionario);
app.get('/funcionarios', api.listaFuncionarios);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
