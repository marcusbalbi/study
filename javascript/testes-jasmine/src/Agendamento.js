var Consultas = require('./Consultas');

var Agendamento = function (consulta) {
  this.consulta = consulta;
}

Agendamento.prototype.obterProximaConsulta = function () {
  var umDiaEmMilisegundos = 1000 * 60 * 60 * 24;
  var vinteDiasEmMilisegundos =  umDiaEmMilisegundos * 5;


  var novaData = new Date(this.consulta.obterData().getTime() + vinteDiasEmMilisegundos);

  // while(novaData.getDay() === 0 || novaData.getDay() === 6) {
  //   novaData = new Date(novaData.getTime() + umDiaEmMilisegundos);
  // }

  return new Consultas(this.consulta.obterPaciente(),
   this.consulta.obterProcedimentos(),
   true,
   novaData);
}

module.exports = Agendamento;
