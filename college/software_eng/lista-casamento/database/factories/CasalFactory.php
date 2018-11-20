<?php

use Faker\Generator as Faker;
use ListaCasamento\Models\Casais;

$factory->define(Casais::class, function (Faker $faker) {
    return [
        'marido' => $faker->name,
        'esposa' => $faker->name
    ];
});
