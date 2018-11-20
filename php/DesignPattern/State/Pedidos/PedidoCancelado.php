<?php
namespace Balbi\State\Pedidos;

use Balbi\State\Pedidos\Pedido;
use Balbi\State\Pedidos\StatusPedido;
use Balbi\State\Pedidos\PedidoAprovado;
use Balbi\State\Pedidos\PedidoFinalizado;
use Balbi\State\Pedidos\PedidoEmAndamento;
use Exception;

class PedidoCancelado implements StatusPedido
{
	public function aprovar(Pedido $pedido)
	{
		throw new Exception("Pedido cancelado nao pode ser aprovado");
	}
	
	public function cancelar(Pedido $pedido)
	{
		throw new Exception("Pedido já se encontra cancelado");
	}
	
	public function finalizar(Pedido $pedido)
	{
		$pedido->setStatus(new PedidoFinalizado());
	}
	
}
	
	