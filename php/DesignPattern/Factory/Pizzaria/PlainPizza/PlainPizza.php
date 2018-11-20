<?php

namespace Balbi\Factory\Pizzaria\PlainPizza;

/**
 *
 * @author marcus
 */
abstract class PlainPizza
{
   
    public function prepare()
    {
        echo "Preparando a pizza de {$this->tipo()}...\n";
    }
    
    public function bake()
    {
        echo "Assando a pizza de : {$this->tipo()}...\n";
    }
    
    public function cut()
    {
        echo "Cortando a pizza de : {$this->tipo()}...\n";
    }
    
    public function box()
    {
        echo "Colocando na caixa a pizza de : {$this->tipo()}...\n";
    }
    
    /**
     * @return String O tipo da Pizza
     */
    public abstract function tipo();
    
    
}
