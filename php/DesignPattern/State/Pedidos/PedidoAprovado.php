<?php
namespace Balbi\State\Pedidos;

use Balbi\State\Pedidos\Pedido;
use Balbi\State\Pedidos\StatusPedido;
use Balbi\State\Pedidos\PedidoCancelado;
use Balbi\State\Pedidos\PedidoFinalizado;
use Balbi\State\Pedidos\PedidoEmAndamento;
use Exception;


class PedidoAprovado implements StatusPedido
{
	public function aprovar(Pedido $pedido)
	{
		throw new Exception("Pedido já esta Aprovado");
	}
	
	public function cancelar(Pedido $pedido)
	{
		$pedido->setStatus(new PedidoCancelado());
	}
	
	public function finalizar(Pedido $pedido)
	{
		$pedido->setStatus(new PedidoFinalizado());
	}
	
}
	
	