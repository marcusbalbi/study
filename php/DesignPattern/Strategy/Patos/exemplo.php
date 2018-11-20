<?php

use Balbi\Strategy\Patos\PatoSelvagem;
use Balbi\Strategy\Patos\PatoMadeira;
use Balbi\Strategy\Patos\PatoBorracha;

$patoSelvagem = new PatoSelvagem();

echo $patoSelvagem->voar()."\n";
echo $patoSelvagem->grasnar()."\n";

echo "===================================\n";
$patoMadeira = new PatoMadeira();

echo $patoMadeira->grasnar()."\n";
echo $patoMadeira->voar()."\n";

echo "===================================\n";
$patoBorracha = new PatoBorracha();


echo $patoBorracha->voar()."\n";
echo $patoBorracha->grasnar()."\n";
