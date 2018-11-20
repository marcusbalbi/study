<?php
namespace Balbi\Observer\WheaterTemp;

use Balbi\Observer\WheaterTemp\Dispositivos;


class WheaterApp extends Dispositivos {
    
   
    public function update($mensagem) {
        echo  "\n App de Previsão do Tempo : ".$mensagem;
    }
    
}
