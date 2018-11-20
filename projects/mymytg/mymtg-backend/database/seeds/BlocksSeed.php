<?php
use Illuminate\Database\Seeder;

class BlocksSeed extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $blocks = [
            [
                'name' => 'Kaladesh Block',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Shadows over Innistrad Block',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Battle For Zendikar Block',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Magic Origins',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Khans of Tarkir Block',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Core Set 2015',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Theros Block',
                'created_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Core Set 2014',
                'created_at' => \Carbon\Carbon::now()
            ], [
                'name' => 'Core Set 2013',
                'created_at' => \Carbon\Carbon::now()
            ],
        ];

        DB::table('blocks')->truncate();
        DB::table('blocks')->insert($blocks);
    }
}
