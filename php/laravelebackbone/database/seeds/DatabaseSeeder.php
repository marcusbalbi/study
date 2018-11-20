<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		$this->call('TarefasSeeder');
	}

}

class TarefasSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();
                
		 DB::table('tarefas')->insert([
                [
                    'title'=>'Ir ao Banco',
                    'completed' => 0
                ],
                [
                    'title' => 'Terminar Curso de Backbone',
                    'completed' => 0
                ],
                [
                    'title'=>'Ir ao Shopping',
                    'completed' => 0
                ],
                [
                    'title' => 'Fazer Compras',
                    'completed' => 0
                ]
                        
                ]);
	}

}
