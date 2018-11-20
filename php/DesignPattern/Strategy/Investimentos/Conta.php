<?php
namespace Balbi\Strategy\Investimentos;

class Conta
{
    /**
     *
     * @var double
     */
    protected $fundos;
    
    public function __construct($fundos)
    {
        $this->fundos = $fundos;
    }
    
    
    public function getFundos()
    {
        return $this->fundos;
    }
    
}
