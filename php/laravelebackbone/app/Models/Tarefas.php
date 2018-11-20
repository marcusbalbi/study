<?php

namespace App\Models;

/**
 * Description of Tarefas
 *
 * @author marcus
 */
class Tarefas extends \Illuminate\Database\Eloquent\Model {
    
    /**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'tarefas';
        
        public $timestamps = true;
}
