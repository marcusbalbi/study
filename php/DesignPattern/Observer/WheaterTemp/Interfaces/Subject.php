<?php
namespace Balbi\Observer\WheaterTemp\Interfaces;


interface Subject {
    
    
    /**
     * 
     * @param Observador $observer
     * @return int Identification
     */
    public function addObserver(Observer $observer);
    
    public function removeObserver($id);
    
    /**
     * @return String Description
     */
    public function getInfo();
    
    public function notify();
    
}
