<?php

namespace Balbi\Factory\Exercito\ArmasBrasil;


class ArmaBrasilFactory extends \Balbi\Factory\Exercito\Armas\ArmaAbstractFactory {
    
    


    public function criarEspada() {
        return new EspadaBrasil();
    }

    public function criarFaca() {
        return new FacaBrasil();
    }

    public function criarPistola() {
        return new PistolaBrasil();
    }

}
