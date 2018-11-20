<?php


use Balbi\Decorator\StarBuzz\CafePreto;
use Balbi\Decorator\StarBuzz\ChocolateDecorator;
use Balbi\Decorator\StarBuzz\CanelaDecorator;

$cafePreto = new CafePreto();


$bebida = new ChocolateDecorator(new CanelaDecorator($cafePreto));

echo "Bebida : ".$bebida->pegarDescricao()."\n\n";
echo "\n\nTotal:".number_format($bebida->pegarPreco(), 2, ',','')."\n\n";