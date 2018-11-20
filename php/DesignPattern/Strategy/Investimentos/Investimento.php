<?php
namespace Balbi\Strategy\Investimentos;

use Balbi\Strategy\Investimentos\Conta;

interface Investimento
{
    public function calcular(Conta $conta);
}
