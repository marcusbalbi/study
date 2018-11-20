<?php

use Illuminate\Database\Migrations\Migration;

class SetEmailColumnToUnique extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('usuarios',function($table){

			$table->unique('email');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('usuarios',function($table){
			$table->dropUnique('usuarios_email_unique');
			
		});
	}

}