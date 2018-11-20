<?php

use Balbi\Repositories\VendasRepository;

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('hello');
	}
        
        public function __construct(Balbi\Reporting\Vendas\RelatorioVendas $repo) {
            $this->repo = $repo;
        }
        
        protected $repo;
        
        public function teste()
        {
            
            return $this->repo->between('aa', 'bb');
        }

}
