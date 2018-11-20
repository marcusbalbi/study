<?php
namespace Balbi\Decorator\StarBuzz;


abstract class CondimentosDecorator extends Bebida {
   
    /**
     *
     * @var Bebida
     */
    protected $bebida;


    public function __construct(Bebida $bebida) {
        $this->bebida = $bebida;
        
        return $this;
        
    }
    
}
