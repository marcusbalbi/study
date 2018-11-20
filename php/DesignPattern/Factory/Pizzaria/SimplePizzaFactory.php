<?php

namespace Balbi\Factory\Pizzaria;

/**
 * Description of SimplePizzaFactory
 *
 * @author marcus
 */
class SimplePizzaFactory
{

    /**
     * 
     * @param String $type
     * @return Pizza
     */
    public function createPizza($type)
    {
        $pizza = null;

        if ($type === "Cheese") {
            $pizza = new CheesePizza();
        } else if ($type === "Pepperoni") {
            $pizza = new PepperoniPizza();
        } else if ($type === "Clam") {
            $pizza = new ClamPizza();
        } else if ($type === "Veggie") {
            $pizza = VeggiePizza();
        }

        return $pizza;
    }
}
