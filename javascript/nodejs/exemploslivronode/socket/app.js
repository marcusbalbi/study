var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var capturarFrases  = [
    'Quem quer dinheiro?',
    'pega essa!',
    'vem comigo!',
    'Agora não',
    'cai fora!',
    'Prazer em conhece-lo'
];


app.use('/public', express.static(__dirname + '/public'));;


app.get('/clientes/chat',function(req,res,next){
    
    res.sendFile(__dirname+'/chat.html');
    
});


io.sockets.on('connection',function(socket){
    
    var sendChat = function(title,text){
        socket.emit('chat',{
           title    : title,
           content  : text
        });
    };
    
    
    setInterval(function(){
    
    var randomIndex = Math.floor(Math.random()*capturarFrases.length);
    
        sendChat('cliente',capturarFrases[randomIndex]);
        
    
},5000);

    sendChat("Bem vindo ao Bate bapo", 'Converse com alguem!');
    
    socket.on('chat',function(data){
        
        sendChat('Voce :',data.text);
        
    });

    
    
});

app.get('/?',function(req,res){
    
    res.render('index');
    
});

var port = 8000;
server.listen(port);

console.log('Servidor na porta:' + port);



