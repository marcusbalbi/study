<?php

namespace Balbi\Repositories\Eloquent;

use Balbi\Repositories\Interfaces\ClientesRepositoryInterface;

/**
 * Description of ClientesRepository
 *
 * @author marcus
 */
class ClientesRepository implements ClientesRepositoryInterface {
   
    
    
    public function getAll()
    {
        
        return \Clientes::all();
    }

    public function find($id)
    {
        
        return \Clientes::find($id);
        
    }

}
