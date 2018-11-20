<?php 
namespace Balbi\Strategy\Patos;

abstract class Pato
{

    /**
     *
     * @var ComportamentoVoar
     */
    protected $comportamentoVoar;

    /**
     *
     * @var ComportamentoGrasnar
     */
    protected $comportamentoGrasnar;

    public function voar()
    {
        return $this->comportamentoVoar->voar();
    }

    public function grasnar()
    {
        return $this->comportamentoGrasnar->Grasnar();
    }
}
