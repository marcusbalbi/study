<?php

interface LivroInterface
{
	public function abrirLivro();
	public function passarPagina();
}

interface LivroDigitalInterface
{
	public function ligarAparelho();
	public function clicarBotaoPassaPagina();
}

class LivroDigital implements LivroDigitalInterface
{
	public function ligarAparelho()
	{
	  var_dump("Ligando Aparelho");
	}
	
	public function clicarBotaoPassaPagina()
	{
	 var_dump("Passando Pagina pelo livro DIgital");
	}
}

class LivroAdapter implements LivroInterface
{
	protected $livroDigital;

	public function __construct(LivroDigitalInterface $livroDigital)
	{
	 $this->livroDigital = $livroDigital;
	}

	public function abrirLivro()
	{
		$this->livroDigital->ligarAparelho();
	}

	public function passarPagina()
	{
		$this->livroDigital->clicarBotaoPassaPagina();
	}
}

class Pessoa
{
	public function lerUmLivro(LivroInterface $livro)
	{
		$livro->abrirLivro();
		$livro->passarPagina();
	}
}

$kindle = new LivroDigital();

$livroAdapter = new LivroAdapter($kindle);


$pessoa = new Pessoa();

$pessoa->lerUmLivro($livroAdapter);
















?>
