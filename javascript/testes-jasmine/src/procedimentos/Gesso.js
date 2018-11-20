ProcedimentoBase = require('./ProcedimentoBase');

var Gesso = function () {
}

Gesso.prototype = new ProcedimentoBase("Gesso", 35.00)
module.exports = Gesso;
