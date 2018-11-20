<?php
namespace Balbi\Observer\WheaterTemp;

use Balbi\Observer\WheaterTemp\Dispositivos;


class Canal10 extends Dispositivos {
    
    public function update($mensagem) {
        echo  "INFORMAÇÔES URGENTES DO CANAL 10 :".$mensagem;
    }

}
