<?php

namespace Balbi\Factory\Exercito\Soldados;

/**
 * Description of SoldadoAmericano
 *
 * @author marcus
 */
class SoldadoAmericano extends \Balbi\Factory\Exercito\Soldados\SoldadoAbstractMethod {


    protected function definirFabricaDeArmas() {
        return new \Balbi\Factory\Exercito\ArmasUSA\ArmaUSAFactory();
    }

    protected function definirNomeSoldado() {
        return "Soldado Americano";
    }

}
