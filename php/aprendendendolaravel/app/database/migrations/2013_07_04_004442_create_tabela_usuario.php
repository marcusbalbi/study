<?php

use Illuminate\Database\Migrations\Migration;

class CreateTabelaUsuario extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('usuarios',function($table){
			$table->increments('id');
			$table->string('nome',50);
			$table->string('email');
			$table->integer('idade')->nullable();
			$table->string('password');
			$table->boolean('ativado')->default(0);
			$table->timestamps();
			$table->softDeletes();
			$table->text('biografia');

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('usuarios');
	}

}