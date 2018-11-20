<?php

namespace Balbi\Factory\Exercito\ArmasBrasil;

/**
 * Description of PistolaBrasil
 *
 * @author marcus
 */
class PistolaBrasil extends \Balbi\Factory\Exercito\Armas\Pistola {
    
    public function golpear() {
           return 10;
    }

    public function obterNome() {
        return "Taurus";
    }

}
