<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //disable foreign key check for this connection before running seeders
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

         $this->call(ColorsSeed::class);
         $this->call(TypesSeed::class);
         $this->call(RaretiesSeed::class);
         $this->call(BlocksSeed::class);
         $this->call(EditionsSeed::class);
        // supposed to only apply to a single connection and reset it's self
        // but I like to explicitly undo what I've done for clarity
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');


    }
}
