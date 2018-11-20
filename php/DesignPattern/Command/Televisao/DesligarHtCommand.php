<?php

namespace Balbi\Command\Televisao;

use Balbi\Command\Televisao\HomeTheater;


class DesligarHtCommand implements Commnad {

     private $homeTheater;


    public function __construct(HomeTheater $ht) {
        $this->homeTheater = $ht;
    }
    
    public function execute() {
        $this->homeTheater->desligar();
    }

}
