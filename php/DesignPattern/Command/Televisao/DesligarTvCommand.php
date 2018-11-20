<?php

namespace Balbi\Command\Televisao;


class DesligarTvCommand implements Commnad {

     private $televisao;


    public function __construct(Televisao $televisao) {
        $this->televisao = $televisao;
    }
    
    public function execute() {
        $this->televisao->desligar();
    }

}
