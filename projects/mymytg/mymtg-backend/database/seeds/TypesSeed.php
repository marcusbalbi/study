<?php

use Illuminate\Database\Seeder;

class TypesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $created_at = \Carbon\Carbon::now();

        $types = [
          [
            'name' => 'land',
            'permanent' => true,
            'created_at' => $created_at
          ],
          [
            'name' => 'creature',
            'permanent' => true,
            'created_at' => $created_at
          ],[
            'name' => 'artifact',
            'permanent' => true,
            'created_at' => $created_at
          ],[
            'name' => 'enchantment',
            'permanent' => true,
            'created_at' => $created_at
          ],[
            'name' => 'planeswalker',
            'permanent' => true,
            'created_at' => $created_at
          ],[
            'name' => 'spell',
            'permanent' => false,
            'created_at' => $created_at
          ],[
            'name' => 'instant',
            'permanent' => false,
            'created_at' => $created_at
          ],[
            'name' => 'sorcery',
            'permanent' => false,
            'created_at' => $created_at
          ],
        ];

        DB::table('types')->truncate();
        DB::table('types')->insert($types);

    }
}
