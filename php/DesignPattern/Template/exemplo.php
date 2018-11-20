<?php

abstract class Sanduiche {

    /**
     * @return  Sanduiche
     */
    protected abstract function addIngredientePrincipal();

    public function preparar() {

        return $this->abrirPao()
                        ->addAlface()
                        ->addIngredientePrincipal()
                        ->addMolho();
    }

    protected function abrirPao() {
        var_dump("Abrindo Pao");

        return $this;
    }

    protected function addAlface() {
        var_dump("Adicionando um pouco de Alface");

        return $this;
    }

    protected function addMolho() {
        var_dump("Adicionando um pouco de Molho!");

        return $this;
    }

}

class SanduicheDeFrango extends Sanduiche {

    protected function addIngredientePrincipal() {

        var_dump("Adicionando Filé de Frango");

        return $this;
    }

}

class SanduicheVegetariano extends Sanduiche {

    protected function addIngredientePrincipal() {

        var_dump("Adicionando Carne de Soja");

        return $this;
    }

}

$sanduicheFrango = new SanduicheDeFrango();

$sanduicheVegetariano = new SanduicheVegetariano();

$sanduicheFrango->preparar();

$sanduicheVegetariano->preparar();