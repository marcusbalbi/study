<?php


class Conta{
    
    private $nome;
    
    public function __construct($nome) {
        $this->nome = $nome;
    }
    
    public function getDescricao()
    {
        return "NOME DA CONTA: ".$this->nome;
    }
    
}


interface MetodoDePagamento
{
    public function pagar(Conta $conta);
}

class PagamentoComDinheiro implements MetodoDePagamento
{
    public function pagar(Conta $conta) {
      return "PAGANDO COM DINHEIRO :<br>".$conta->getDescricao();
    }

}

class PagamentoComDebitoOnline implements MetodoDePagamento
{
    public function pagar(Conta $conta) {
      return "PAGANDO COM DEBITO ONLINE :<br>".$conta->getDescricao();
    }

}

/**
 * Description of Pagamento
 *
 * @author Marcus
 */
class Banco {
    
                                                    //Codificando para uma Interface
    public function efetuarPagamento(Conta $conta,  MetodoDePagamento $metodo)
    {
        return $metodo->pagar($conta); //Nao tem ideia de como vai pagar.
    }
    
}



$banco = new Banco();


echo $banco->efetuarPagamento(new Conta("CONTA DE LUZ"), new PagamentoComDebitoOnline());
