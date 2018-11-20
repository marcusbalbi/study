<?php

namespace Balbi\InterfaceSegregation;
/**
 * Description of Trabalhador
 *
 * @author marcus
 */
//class Trabalhador implements TrabalhadorInterface {
class TrabalhadorHumano implements Trabalhavel, Dormivel, Gerenciavel {
    
    public function trabalhar()
    {
        return "Trabalhando....";
    }
    
    public function dormir()
    {
        return "ZZzzZzZZZZZZ";
    }

    public function gerenciar() {
        
        $this->trabalhar();
        $this->dormir();
        
    }

}
