<?php
include_once '../vendor/autoload.php';

use Balbi\Singleton\Configuracao\Configuracao;


$config = Configuracao::getInstance();

$config->nome = "Maria";
$config->email = "joana@gmail.com";

var_dump($config->toArray());