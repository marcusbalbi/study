<?php
namespace Balbi\Strategy\Patos\Comportamentos;

use Balbi\Strategy\Patos\Comportamentos\Interfaces\ComportamentoGrasnar;

class GrasnarGuinchar implements ComportamentoGrasnar
{
    public function grasnar()
    {
        return "Pato Guinchando";
    }
}
