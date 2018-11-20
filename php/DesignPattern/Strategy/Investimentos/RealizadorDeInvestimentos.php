<?php
namespace Balbi\Strategy\Investimentos;
use Balbi\Strategy\Investimentos\Conta;

class RealizadorDeInvestimentos
{
    
    
    public function investir(Conta $conta, Investimento $investimento)
    {
        
        $lucro =  $investimento->calcular($conta);
        
        return $lucro - ($lucro * 0.25);
    }
    
}
