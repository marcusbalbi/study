<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace Balbi\Strategy\Investimentos;

use Balbi\Strategy\Investimentos\Conta;

/**
 * Description of InvestidorModerado
 *
 * @author 7010
 */
class InvestidorModerado implements Investimento
{
    public function calcular(Conta $conta)
    {
        
          $chances = mt_rand(1,100);
          
          if($chances < 50)
              $lucro = $conta->getFundos() * 0.07;
          else
              $lucro = $conta->getFundos() * 0.25;

          return $lucro;
    }
}
