<?php
namespace Balbi\Factory\Exercito\Soldados;

/**
 * Description of SoldadoBrasileiro
 *
 * @author marcus
 */
class SoldadoBrasileiro extends \Balbi\Factory\Exercito\Soldados\SoldadoAbstractMethod {
    
    
    
    protected function definirFabricaDeArmas() {
        return new \Balbi\Factory\Exercito\ArmasBrasil\ArmaBrasilFactory();
    }

    protected function definirNomeSoldado() {
        return "soldado Brasileiro";
    }

}
