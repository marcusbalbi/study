<?php

namespace Balbi\Strategy\Investimentos;

use Balbi\Strategy\Investimentos\Conta;

class InvestidorArrojado implements Investimento
{
    public function calcular(Conta $conta)
    {
        
           $chances = mt_rand(1,100);
          
          if($chances <= 20)
              $lucro = $conta->getFundos() * 0.5;
          if($chances >= 30 && $chances <= 50)
                $lucro = $conta->getFundos() * 0.3;
          if($chances > 50)
                $lucro = $conta->getFundos() * 0.06;
      

          return $lucro;
    }
}
