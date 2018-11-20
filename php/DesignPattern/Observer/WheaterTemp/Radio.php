<?php
namespace Balbi\Observer\WheaterTemp;

use Balbi\Observer\WheaterTemp\Dispositivos;


class Radio  extends Dispositivos {

    
    public function update($info) {
        
        echo "\n Estação de Radio : ".$info;
        
    }
    
}
