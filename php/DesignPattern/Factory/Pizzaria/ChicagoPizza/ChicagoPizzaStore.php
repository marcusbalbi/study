<?php

namespace Balbi\Factory\Pizzaria\ChicagoPizza;

use Balbi\Factory\Pizzaria\PlainPizza\PlainPizzaStore;

/**
 * Description of PizzaStore
 *
 * @author marcus
 */
class ChicagoPizzaStore extends PlainPizzaStore
{

    public function createPizza($type)
    {
        $pizza = null;

        if ($type === "Cheese") {
            $pizza = new ChicagoCheesePizza();
        } else if ($type === "Pepperoni") {
            $pizza = new ChicagoPepperoniPizza();
        } else if ($type === "Clam") {
            $pizza = new ChicagoClamPizza();
        } else if ($type === "Veggie") {
            $pizza = new ChicagoVeggiePizza();
        }

        return $pizza;
    }
}
