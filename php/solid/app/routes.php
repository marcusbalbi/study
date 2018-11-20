<?php


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
        $relatorio = new Balbi\Reporting\Vendas\RelatorioVendas;
        
        return $relatorio->between("2014-01-01", "2014-12-31");
        
});


Route::get("/teste","HomeController@teste");