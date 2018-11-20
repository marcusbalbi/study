<?php
namespace Balbi\Strategy\Patos\Comportamentos;

use Balbi\Strategy\Patos\Comportamentos\Interfaces\ComportamentoVoar;

class NaoVoar implements ComportamentoVoar
{

    public function voar()
    {
        return "Nao Voa";
    }
}
