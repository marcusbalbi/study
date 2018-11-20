<?php

namespace Balbi\ChainOfResponsability\Descontos;

use Balbi\ChainOfResponsability\Descontos\Desconto;

class DescontoMilReais implements Desconto
{
	protected $proximo;
	
	public function desconto(Orcamento $orcamento)
	{
		
		
		if($orcamento->getValor() > 1000)
		{
			return $orcamento->getValor() * 0.15;
		}
		else
			return $this->proximo->desconto($orcamento);
	}
	
	public function setProximo(Desconto $proximo)
	{
		$this->proximo = $proximo;
		
		return $proximo;	
	}
	
}