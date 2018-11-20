<?php
namespace Balbi\State\Pedidos;

use Balbi\State\Pedidos\Pedido;
use Balbi\State\Pedidos\StatusPedido;
use Balbi\State\Pedidos\PedidoCancelado;
use Balbi\State\Pedidos\PedidoEmAndamento;
use Exception;

class PedidoFinalizado implements StatusPedido
{
	public function aprovar(Pedido $pedido)
	{
		throw new Exception("Pedido finalizado nao pode ser aprovado");
	}
	
	public function cancelar(Pedido $pedido)
	{
		throw new Exception("Pedido finalizado nao pode ser cancelado");
	}
	
	public function finalizar(Pedido $pedido)
	{
		throw new Exception("Pedido já se encontra finalizado");
	}
	
}
	
	