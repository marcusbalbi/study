<?php

namespace Balbi\Reporting\Vendas\OutputFormatter;

/**
 * Description of HtmlOutPutFormatter
 *
 * @author Marcus
 */
class HtmlOutPutFormatter implements VendasOutputFormatter {
    
    
    
    public function output($vendas) {
    
        return "<h1>Vendas: $vendas</h1>";
        
    }

//put your code here
}
