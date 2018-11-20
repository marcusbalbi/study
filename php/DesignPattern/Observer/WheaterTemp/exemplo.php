<?php

use Balbi\Observer\WheaterTemp\EstacaoMeteorologica;
use Balbi\Observer\WheaterTemp\CanalQuatro;
use Balbi\Observer\WheaterTemp\Canal10;
use Balbi\Observer\WheaterTemp\WheaterApp;
use Balbi\Observer\WheaterTemp\Radio;


$estacao = new EstacaoMeteorologica();


$canal4 = new CanalQuatro($estacao);
$radio = new Radio($estacao);
$app = new WheaterApp($estacao);

$estacao->setInfo("TEMPO CHUVOSO PARA TODO O DIA\n");
echo "\n\n======================= PASSADO UM DIA=============================\n\n";

$canal4->desfazerAssinatura();
$radio->desfazerAssinatura();
$canal10 = new Canal10($estacao);

$estacao->setInfo("TEMPO ABERTO DURANTE O DIA E PANCADAS DE CHUVA A NOITE\n");


