<?php

namespace Balbi\ChainOfResponsability\Descontos;

use Balbi\ChainOfResponsability\Descontos\Desconto;

class DescontoCincoItens implements Desconto
{
	protected $proximo;
	
	public function desconto(Orcamento $orcamento)
	{
		if($orcamento->getQuantidade() >= 5)
		{
			
			return $orcamento->getValor() * 0.05;
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