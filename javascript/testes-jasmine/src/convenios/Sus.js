var Base = require('./Base.js');

var Sus = function () {
  Base.call(this, 'Sus');
}

Sus.prototype.obterDesconto = function () {
  return 0;
}

module.exports = Sus;
