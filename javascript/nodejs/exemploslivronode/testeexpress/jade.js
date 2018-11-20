var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('view options', { layout: true  });
app.set('views', __dirname + '/views');

app.get('/clientes/:name?',function(req,res,next){
	var name = req.params.name;

	switch	( name ? name.toLowerCase() : '' ) {
		
		case 'marcus' :
		case 'joao'   :
		case 'jose'   :
		{
			res.render('clientes', {'cliente' : name });
			break;
		}
		
		default :
			next();	

	}
});

app.get('/clientes/*?',function(req,res){

	res.render('clientes', {'cliente' : null });

});

app.get('/?',function(req,res){
	res.render('index');
});

var port = 8000;
app.listen(port);

console.log('servidor rodando na porta '+ port);


