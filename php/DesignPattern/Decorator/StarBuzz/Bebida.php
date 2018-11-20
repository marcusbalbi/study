<?php

namespace Balbi\Decorator\StarBuzz;


abstract class Bebida {
    
    protected $descricao = "Bebida Desconhecida";


    function pegarDescricao()
    {
        return $this->descricao;
    }
    
    abstract function pegarPreco();
    
}
