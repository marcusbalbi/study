<?php

namespace Balbi\Factory\Exercito\ArmasUSA;

class EspadaUSA extends \Balbi\Factory\Exercito\Armas\Espada {

    public function golpear() {
        return 5;
    }

    public function obterNome() {
        return parent::obterNome() . " do USA";
    }

}
