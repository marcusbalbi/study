<?php

namespace Balbi\Formas;

/**
 * Description of Quadrado
 *
 * @author Marcus
 */
class Quadrado implements \FormaInterface {
    
    public $altura;
    
    public $largura;
    
    
    public function __construct($altura, $largura) {
        $this->altura = $altura;
        $this->largura = $largura;
        
    }

    public function area() {
        return $this->altura * $this->largura;
    }

}
