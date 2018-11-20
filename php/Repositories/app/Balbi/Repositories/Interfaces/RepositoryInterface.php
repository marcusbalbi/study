<?php

namespace Balbi\Repositories\Interfaces;

/**
 *
 * @author marcus
 */
interface RepositoryInterface {
    
    
    public function getAll();
    
    public function find($id);
    
}
