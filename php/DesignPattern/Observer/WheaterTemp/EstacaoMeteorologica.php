<?php
namespace Balbi\Observer\WheaterTemp;

use Balbi\Observer\WheaterTemp\Interfaces\Subject;
use Balbi\Observer\WheaterTemp\Interfaces\Observer;


class EstacaoMeteorologica implements Subject {
    
    protected $observers = array();
    
    protected $info;


    public function addObserver(Observer $observer) {
        
     $this->observers[] = $observer;
     
     return count($this->observers) -1; //contando posição 0 do array
        
    }

    public function notify() {
        
        foreach ($this->observers as $observer) {
            
            if($observer instanceof Observer)
            {
                $observer->update($this->info);
            }
            
        }
        
    }

    public function removeObserver($id) {
        unset($this->observers[$id]);
    }
    
    public function setInfo($info)
    {
        $this->info = $info;
        $this->notify();
    }
    
    public function getInfo()
    {
        return $this->info;
    }

}
