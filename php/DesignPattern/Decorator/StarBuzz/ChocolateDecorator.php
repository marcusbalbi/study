<?php
namespace Balbi\Decorator\StarBuzz;

use Balbi\Decorator\StarBuzz\CondimentosDecorator;

class ChocolateDecorator extends CondimentosDecorator {

    
    public function pegarDescricao() {
        return  $this->bebida->pegarDescricao() . ", Chocolate";
    }

    public function pegarPreco() {
        return $this->bebida->pegarPreco() + 1.50;
    }

}
