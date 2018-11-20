<?php


namespace Balbi\Command\Televisao;

use Balbi\Command\Televisao\Commnad;

class TocarDiscoHtCommand implements Commnad {
    
    private $homeTheater;


    public function __construct(HomeTheater $ht) {
        $this->homeTheater = $ht;
    }
    
    public function execute() {
    
        if($this->homeTheater->estaLigado() == false) {
            $this->homeTheater->ligar();
            $this->homeTheater->tocarCd();
        }
        
    }


}
