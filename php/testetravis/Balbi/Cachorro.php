<?php


namespace Balbi;

use Balbi\IAnimal;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Cachorro
 *
 * @author Marcus
 */
class Cachorro implements IAnimal{
    
    
    public function andar($distancia) {
        return "Andou $distancia";
    }

    public function comer($alimento) {
        return "COmeu $alimento";
    }

    public function comunicar() {
        return "Latir!";
    }

}
