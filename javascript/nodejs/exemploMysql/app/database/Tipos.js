function tipos (connection) {
  this._connection = connection;
}

tipos.prototype.lista = function (callback) {
    this._connection.query('select * from types',callback);
    this._connection.end();
};

tipos.prototype.salva = function (tipo, callback) {
  tipo.created_at = new Date();
  tipo.updated_at = new Date();
  this._connection.query('insert into types set ?', tipo, callback);
  this._connection.end();
};

module.exports = function () {
  return tipos;
};
