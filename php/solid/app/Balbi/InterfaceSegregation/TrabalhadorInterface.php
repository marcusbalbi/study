<?php

namespace Balbi\InterfaceSegregation;

/**
 *
 * @author marcus
 * Esta Interface é Ruin pois obriga qualquer trabalhador a implementar dormir, e nen
 * todo trabalhador dorme no caso dos Androids
 */
interface TrabalhadorInterface {
    
    public function trabalhar();
    
    public function dormir();
    
}
