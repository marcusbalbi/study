<?php
namespace Balbi\Observer\Crud\Interfaces;

use Balbi\Observer\Crud\Interfaces\Subject;


interface Observer {
  
    public function __construct(Subject $subject);
    
    public function update(Subject $mensagem);
}
