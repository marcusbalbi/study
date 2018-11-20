<?php
namespace Balbi\Observer\Crud;

use Balbi\Observer\Crud\Pessoas;
use Balbi\Observer\Crud\Interfaces\Subject;
use Balbi\Observer\Crud\Interfaces\Observer;

class Funcionarios extends Pessoas implements Subject {
    
    
    public $carteiraTrabalho;
    
    public $dataAdmissao;


    public function __construct() {
       new Api($this);
    }
    
    protected $observers;
    
    public function addObserver(Observer $observer) {
        $this->observers[] = $observer;
    }

    public function getInfo() {
       return json_encode([
           'carteiraTrabalho'=>$this->carteiraTrabalho,
           'dataAdmissao'=>$this->dataAdmissao,
           'dataNascimento'=>$this->dataNascimento,
           'cpf'=>$this->cpf,
           'nome'=>$this->nome,
       ]);
    }

    public function notify() {
        
        foreach($this->observers as $observer)
        {
            $observer->update($this);
        }
        
    }

    public function removeObserver($id) {
        return null;
    }
    
    public function cadastrar()
    {
        $this->carteiraTrabalho = "0123456789";
        $this->dataAdmissao = date("Y-m-d");
        
        $this->nome = "Joao Nascimento";
        $this->dataNascimento = '1988-04-25';
        $this->cpf = "123456789000";
        
        $this->notify();
    }

}
