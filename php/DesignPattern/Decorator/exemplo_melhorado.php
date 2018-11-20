<?php

interface CarService {
    
    public function getCost();
    
    
    public function getDescription();
}

class CarServiceCalculator {

    protected $arrServices = [];
    
    
    public function addService(CarService $service)
    {
        $this->arrServices[] = $service;
        
        return $this;
    }
    
    
    public function getTotalCost()
    {
        $total = 0;
        
        foreach($this->arrServices as $service)
        {
           $total+=$service->getCost();     
        }
        
        return $total;
        
    }
    


}

class BasicService implements CarService {


        public function getCost()
        {
            return 10;

        }

}



class OilChange implements CarService {


        public function getCost()
        {
            return 5;

        }

}


class TireRotation implements CarService {


        public function getCost()
        {
            return 15;

        }

}

$carService = new CarServiceCalculator();


$carService->addService(new BasicService())->addService(new OilChange())->addService(new TireRotation());

echo $carService->getTotalCost();