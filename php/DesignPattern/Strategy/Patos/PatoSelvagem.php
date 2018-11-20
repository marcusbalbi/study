<?php
namespace Balbi\Strategy\Patos;

use Balbi\Strategy\Patos\Comportamentos\VoarComAsas;
use Balbi\Strategy\Patos\Comportamentos\Grasnar;

class PatoSelvagem extends Pato
{
    
    public function __construct()
    {

        $this->comportamentoVoar = new VoarComAsas();
        $this->comportamentoGrasnar = new Grasnar();
    
    }
}
