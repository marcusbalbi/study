<?php

include_once '../../vendor/autoload.php';


$soldadoBrasileiro = new \Balbi\Factory\Exercito\Soldados\SoldadoBrasileiro();

$soldadoAmericano = new Balbi\Factory\Exercito\Soldados\SoldadoAmericano();


$soldadoAmericano->empunharPistola();

$soldadoAmericano->atacar();

$soldadoBrasileiro->empunharEspada();
$soldadoBrasileiro->atacar();