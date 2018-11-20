<?php

use Illuminate\Database\Seeder;

class ColorsSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      $colors = [
        [
          'name' => 'white',
          'land_name' => 'plain',
          'symbol_path' => '/path/to/symbol',
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'black',
          'land_name' => 'swamp',
          'symbol_path' => '/path/to/symbol',
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'blue',
          'land_name' => 'island',
          'symbol_path' => '/path/to/symbol',
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'red',
          'land_name' => 'mountain',
          'symbol_path' => '/path/to/symbol',
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'green',
          'land_name' => 'forest',
          'symbol_path' => '/path/to/symbol',
          'created_at' => \Carbon\Carbon::now()
        ],
        [
          'name' => 'colorless',
          'land_name' => null,
          'symbol_path' => '/path/to/symbol',
          'created_at' => \Carbon\Carbon::now()
        ]
      ];

        DB::table('colors')->truncate();
        DB::table('colors')->insert($colors);
    }
}
