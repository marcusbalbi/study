<?php

namespace Balbi\Factory\Exercito\ArmasUSA;

class FacaUSA extends \Balbi\Factory\Exercito\Armas\Faca {

    public function golpear() {
        return 3;
    }

    public function obterNome() {
        return parent::obterNome() . " do USA";
    }

}
