<?php
namespace Balbi\Observer\WheaterTemp;

use Balbi\Observer\WheaterTemp\Dispositivos;



class CanalQuatro extends Dispositivos {
       
    public function update($mensagem) {
        
        echo "\n Informações do Canal Quatro sobre o Tempo  :".$mensagem;
        
    }

    
    
    

}
