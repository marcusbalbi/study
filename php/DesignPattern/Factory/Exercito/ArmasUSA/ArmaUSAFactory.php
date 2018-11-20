<?php

namespace Balbi\Factory\Exercito\ArmasUSA;

/**
 * Description of Faca
 *
 * @author marcus
 */
class ArmaUSAFactory extends \Balbi\Factory\Exercito\Armas\ArmaAbstractFactory {
    

    public function criarEspada() {
        return new EspadaUSA();
    }

    public function criarFaca() {
        return new FacaUSA();
    }

    public function criarPistola() {
          return new PistolaUSA();
    }

}
