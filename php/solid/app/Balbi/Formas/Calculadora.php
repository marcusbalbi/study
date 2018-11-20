<?php

namespace \Balbi\Formas;
/**
 * Description of Calculadora
 *
 * @author Marcus
 */
class Calculadora {
    
    
    
   /* public function calcular($formas)
    {
        $area = [];
        
        
        foreach ($formas as $forma) {
            
            //Quebra o Principio de Aberto/Fechado pois esta classe não deveria ser modificada a cada vez que uma nova Forma é necessaria
            //ex: Caso eu precisasse de um triangulo teria qeu colocar outro if/else para validar o circulo/triangulo e calcular da forma adequada
            //Oque o Tio Bob diz que se deve separar o comportamento herdado atraz de uma interface e utilizar nas dependencias
            if(is_a($forma,"Quadrado"))
            {
                $area[] = $forma->altura * $forma->largura;
            }
            else
            {
                $area[] = $forma->raio * $forma->raio * pi();
            }
        }
        
        return array_sum($area);
        
    }*/
    
    // Este método nunca mais precisara ser modificado já que as dependencias dele implementan um metodo area()
    //ele nao tem que se preocupar qual a forma basta calcular sua area e retornar, de acordo com o principop Aberto/Fechado
    public function calcular($formas)
    {
         $area = [];
        
        
        foreach ($formas as $forma) {
            $area[] = $forma->area();
        }
        
        return array_sum($area);
    }
    
    
}
