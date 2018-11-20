var express = require('../config/express')();
var request = require('supertest')(express);

function limparBanco (done) {
  var mysqlFactory = express.common.database.mysqlFactory();

  mysqlFactory.query('delete from types where id > 8', function (err) {
    if (!err) {
      done();
    } else {
      console.log(err);
    }
  });
}

describe('#TiposController', function () {

  // acionado antes de cada teste
  beforeEach(function (done) {
    limparBanco(done);
  });
  // acionado após cada teste
  afterEach(function (done) {
    limparBanco(done);
  });

  it('deve retornar json', function (done) {

    request.get('/tipos')
    .set('Accept', 'application/json')
    .expect(200)
    .expect('content-type', /json/, done);
  });

  it('#Não deve cadastrar com dados invalidos', function (done) {
    request.post('/tipos/form')
      .send({ name: '', permanent: 'aaa' })
      .expect(400, done);
  });

  it('#Deve cadastrar com dados validos', function (done) {
    request.post('/tipos/form')
      .send({ name: 'Tipo A', permanent: 1 })
      .expect(302, done);
  });

});
