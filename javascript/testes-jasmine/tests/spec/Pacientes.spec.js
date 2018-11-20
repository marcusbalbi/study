var Pacientes = require('../../src/Pacientes.js');
var Sus = require('../../src/convenios/Sus');

describe('Pacientes', function () {

  var paciente;

  beforeEach(function () {
    paciente = new Pacientes({
      nome: 'João',
      idade: 12,
      peso: 55,
      altura:1.70
    })
  });
  describe('Testes Básicos',function () {
    it('deve lançar uma exeção quando nome ou idade não é passado', function () {
      expect(function() {
        var p = new Pacientes();
      }).toThrowError('Paciente invalido');

      expect(function() {
        var p = new Pacientes({ nome: 'João carlos' });
      }).toThrowError('Paciente invalido');

    });

    it('deve obter os dados do paciente', function () {
      expect(paciente.obter('nome')).toEqual('João');
      expect(paciente.obter('idade')).toEqual(12);
      expect(paciente.obter('peso')).toEqual(55);
      expect(paciente.obter('altura')).toEqual(1.70);
})


  });

  it('deve possuir convenio Sus quando convenio for nulo ou inválido', function () {

    var paciente2 = new Pacientes({ nome: 'joao', idade:15 });

    expect(paciente.obterConvenio).toBeDefined()
    expect(paciente.obterConvenio().nome).toEqual('Sus')
    expect(paciente2.obterConvenio().nome).toEqual('Sus')

  });

  it('deve calcular batimentos cardiacos corretamente', function () {
    expect(paciente.obterBatimentosCardiacos()).toEqual(504576000)
  });

  it('deve calcular imc corretamente', function () {
    expect(paciente.imc()).toEqual(19.031141868512112)
  });

  it('deve lanças exception quando passado peso e altura invalidos para calculo imc', function () {

    var paciente = new Pacientes({
      nome: 'João',
      idade: 10,
      peso: 'asdasdas'
    });

    expect(function () {
      paciente.imc();
    }).toThrowError();

  });

});
