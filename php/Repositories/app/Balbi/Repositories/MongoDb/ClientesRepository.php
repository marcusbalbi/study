<?php

namespace Balbi\Repositories\MongoDb;

use Balbi\Repositories\Interfaces\ClientesRepositoryInterface;

/**
 * Description of ClientesRepository
 * Apenas testando Repositorios nao implementar deste modo
 * 
 * CODIGO DE EXEMPLO
 * 
 *  NAO UTILIZAR
 * @author marcus
 */
class ClientesRepository implements ClientesRepositoryInterface {
   
    
    
    public function getAll()
    {
        $mongo = new \MongoClient();
        
        $db = $mongo->selectDB("testedb");
        
        $clientes =  $db->selectCollection("clientes");
        
        $cli =  ($clientes->find());
        
        foreach($cli as $result)
        {
            $r[] = $result;
        }
        
        return $r;
        
       
    }

    public function find($id)
    {
        
       $mongo = new \MongoClient();
        
        $db = $mongo->selectDB("testedb");
        
        $clientes =  $db->selectCollection("clientes");
        
        $cli =  ($clientes->findOne(['id'=>(int)$id]));
        
        return $cli;
        
    }

}
