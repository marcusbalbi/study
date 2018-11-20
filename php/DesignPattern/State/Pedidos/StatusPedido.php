<?php
namespace Balbi\State\Pedidos;

use Balbi\State\Pedidos\Pedido;

interface StatusPedido
{
	public function aprovar(Pedido $pedido);
	
	public function cancelar(Pedido $pedido);
	
	public function finalizar(Pedido $pedido);
	
}
	
	