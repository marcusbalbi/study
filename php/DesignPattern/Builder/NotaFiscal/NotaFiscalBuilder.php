<?php

namespace Balbi\Builder\NotaFiscal;

use Balbi\Builder\NotaFiscal\ItemNotaFiscal;
use Balbi\Builder\NotaFiscal\NotaFiscal;

class NotaFiscalBuilder {
   
    protected $cnpj;
    protected $valorBruto = 0;
    protected $impostos = 0;
    protected $data_emissao;
    protected $observacao;
    protected $itensNota = array();

    
    public function __construct() {
        $this->data_emissao = date("Y-m-d");
    }

   public function comCnpj($cnpj)
   {
       $this->cnpj  = $cnpj;
       
       return $this;
   }
   
   public function comDataEmissao($dataEmissao)
   {
       $this->data_emissao = $dataEmissao;
       
       return $this;
   }
   
   
   public function comObservacao($observacao)
   {
       $this->observacao = $observacao;
       
       return $this;
   }
   
   public function addItem(ItemNotaFiscal $item)
   {
       $this->itensNota[] = $item;
       
       $this->valorBruto+= $item->getValorTotal();
       
       return $this;
       
   }
   
   public function getValorBruto()
   {
       return $this->valorBruto;
   }
   
   public function calcularImpostos()
   {
       return $this->valorBruto * 0.20;
   }
    
    
    public function build()
    {
        return new NotaFiscal($this->cnpj, $this->getValorBruto(), $this->calcularImpostos(), $this->itensNota, $this->data_emissao,$this->observacao);
    }
    
}
