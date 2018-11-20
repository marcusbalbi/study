<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', 'Auth\LoginController@login')->name('login');
Route::post('logon', 'Auth\LoginController@logon');
Route::get('sair', 'Auth\LoginController@sair');

Route::group(['middleware' => 'auth'], function () {
  Route::resource('casais', 'CasaisController');
  
  Route::resource('casais/{casais_id}/listas', 'ListasController');
  
  Route::post('casais/{casais_id}/listas/add-item', 'ListasController@addItem');
  Route::post('casais/{casais_id}/listas/remove-item/{id}', 'ListasController@removeItem');
  
  Route::resource('produtos', 'ProdutosController');

});
