<?php


interface CarService
{
    public function getCost();
    
    public function getDescription();
}


class BasicInspection implements CarService
{
    
    public function __construct() {
        
    }
    
    public function getCost() {
        return 10;
    }

    public function getDescription() {
        return  "<br>Basic Inspection";
    }

}

class OilChange implements CarService
{
    /**
     *
     * @var CarService
     */
    protected $carService;
    
    public function __construct(CarService $carService) {
        $this->carService = $carService;
    }
    
    public function getCost() {
        return $this->carService->getCost() + 5;
    }

    public function getDescription() {
        return  $this->carService->getDescription(). "<br> Oil Change";
    }

}

class TireRoration implements CarService
{
    /**
     *
     * @var CarService
     */
    protected $carService;
    
    public function __construct(CarService $carService) {
        $this->carService = $carService;
    }
    
    public function getCost() {
        return $this->carService->getCost() + 7;
    }

    public function getDescription() {
        return  $this->carService->getDescription(). "<br> Tire Rotation";
    }

}


$carService = (new OilChange(new TireRoration(new BasicInspection)));


echo $carService->getCost();
echo "<br>";
echo $carService->getDescription();