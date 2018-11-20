<?php
namespace Balbi\Strategy\Patos;

use Balbi\Strategy\Patos\Comportamentos\NaoVoar;
use Balbi\Strategy\Patos\Comportamentos\GrasnarMudo;

class PatoMadeira extends Pato
{
    
    public function __construct()
    {
        $this->comportamentoVoar  = new NaoVoar();
        $this->comportamentoGrasnar = new GrasnarMudo();
    }
}
