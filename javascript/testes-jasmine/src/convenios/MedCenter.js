var Base = require('./Base.js');

var MedCenter = new Base('MedCenter');

MedCenter.prototype.obterDesconto = function () {
  return 0.2;
}

module.exports = MedCenter;
