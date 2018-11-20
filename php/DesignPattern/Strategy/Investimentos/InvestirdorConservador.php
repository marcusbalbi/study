<?php
namespace Balbi\Strategy\Investimentos;
use Balbi\Strategy\Investimentos\Conta;

class InvestirdorConservador implements Investimento
{
    public function calcular(Conta $conta)
    {
        $lucro =  $conta->getFundos() * 0.08;
        
        return $lucro;
    }
}
