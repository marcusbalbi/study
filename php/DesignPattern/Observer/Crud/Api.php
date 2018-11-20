<?php
namespace Balbi\Observer\Crud;

use Balbi\Observer\Crud\Interfaces\Observer;
use Balbi\Observer\Crud\Interfaces\Subject;

class Api implements Observer {
    
    public function __construct(Subject $subject) {
        $subject->addObserver($this);
    }

    public function update(Subject $s) {
        echo "Pessoa Atualizada!\n";
        var_dump(json_decode($s->getInfo()));
    }

}
