<?php

use Illuminate\Database\Seeder;

class EditionsSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $edition = [
        [
          'name' => 'Kaladesh',
          'realese_date' => '2016-09-01',
          'initials' => 'KLAD',
          'cards_amount' => 264,
          'block_id' => 1,
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'Eldritch Moon',
          'realese_date' => '2016-07-01',
          'initials' => 'ELD',
          'cards_amount' => 205,
          'block_id' => 2,
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'Shadows over Innistrad',
          'realese_date' => '2016-04-01',
          'initials' => 'SOI',
          'cards_amount' => 297,
          'block_id' => 2,
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'Oath of Gateway',
          'realese_date' => '2016-01-01',
          'initials' => 'OAG',
          'cards_amount' => 184,
          'block_id' => 3,
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'Battle For Zendikar',
          'realese_date' => '2015-10-01',
          'initials' => 'BFZ',
          'cards_amount' => 274,
          'block_id' => 3,
          'created_at' => \Carbon\Carbon::now()
        ],
       
      ];

        DB::table('editions')->truncate();
        DB::table('editions')->insert($edition);
    }
}
