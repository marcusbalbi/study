ProcedimentoBase = require('./ProcedimentoBase');

var ProcedimentoSimples = function () {
}

ProcedimentoSimples.prototype = new ProcedimentoBase("Procedimento Simples", 25.00);
module.exports = ProcedimentoSimples;
