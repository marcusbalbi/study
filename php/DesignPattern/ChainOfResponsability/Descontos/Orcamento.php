<?php
namespace Balbi\ChainOfResponsability\Descontos;

class Orcamento
{
	protected $valor;
	protected $qtdItens;
	
	public function __construct($valor,$qtdItens)
	{
		$this->valor = $valor;
		$this->qtdItens = $qtdItens;
		
	}
	
	public function getValor()
	{
		return $this->valor;
	}
	
	public function getQuantidade()
	{
		return $this->qtdItens;
	}
	
}