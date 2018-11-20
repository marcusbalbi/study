<?php

namespace Balbi\Factory\Exercito\ArmasBrasil;

class EspadaBrasil extends \Balbi\Factory\Exercito\Armas\Espada {

    public function golpear() {
        return 3;
    }

    public function obterNome() {
        return parent::obterNome() . " do Brasil";
    }

}
