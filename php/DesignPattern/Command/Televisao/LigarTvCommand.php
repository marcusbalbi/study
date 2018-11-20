<?php

namespace Balbi\Command\Televisao;

use Balbi\Command\Televisao\Commnad;
use Balbi\Command\Televisao\Televisao;


class LigarTvCommand implements Commnad
{   
    private $televisao;

    public function __construct(Televisao $televisao) {
        $this->televisao = $televisao;
    }
    
    public function execute() {
        $this->televisao->ligar();  
    }


}
