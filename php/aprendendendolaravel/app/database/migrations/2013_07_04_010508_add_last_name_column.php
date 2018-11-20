<?php

use Illuminate\Database\Migrations\Migration;

class AddLastNameColumn extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('usuarios',function($table){

			$table->string('sobrenome',150);

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
			 $table->dropColumn('sobrenome');
		});
	}

}