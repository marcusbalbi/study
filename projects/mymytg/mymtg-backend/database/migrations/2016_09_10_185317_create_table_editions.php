<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableEditions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('editions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique();
            $table->date('realese_date');
            $table->char('initials',5)->nullable();
            $table->string('logo_path')->nullable();
            $table->string('symbol_path')->nullable();
            $table->integer('cards_amount')->defaults(0)->unsigned();
            $table->integer('block_id')->unsigned();

            $table->foreign('block_id')->references('id')->on('blocks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('editions');
    }
}
