<?php
namespace Balbi\Strategy\Patos\Comportamentos;

use Balbi\Strategy\Patos\Comportamentos\Interfaces\ComportamentoGrasnar;

class Grasnar implements ComportamentoGrasnar
{

    public function grasnar()
    {
        return "Pato Grasnando";
    }
}
