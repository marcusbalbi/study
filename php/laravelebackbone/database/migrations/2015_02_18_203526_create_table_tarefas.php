<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableTarefas extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('tarefas', function(Blueprint $table)
		{
                        $table->increments('id');
                        $table->string('title');
                        $table->boolean('completed')->default(0);
                        $table->timestamps();
                        $table->create();
                        
                        
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('tarefas', function(Blueprint $table)
		{
                    $table->drop();
		});
	}

}
