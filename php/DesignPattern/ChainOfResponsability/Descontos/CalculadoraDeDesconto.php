<?php
namespace Balbi\ChainOfResponsability\Descontos;	
	
use Balbi\ChainOfResponsability\Descontos\DescontoMilReais;
use Balbi\ChainOfResponsability\Descontos\DescontoQuinhentosReais;
use Balbi\ChainOfResponsability\Descontos\DescontoCincoItens;
use Balbi\ChainOfResponsability\Descontos\SemDesconto;
use Balbi\ChainOfResponsability\Descontos\Orcamento;

class CalculadoraDeDesconto
{
	protected $orcamento;
	
	public function __construct(Orcamento $orcamento)
	{
		
		$this->orcamento  = $orcamento;
	}
	
	public function Calcular()
	{
		$desconto = new DescontoMilReais();
		$desconto->setProximo(new DescontoQuinhentosReais())
				 ->setProximo(new DescontoCincoItens())
				 ->setProximo(new SemDesconto());
				 
				 return number_format($desconto->desconto($this->orcamento),2);
				 
	}
}