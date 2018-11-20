<?php
namespace Balbi\Decorator\StarBuzz;

use Balbi\Decorator\StarBuzz\CondimentosDecorator;

class CanelaDecorator extends CondimentosDecorator {
    
    public function pegarDescricao() {
        return $this->bebida->pegarDescricao() . ", Canela ";
    }

    public function pegarPreco() {
        return $this->bebida->pegarPreco() + 0.50;
    }

}
