<?php

App::bind('Pusher',function($app){
    
    $keys = $app['config']->get('services.pusher');
    dd($keys);
    return new Pusher($keys['public'],$keys['secret'],$keys['app_id']);
    
});


Route::get("/",function(){
    
    return View::make("home");
    
});


Route::any("test",function(){
    
   $pusher = App::make('Pusher');
    
    $pusher->trigger("canalTeste", "ComentouUmaFoto", ['comentario'=>"Muito legal!"]);
    
   return "TUDO CERTO!";
    
});