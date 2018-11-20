<?php

namespace Balbi\Factory\Exercito\Soldados;

use Balbi\Factory\Exercito\Armas\Arma;

abstract class SoldadoAbstractMethod {

    /**
     *
     * @var ArmaAbstractFactory
     */
    protected $fabricaArmas;

    /**
     *
     * @var Armas\Arma
     */
    protected $armaEmpunhada;

    protected abstract function definirFabricaDeArmas();
    
    protected abstract function definirNomeSoldado();

    public function __construct() {
        $this->fabricaArmas = $this->definirFabricaDeArmas();
    }

    private function empunhar(Arma $arma) {
        $this->armaEmpunhada = $arma;
        echo "Soldado empunhando a arma " . $arma->obterNome() . "\n\n";
    }

    public function __call($name, $arguments) {

        if (strpos($name, "empunhar") !== false) {

            $arma = str_replace("empunhar", "criar", $name);

            if (method_exists($this->fabricaArmas, $arma)) {
                $this->armaEmpunhada = $this->fabricaArmas->$arma();
            }
        }
    }

    public function atacar() {


        if ($this->armaEmpunhada == null) {
            throw new \Exception("Sem arma na mao");
        }
        echo "{$this->definirNomeSoldado() } atacando\n\n";
        echo "Utilizando a arma  " . $this->armaEmpunhada->obterNome() . "\n\n";

        echo "Golpe desferido, dano causado:" . $this->armaEmpunhada->golpear() . "\n\n";
        
        echo "==================================================================\n\n";
    }

}
