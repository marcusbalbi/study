<?php
require_once '../vendor/autoload.php';

use Balbi\Command\Televisao\ControleRemotoUniversal;
use Balbi\Command\Televisao\DesligarHtCommand;
use Balbi\Command\Televisao\DesligarTvCommand;
use Balbi\Command\Televisao\HomeTheater;
use Balbi\Command\Televisao\LigarHtCommand;
use Balbi\Command\Televisao\LigarTvCommand;
use Balbi\Command\Televisao\Televisao;
use Balbi\Command\Televisao\TocarDiscoHtCommand;

$tv = new Televisao();
$ht = new HomeTheater();
$controleRemoto = new ControleRemotoUniversal();

//$ht->inserirCd("Deep purple");

$controleRemoto->adicionarComandoBotao('ligartv',new LigarTvCommand($tv));
$controleRemoto->botaoDesligarTv(new DesligarTvCommand($tv));

$controleRemoto->pressionarBotaoLigarTv();
echo "===============================================\n";
$controleRemoto->pressionarBotao('desligartv');
echo "===============================================\n";

$controleRemoto->adicionarComandoBotao('ligarht', new LigarHtCommand($ht));
$controleRemoto->adicionarComandoBotao('desligarht', new DesligarHtCommand($ht));
$controleRemoto->adicionarComandoBotao('tocardiscoht', new TocarDiscoHtCommand($ht));

$controleRemoto->pressionarBotaoLigarHt();
$ht->ejetarCd();
echo "===============================================\n";
$controleRemoto->pressionarBotao('desligarht');
echo "===============================================\n";
$controleRemoto->pressionarBotao('tocardiscoht');
echo "===============================================\n";






