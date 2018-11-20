<?php
namespace Balbi\Strategy\Patos;

use Balbi\Strategy\Patos\Comportamentos\NaoVoar;
use Balbi\Strategy\Patos\Comportamentos\GrasnarGuinchar;

class PatoBorracha extends Pato
{

    public function __construct()
    {
        $this->comportamentoVoar = new NaoVoar();
        $this->comportamentoGrasnar = new GrasnarGuinchar();
    }
}
