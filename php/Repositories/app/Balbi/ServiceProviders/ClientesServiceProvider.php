<?php

namespace Balbi\ServiceProviders;

use Illuminate\Support\ServiceProvider;

/**
 * Description of ClientesServiceProvider
 *
 * @author marcus
 */
class ClientesServiceProvider extends ServiceProvider {
    
    public function register() {
        
        
          $this->app->bind("Balbi\Repositories\ClientesRepositoryInterface","Balbi\Repositories\Eloquent\ClientesRepository");  
        
        
        
    }

}
