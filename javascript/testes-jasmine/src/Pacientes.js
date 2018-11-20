var Sus = require('./convenios/Sus');

var Pacientes = function (config) {
  if (!config || !config.nome || typeof config.idade !== 'number') {
    throw new Error('Paciente invalido');
  }

  this.nome = config.nome;
  this.idade = config.idade;
  this.altura = config.altura;
  this.peso = config.peso;
  this.convenio = config.convenio || new Sus();
}

Pacientes.prototype.obterConvenio = function () {

  if(this.convenio && this.convenio.obterDesconto) {
    return this.convenio;
  }

  return new Sus();

}

Pacientes.prototype.obterBatimentosCardiacos = function () {
  return this.idade * 365 * 24 * 60 * 80;
}

Pacientes.prototype.obter = function (atributo) {
  return this[atributo] || null;
}

Pacientes.prototype.imc = function () {
  var imc =  this.peso / (this.altura * this.altura);

  if(isNaN(imc)) {
    throw new Error('Peso e Altura inválidos para Calculo do IMC');
  }

  return imc;

}


module.exports = Pacientes;
