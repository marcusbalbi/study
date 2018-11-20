<?php
namespace Balbi\Decorator\StarBuzz;

use Balbi\Decorator\StarBuzz\Bebida;

class CafePreto extends Bebida {

    public function __construct() {
        $this->descricao = "Café Preto Comun ";
    }

    public function pegarPreco()
    {
        return 0.50;
    }

}
