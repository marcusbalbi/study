<?php

namespace Balbi\Factory\Exercito\ArmasUSA;

/**
 * Description of PistolaUSA
 *
 * @author marcus
 */
class PistolaUSA extends \Balbi\Factory\Exercito\Armas\Pistola {
    
    
    
    public function golpear() {
        return 15;
    }

    public function obterNome() {
        return "Glock";
    }

}
