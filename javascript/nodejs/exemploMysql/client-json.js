var http = require('http');

var config = {
  hostName: 'localhost',
  port: 3000,
  path: '/tipos/form',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(config, function (res) {
  console.log(res.statusCode);
  res.on('data',function(a) {
    console.log(''+a);
  });
});

var tipo = {
  name: 'TIPO DO MARCUS',
  permanent: 1
};

client.end(JSON.stringify(tipo));


// http.get(config, function (res) {
//     res.on('data',function(a) {
//       console.log(''+a);
//   });
// });
