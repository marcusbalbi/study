var app = require('./config/express.js')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, function () {
  console.log('servidor rodando na porta 3000');
});
