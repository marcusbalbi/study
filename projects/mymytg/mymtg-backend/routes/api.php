<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');


Route::resource('/type','Cards\TypesController',['only' => ['index','show']]);
Route::resource('/color','Cards\ColorsController',['only' => ['index','show']]);
Route::resource('/rarety','Cards\RaretiesController',['only' => ['index','show']]);
Route::resource('/artist','Cards\ArtistsController');
Route::resource('/block','Cards\BlocksController');
Route::resource('/edition','Cards\EditionsController');
Route::resource('/card','Cards\CardsController');

