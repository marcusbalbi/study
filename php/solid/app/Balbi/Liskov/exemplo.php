<?php

interface LessonRepositoryInterface
{
    /**
     * @return Array
     */
    public function getAll();
}

/**
 * Description of exemplo
 *
 * @author marcus
 */
class FileLessonRepository implements LessonRepositoryInterface {
    
    
    public function getAll() {
            return [];
    }

//put your code here
}

class EloquentLessonRepository implements LessonRepositoryInterface
{
    
    
    
    //Quebra o Principio de Substituição de Liskov pois retorna um tipo diferente do contrato
    /*public function getAll() {
       
     *  
        return new Collection([]);
        
    }*/
    
 public function getAll() {
        return (new Collection([]))->toArray();
    }

}


class Resposta
{
    private $repository;
    
    public function __construct(LessonRepositoryInterface $lessonRepo) {
        $this->repository = $lessonRepo;
    }
    
    public function responder()
    {
        return $this->repository->getAll(); //SEMPRE RETORNARA UM ARRAY
        
        
        //Nao preciso ficar validando a saida do método pois eu sei exatamente como ela deve ser 
        //Quando um método for obrigado a verificar o tipo , Grandes Chances de estar quebrando este ou outro principio
        /*
         * $retorno = $this->repository->getAll();
         * 
         * if(is_a($retorno, 'Collection')
         * {
         *      return $retorno->toArray()
         * }
         * else
         *      return $retorno;
         * 
         * 
         */
        
    }
    
}
