<?php

namespace Balbi\ChainOfResponsability\Descontos;

use Balbi\ChainOfResponsability\Descontos\Desconto;


class DescontoQuinhentosReais implements Desconto
{
	protected $proximo;
	
	public function desconto(Orcamento $orcamento)
	{
		if($orcamento->getValor() > 500)
		{
			return $orcamento->getValor() * 0.10;
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