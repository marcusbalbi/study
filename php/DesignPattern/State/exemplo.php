<?php
	
	
use Balbi\State\Pedidos\Pedido;
use Balbi\State\Pedidos\StatusPedido;
use Balbi\State\Pedidos\PedidoAprovado;
use Balbi\State\Pedidos\PedidoCancelado;
use Balbi\State\Pedidos\PedidoFinalizado;
use Balbi\State\Pedidos\PedidoEmAndamento;

$pedido = new Pedido(250, new PedidoFinalizado);

try
{

$pedido->cancelar();	


echo "\n\nO STATUS DO PEDIDO AGORA é ".$pedido->status()."\n\n";	
	
}
catch(Exception $e)
{
	echo "\n\nNAO FOI POSSIVEL TROCAR DE STATUS : ".$e->getMessage()."\n\n";
}