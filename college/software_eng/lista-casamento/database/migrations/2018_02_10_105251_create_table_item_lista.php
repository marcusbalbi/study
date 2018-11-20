<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableItemLista extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_lista', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('listas_id')->unsigned();
            $table->integer('produtos_id')->unsigned();
            $table->text('link');
            $table->timestamps();
    
            $table->foreign('listas_id')->references('id')->on('listas');
            $table->foreign('produtos_id')->references('id')->on('produtos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_lista');
    }
}
