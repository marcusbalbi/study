<?php

use Balbi\Factory\Pizzaria\NYPizza\NYPizzaStore;
use Balbi\Factory\Pizzaria\ChicagoPizza\ChicagoPizzaStore;
use Balbi\Factory\Pizzaria\CaliforniaPizza\CaliforniaPizzaStore;

$nyStore = new NYPizzaStore();


$nyStore->orderPizza("Pepperoni");

sleep(3);

$chicagoStore = new ChicagoPizzaStore();

$chicagoStore->orderPizza("Cheese");


sleep(3);

$californiaStore = new CaliforniaPizzaStore();

$californiaStore->orderPizza("Cheese");





