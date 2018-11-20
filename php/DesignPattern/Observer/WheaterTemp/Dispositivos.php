<?php
namespace Balbi\Observer\WheaterTemp;

use Balbi\Observer\WheaterTemp\Interfaces\Observer;
use Balbi\Observer\WheaterTemp\Interfaces\Subject;


abstract class Dispositivos implements Observer {
    
     protected $idAssinante;
     
     protected $subject;
     
     public function __construct(Subject $subject) {
       $this->idAssinante = $subject->addObserver($this);
       $this->subject = $subject;
    }
    
    public function desfazerAssinatura()
    {
        $this->subject->removeObserver($this->idAssinante);
    }
    
}
