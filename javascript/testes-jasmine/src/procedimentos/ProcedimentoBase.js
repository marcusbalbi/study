var ProcedimentoBase = function (nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

ProcedimentoBase.prototype.obterPreco = function (convenio) {
  var desconto = convenio.obterDesconto ?  convenio.obterDesconto : 0;

  return this.preco + (convenio.obterDesconto() * this.preco);
}


module.exports = ProcedimentoBase;
