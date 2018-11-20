<?php

namespace Balbi\InterfaceSegregation;
/**
 * Description of TrabalhadorAndroid
 *
 * @author marcus
 */
class TrabalhadorAndroid  implements Trabalhavel, Gerenciavel {
//class TrabalhadorAndroid  implements TrabalhadorInterface{
  
    // Classes nao podem ser Obrigadas a implementar métodos que elas nao precisam.
 /*   public function dormir() {
        return null; // Quebra o Principio de segregação de Interfaces, pois TrabalhadorAndroid não precisa dormir
        
    }*/

    public function trabalhar() {
        return "Android Trabalhando";
    }

    public function gerenciar() {
        
        $this->trabalhar();
        
    }

//put your code here
}
