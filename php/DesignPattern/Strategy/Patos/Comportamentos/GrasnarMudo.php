<?php
namespace Balbi\Strategy\Patos\Comportamentos;

use Balbi\Strategy\Patos\Comportamentos\Interfaces\ComportamentoGrasnar;

class GrasnarMudo implements ComportamentoGrasnar
{

    public function grasnar()
    {
        return "Grasnar Mudo!";
    }
}
