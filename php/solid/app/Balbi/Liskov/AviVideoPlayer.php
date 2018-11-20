<?php

namespace Balbi\Liskov;

/**
 * Description of AviVideoPlayer
 *
 * @author marcus
 */
class AviVideoPlayer extends VideoPlayer {
    
    
    //Assinaturas devem bater, no caso PHP que não tem tipo no retorno deve-se tomar um cuidado ainda maior.
    public function reproduzir($arquivo) {
        
         
        if(pathinfo($arquivo,PATHINFO_EXTENSION) !== 'avi')
        {
            //As Exceptions caso existam devem ser pelo menos do mesmo tipo para facilitar o tratamento
            throw new Exception; //Viola o Principio de Substituição de Liskov pois, Em um situação em que eu tenha que passar o VideoPlayer caso eu passe AviVideoPlayer , o consumidor dessa classe
            //tera de tratar o retorno já que AviVideoPlayer lança uma Exception e Video Player não.
        }
        
    }
    
}
