const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit : 1,
  host            : 'localhost',
  user            : 'root',
  password        : 'secret',
  database        : 'mymtg'
});

pool.getConnection(function(err, connection) {
  connection.query('select * from colors', (err, result) => {
    console.log('----');
    // connection.release()
    connection.release()
  })
  connection.query('select * from colors', (err, result) => {
    console.log('DINOVOOOOOOOO');
  })
});

pool.getConnection(function(err, connection) {
  connection.query('select * from colors', (err, result) => {
    console.log('----');
    // connection.release()
    connection.release()
  })
  connection.query('select * from colors', (err, result) => {
    console.log('DINOVOOOOOOOO');
  })
});

pool.getConnection(function(err, connection) {
  connection.query('select * from colors', (err, result) => {
    console.log('----');
    // connection.release()
    connection.release()
  })
  connection.query('select * from colors', (err, result) => {
    console.log('DINOVOOOOOOOO');
  })
});

pool.getConnection(function(err, connection) {
  connection.query('select * from colors', (err, result) => {
    console.log('----');
    // connection.release()
    connection.release()
  })
  connection.query('select * from colors', (err, result) => {
    console.log('DINOVOOOOOOOO');
  })
});
