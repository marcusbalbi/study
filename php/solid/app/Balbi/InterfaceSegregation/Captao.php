<?php

namespace Balbi\InterfaceSegregation;

class Captao {
    
                                // Gerenciar Nao deve receber TrabalhadorInterface pois
                                // precisaria validar se ele dorme ou nao, nesse caso ela recebe
                                 // gerenciavel nao precisando fazer nenhuma validacao
    //public function gerenciar(GTrabalhadorInterface $trabalhador)
    public function gerenciar(Gerenciavel $trabalhador)
    {
        
        /*
         * if($trabalhador instanceof TrabalhadorHumano)
        {
            $trabalhador->trabalhar();
            $trabalhador->dormir();
        }*/
        
        $trabalhador->gerenciar();
        
    }
    
}