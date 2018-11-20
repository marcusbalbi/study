var Consultas = require('../../src/Consultas.js');
var Pacientes = require('../../src/Pacientes');
var Agendamento = require('../../src/Agendamento');

describe('Agendamento.js', function () {
  var paciente;

  beforeEach(function () {
    paciente = new Pacientes({
      nome: 'Joao Carlos',
      idade: 17
    });
  });

  it('Deve Agendar uma consulta para 20 dias', function () {
    var consulta = new Consultas(paciente, [], false, new Date(2016 , 0, 1));

    var agendamento = new Agendamento(consulta);
    var proximaConsulta = agendamento.obterProximaConsulta();

    expect(proximaConsulta.obterData().getTime().toString())
    .toEqual(new Date(2016, 0, 6).getTime().toString());

  });

  it('Deve Agendar uma consulta para o proximo dia util', function () {
    var consulta = new Consultas(paciente, [], false, new Date(2016 , 1, 1));

    var agendamento = new Agendamento(consulta);
    var proximaConsulta = agendamento.obterProximaConsulta();

    expect(proximaConsulta.obterData().getTime().toString())
    .toEqual(new Date(2016, 1, 6).getTime().toString());

  });

});
