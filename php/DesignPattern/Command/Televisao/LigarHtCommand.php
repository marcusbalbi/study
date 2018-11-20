<?php

namespace Balbi\Command\Televisao;

use Balbi\Command\Televisao\Commnad;
use Balbi\Command\Televisao\HomeTheater;


class LigarHtCommand implements Commnad
{   
    private $homeTheater;

    public function __construct(HomeTheater $ht) {
        $this->homeTheater = $ht;
    }
    
    public function execute() {
        $this->homeTheater->ligar();
        
        if($this->homeTheater->possuiCd()) {
            $this->homeTheater->tocarCd();
        }
    }


}
