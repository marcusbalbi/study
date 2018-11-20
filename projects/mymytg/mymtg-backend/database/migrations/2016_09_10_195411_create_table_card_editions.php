<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCardEditions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('card_editions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('card_id')->unsigned();
            $table->integer('edition_id')->unsigned();
            $table->integer('picture_id')->unsigned();
            $table->integer('rarety_id')->unsigned();

            $table->foreign('card_id')->references('id')->on('cards');
            $table->foreign('edition_id')->references('id')->on('editions');
            $table->foreign('picture_id')->references('id')->on('card_pictures');
            $table->foreign('rarety_id')->references('id')->on('rareties');
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
        Schema::dropIfExists('card_editions');
    }
}
