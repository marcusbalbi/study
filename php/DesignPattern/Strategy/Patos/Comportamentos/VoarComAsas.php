<?php 
namespace Balbi\Strategy\Patos\Comportamentos;

use Balbi\Strategy\Patos\Comportamentos\Interfaces\ComportamentoVoar;

class VoarComAsas implements ComportamentoVoar
{

    public function voar()
    {
        return "Voando com Asas";
    }
}
