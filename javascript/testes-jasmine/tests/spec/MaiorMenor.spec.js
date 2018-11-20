var MaiorMenor = require('../../src/MaiorMenor.js');

describe('MaiorMenor', function () {


  it('deve encontrar o maior e o menor número em array desordenado', function () {
    var maiorMenor = new MaiorMenor([4, 3, 5, 8, 33, 23, 93, 52, 7]);

    var menor = maiorMenor.obterMenor();
    var maior = maiorMenor.obterMaior();

    expect(menor).toEqual(3);
    expect(maior).toEqual(93);
  })

  it('deve encontrar o maior e o menor número em array ordenado sequencialmente', function () {
    var maiorMenor = new MaiorMenor([2, 3, 4, 5]);

    var menor = maiorMenor.obterMenor();
    var maior = maiorMenor.obterMaior();

    expect(menor).toEqual(2);
    expect(maior).toEqual(5);
  })

  it('deve encontrar o maior e o menor número em array com ordem decrescente', function () {
    var maiorMenor = new MaiorMenor([235, 5, 4, 3, 2, 1, -30]);

    var menor = maiorMenor.obterMenor();
    var maior = maiorMenor.obterMaior();

    expect(menor).toEqual(-30);
    expect(maior).toEqual(235);
  })

  it('deve encontrar o maior e o menor número em array com um elemento', function () {
    var maiorMenor = new MaiorMenor([10]);

    var menor = maiorMenor.obterMenor();
    var maior = maiorMenor.obterMaior();

    expect(menor).toEqual(10);
    expect(maior).toEqual(10);
  })

});
