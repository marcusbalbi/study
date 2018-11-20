<?php

use Balbi\Strategy\Investimentos\Conta;
use Balbi\Strategy\Investimentos\InvestirdorConservador;
use Balbi\Strategy\Investimentos\InvestidorModerado;
use Balbi\Strategy\Investimentos\InvestidorArrojado;

$realizador = new \Balbi\Strategy\Investimentos\RealizadorDeInvestimentos();


echo "LUCRO DE INVESTIMENTO : ".$realizador->investir(new Conta(25000), new InvestidorArrojado());