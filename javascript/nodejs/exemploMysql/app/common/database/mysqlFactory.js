 var mysql = require('mysql');

function createConnection () {
  var connection = null;
  if(!process.env.NODE_ENV) {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'mymtg12'
    });
  }
  if(process.env.NODE_ENV === 'test') {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'secret',
        database: 'mymtg_test'
    });
  }
  return connection;
}

module.exports = function () {
  return createConnection;
};
