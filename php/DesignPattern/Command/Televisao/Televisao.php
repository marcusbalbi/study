<?php

namespace Balbi\Command\Televisao;
/**
 * RECEIVER
 */
class Televisao implements Aparelho {
   
    protected $ligada = false;
    
    protected $volume = 0;
    
    public function ligar()
    {
        echo "Ligando TV...\n";
        $this->ligada = true;
        echo "TV Ligada\n";
        
    }
    
    public function desligar()
    {
        echo "Desligando TV...\n";
        $this->ligada = false;
        echo "TV Desligada\n";
    }
    
    public function aumentarVolume()
    {
        $this->volume++;
    }
    
    public function diminuirVolume()
    {
        $this->volume--;
    }
    
}
