<?php

namespace Balbi\Command\Televisao;


class HomeTheater implements Aparelho {
    
    
     protected $ligada = false;
     
     protected $cd = null;


     public function desligar() {
        echo "Desligando Home Theater...\n";
        $this->ligada = false;
        echo "Home Theater desligado\n";
    }

    public function ligar() {
         echo "Ligando Home Theater...\n";
        $this->ligada = false;
        echo "Home Theater Ligado\n";
    }
    
    public function inserirCd($nomeCd) {
        $this->cd = $nomeCd;
    }
    
    public function ejetarCd() {
        $this->cd = null;
    }
    
    public function possuiCd()
    {
        return !empty($this->cd);
    }
    
    public function tocarCd() {
        if($this->possuiCd()) {
            echo "Tocando o disco: ".$this->cd."...\n";
        } else {
            echo "Nenhum disco para tocar..\n";
        }
    }
    
    public function estaLigado()
    {
        return $this->ligada;
    }

}
