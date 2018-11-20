var bootstrap = require("./bootstrap.js");
var filmesController = require('./modulos/Filmes/controllers');
var app = bootstrap.configurar();




app.get('/', filmesController.index);
app.get('/lista',filmesController.listar);

app.post('/gravar',filmesController.gravar);
app.delete('/deletar/:id',filmesController.deletar);
app.put("/editar/:id",filmesController.editar);



var server = app.listen(app.get('port'), function() {
    console.log('Servidor foi iniciado na porta ' + server.address().port);
});