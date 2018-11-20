var express = require('express');
var app = express();

app.get('/clientes/:name?',function(req,res,next){
	var name = req.params.name;

	switch	( name ? name.toLowerCase() : '' ) {
		
		case 'marcus' :
		case 'joao'   :
		case 'jose'   :
		{
			res.send(name + ' é o nome do cliente');
			break;
		}
		
		default :
			next();	

	}
});

app.get('/clientes/*?',function(req,res){

	res.send('cliente não encontrado');

});

app.get('/?',function(req,res){
	res.send('Ola mundo');
});

var port = 8000;
app.listen(port);

console.log('servidor rodando na porta '+ port);

