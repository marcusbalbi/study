<?php
namespace Balbi\Observer\WheaterTemp\Interfaces;

use Balbi\Observer\WheaterTemp\Interfaces\Subject;


interface Observer {
  
    public function __construct(Subject $subject);
    
    public function update($mensagem);
}
