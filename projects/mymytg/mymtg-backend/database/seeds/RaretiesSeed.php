<?php

use Illuminate\Database\Seeder;

class RaretiesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      $created_at = \Carbon\Carbon::now();

        $rareties = [
          [
            'name' => 'Common',
            'weight' => 1,
            'created_at' => $created_at
          ],
          [
            'name' => 'TimeShifted',
            'weight' => 2,
            'created_at' => $created_at
          ],
          [
            'name' => 'Uncommon',
            'weight' => 3,
            'created_at' => $created_at
          ],
          [
            'name' => 'Rare',
            'weight' => 4,
            'created_at' => $created_at
          ],
          [
            'name' => 'Mythic rare',
            'weight' => 5,
            'created_at' => $created_at
          ],

        ];

        DB::table('rareties')->truncate();
        DB::table('rareties')->insert($rareties);


    }
}
