var Consultas = require('../../src/Consultas.js');
var Pacientes = require('../../src/Pacientes');
var Gesso = require('../../src/procedimentos/Gesso');
var RaioX = require('../../src/procedimentos/RaioX');
var ProcedimentoSimples = require('../../src/procedimentos/ProcedimentoSimples');

describe('Consultas', function () {
  var paciente;

  beforeEach(function () {
    paciente = new Pacientes({
      nome: 'Joao Carlos',
      idade: 17
    });
  });

  it('Deve calcular preço zerado quando retorno', function () {

    var consulta = new Consultas(paciente, [new RaioX()], true);

    expect(consulta.obterPreco()).toEqual(0);

  });

  it('Deve calcular preço correto', function () {

    var consulta = new Consultas(paciente, [new RaioX(), new RaioX(), new Gesso()], false);

    expect(consulta.obterPreco()).toEqual(125);

  });

});
