var Consultas = function (paciente, procedimentos, retorno, data) {
  this.retorno = retorno;
  this.paciente = paciente;
  this.procedimentos = procedimentos;
  this.data = data;
}

Consultas.prototype.obterPreco = function () {

  if(this.retorno) {
    return 0;
  }

  var precoFinal = 0;
  var me = this;
  this.procedimentos.forEach(function (proc) {
    precoFinal+= proc.obterPreco(me.paciente.obterConvenio());
  });

  return precoFinal;

}

Consultas.prototype.obterProcedimentos = function () {
  return this.procedimentos;
}

Consultas.prototype.obterPaciente = function () {
  return this.paciente;
}

Consultas.prototype.obterData = function () {
  return this.data;
}

module.exports = Consultas;
