<?php

namespace Balbi\Factory\Pizzaria\NYPizza;

use Balbi\Factory\Pizzaria\PlainPizza\PlainPizzaStore;

/**
 * Description of PizzaStore
 *
 * @author marcus
 */
class NYPizzaStore extends PlainPizzaStore
{

    public function createPizza($type)
    {
        $pizza = null;

        if ($type === "Cheese") {
            $pizza = new NYCheesePizza();
        } else if ($type === "Pepperoni") {
            $pizza = new NYPepperoniPizza();
        } else if ($type === "Clam") {
            $pizza = new NYClamPizza();
        } else if ($type === "Veggie") {
            $pizza = new NYVeggiePizza();
        }

        return $pizza;
    }
}
