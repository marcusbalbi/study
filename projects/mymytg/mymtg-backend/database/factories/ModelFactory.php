<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(Balbi\MyMtg\Models\Cards\Artist::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name
    ];
});

$factory->define(Balbi\MyMtg\Models\Cards\Block::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->title
    ];
});

$factory->define(Balbi\MyMtg\Models\Cards\Edition::class, function (Faker\Generator $faker) use ($factory) {

    return [
        'name' => $faker->title,
        'release_date' => $faker->dateTimeThisDecade,
        'initials' => null,
        'logo_path' => null,
        'symbol_path' => null,
        'cards_amount' => $faker->randomNumber(3),
        'block_id' => $factory->create(\Balbi\MyMtg\Models\Cards\Block::class)->id
    ];
});

