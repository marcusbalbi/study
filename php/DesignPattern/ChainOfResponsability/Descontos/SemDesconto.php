<?php

namespace Balbi\ChainOfResponsability\Descontos;

use Balbi\ChainOfResponsability\Descontos\Desconto;

class SemDesconto implements Desconto
{
	public function desconto(Orcamento $orcamento)
	{
		return 0;
	}
	
	public function setProximo(Desconto $proximo)
	{
		$this->proximo = null;	
		
		return null;
	}
	
}