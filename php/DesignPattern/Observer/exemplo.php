<?php

interface Subscriber
{
    public function attach(Observer $observer);
    
    public function deattach($index);
    
    public function notify();
}

interface Observer
{
    public function handle();
}



class Login implements Subscriber
{
    protected $observers = [];


    public function attach(\Observer $observer) {
        
        $this->observers[] = $observer;
        
        
        return $this;
    }

    public function deattach($index) {
        
        unset($this->observers[$index]);
        
        return $this;
        
    }

    public function notify() {
        
        foreach($this->observers as $observer)
        {
            $observer->handle();
        }
        
    }
    
    public function fire()
    {
        var_dump("I'm logging into the System");
        
        $this->notify();
    }

}

class LoggerToDatabase implements Observer
{
    public function handle() {
        var_dump("Gravando Login no Banco de dados");
    }

}

class LoggerToFile implements Observer
{
    public function handle() {
        var_dump("Gravando em Arquivo");
    }

}

class SendEmailToUser implements Observer
{
    public function handle() {
        var_dump("mandando Email para o Usuario");
    }

}


$login = new Login();


$login->attach(new LoggerToDatabase)
        ->attach(new LoggerToFile)
        ->attach(new SendEmailToUser);


echo "<pre>";
$login->fire();
echo "</pre>";
