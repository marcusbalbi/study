<?php
namespace Balbi\State\Pedidos;

use Balbi\State\Pedidos\StatusPedido;
use Exception;
use Balbi\State\Pedidos\PedidoAprovado;
use Balbi\State\Pedidos\PedidoCancelado;
use Balbi\State\Pedidos\PedidoFinalizado;




class PedidoEmAndamento implements StatusPedido
{
	public function aprovar(Pedido $pedido)
	{
		$pedido->setStatus(new PedidoAprovado());
	}
	
	public function cancelar(Pedido $pedido)
	{
		$pedido->setStatus(new PedidoCancelado());
	}
	
	public function finalizar(Pedido $pedido)
	{
		throw new Exception("Pedido em Andamento nao pode ser finalizado");
	}
	
}
	
	