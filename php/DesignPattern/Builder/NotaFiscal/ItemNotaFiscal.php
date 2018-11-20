<?php
namespace Balbi\Builder\NotaFiscal;

/**
 * Description of NotaFiscal
 *
 * @author marcus
 */
class ItemNotaFiscal {
    
    
    protected $valorUnit;
    protected $quantidade;


    public function __construct($valorUnit, $quantidade)
    {
        $this->valorUnit = $valorUnit;
        $this->quantidade = $quantidade;
      
        
    }
    
    public function getValorTotal()
    {
        return $this->valorUnit * $this->quantidade;
    }
    
}
