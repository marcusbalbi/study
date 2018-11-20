<?php
namespace Balbi\Builder\NotaFiscal;

use Balbi\Builder\NotaFiscal\ItemNotaFiscal;

/**
 * Description of NotaFiscal
 *
 * @author marcus
 */
class NotaFiscal {
    
    
    protected $cnpj;
    protected $valorBruto;
    protected $impostos;
    protected $data_emissao;
    protected $observacao;
    protected $itensNota = array();
    
    public function __construct($cnpj,$valorBruto,$impostos,array $itensNota,$data_emissao,$observacoes = "" ) {
        
        $this->cnpj = $cnpj;
        $this->valorBruto = $valorBruto;
        $this->impostos = $impostos;
        $this->itensNota = $itensNota;
        $this->data_emissao = $data_emissao;
        $this->observacao = $observacoes;
        
    }
    
}
