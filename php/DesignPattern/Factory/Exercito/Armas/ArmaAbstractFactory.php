<?php

namespace Balbi\Factory\Exercito\Armas;


abstract class ArmaAbstractFactory {

    
    /**
     * @return Armas\Espada Description
     */
    public abstract function criarEspada();


    /**
     * @return Armas\Faca Description
     */
    public abstract function criarFaca();
    
    
    
    public abstract function criarPistola();
    
}
