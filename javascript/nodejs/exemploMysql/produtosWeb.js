var http = require('http')

var serv = http.createServer(function (req, res) {
  res.end('OLA MUNDO')
});

serv.listen(3000);