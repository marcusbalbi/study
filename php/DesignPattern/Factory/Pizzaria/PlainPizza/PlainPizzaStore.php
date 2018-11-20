<?php

namespace Balbi\Factory\Pizzaria\PlainPizza;

/**
 * Description of PizzaStore
 *
 * @author marcus
 */
abstract class PlainPizzaStore
{

    public function orderPizza($type)
    {
        $pizza = $this->createPizza($type);

        $pizza->prepare();
        $pizza->bake();
        $pizza->cut();
        $pizza->box();

        return $pizza;
    }
    
    abstract public function createPizza($type);
    
}
