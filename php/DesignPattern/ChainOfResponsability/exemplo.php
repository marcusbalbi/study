<?php
	
use Balbi\ChainOfResponsability\Descontos\Orcamento;
use Balbi\ChainOfResponsability\Descontos\CalculadoraDeDesconto;

$calculadorDesconto = new CalculadoraDeDesconto(new Orcamento(100, 8));

echo "CHAIN OF RESPONSABILITY \n";
echo "O Desconto é :\n\n".$calculadorDesconto->Calcular()."\n\n";	