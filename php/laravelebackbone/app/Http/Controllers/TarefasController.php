<?php

namespace App\Http\Controllers;


/**
 * Description of TarefasController
 *
 * @author marcus
 */
class TarefasController extends Controller {
 
    
   
    public function index()
    {
       return \View::make("home",['tarefas'=>  \App\Models\Tarefas::all()]);
    }
    
    public function create()
    {
        
    }
    
    public function show($id)
    {
        return \App\Models\Tarefas::find($id);
    }
    
    
    
}
