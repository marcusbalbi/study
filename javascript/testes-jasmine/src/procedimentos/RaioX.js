ProcedimentoBase = require('./ProcedimentoBase');

var RaioX = function () {
}

RaioX.prototype = new ProcedimentoBase("Raio X", 45.00);
module.exports = RaioX;
