var MaiorMenor = function (numeros) {
  this.numeros = numeros;
}

MaiorMenor.prototype.obterMenor = function () {
  var menor = Number.MAX_VALUE;

  this.numeros.forEach(function(numero) {
    menor = numero < menor ? numero : menor
  });

  return menor;
}

MaiorMenor.prototype.obterMaior = function () {
  var maior = Number.MIN_VALUE;

  this.numeros.forEach(function(numero) {
    maior = numero > maior ? numero : maior
  });

  return maior;
}

module.exports = MaiorMenor;
