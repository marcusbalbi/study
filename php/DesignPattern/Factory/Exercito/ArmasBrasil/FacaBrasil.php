<?php

namespace Balbi\Factory\Exercito\ArmasBrasil;

class FacaBrasil extends \Balbi\Factory\Exercito\Armas\Faca {

    public function golpear() {
        return 2;
    }

    public function obterNome() {
        return parent::obterNome() . " do Brasil";
    }

}
