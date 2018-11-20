<?php


/**
 * Description of Circulo
 *
 * @author Marcus
 */
class Circulo implements FormaInterface {

    public $raio;
    
    
    public function __construct($raio) {
        $this->raio = $raio;
    }

    public function area() {
        return $this->raio * $this->raio * pi();
    }

}
