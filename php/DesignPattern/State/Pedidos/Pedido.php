<?php
namespace Balbi\State\Pedidos;

use Balbi\State\Pedidos\StatusPedido;
use Exception;
use Balbi\State\Pedidos\PedidoAprovado;
use Balbi\State\Pedidos\PedidoCancelado;
use Balbi\State\Pedidos\PedidoFinalizado;
use Balbi\State\Pedidos\PedidoEmAndamento;

class Pedido
{
	
	protected $valor;
	
	
	
	protected $status;
	
	public function __construct($valor,StatusPedido $status  = null)
	{
		$this->valor = $valor;
		
		
		$this->status =  $status == null ? new PedidoEmAndamento() : $status;
		
	}
	
	public function setStatus(StatusPedido $status)
	{
		$this->status = $status;
	}
	
	public function aprovar()
	{
		$this->status->aprovar($this);
	}
	
	public function cancelar()
	{
		$this->status->cancelar($this);
	}
	
	public function finalizar()
	{
		$this->status->finalizar($this);
	}
	
	public function status()
	{
		return get_class($this->status);
	}
	
}
	
	