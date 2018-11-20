var events = require('events');
var emissor = new events.EventEmitter();

function mainLoop()
{
	console.log("Começando aplicação");
	emissor.emit('iniciada');

	console.log('Aplicação rodando');
	emissor.emit('rodando');

	console.log('Parando Aplicação');
	emissor.emit('parando');

	
}

function aoIniciar(){
	console.log('Evento disparado ao Iniciar Aplicação');
}

function aoRodar(){
	console.log('Evento DIsparado quando a aplicação estiver rodando');

}

function aoParar(){
	console.log('Evento DIsparado quando a aplicação parar');

}

emissor.on('iniciada',aoIniciar);
emissor.on('rodando', aoRodar);
emissor.on('parando', aoParar);

mainLoop();

