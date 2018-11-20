<?php

namespace Balbi\Factory\Pizzaria\CaliforniaPizza;

use Balbi\Factory\Pizzaria\PlainPizza\PlainPizzaStore;

/**
 * Description of PizzaStore
 *
 * @author marcus
 */
class CaliforniaPizzaStore extends PlainPizzaStore
{

    public function createPizza($type)
    {
        $pizza = null;

        if ($type === "Cheese") {
            $pizza = new CaliforniaCheesePizza();
        } else if ($type === "Pepperoni") {
            $pizza = new CaliforniaPepperoniPizza();
        } else if ($type === "Clam") {
            $pizza = new CaliforniaClamPizza();
        } else if ($type === "Veggie") {
            $pizza = new CaliforniaVeggiePizza();
        }

        return $pizza;
    }
}
