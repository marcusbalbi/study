<?php

namespace Balbi\Singleton\Configuracao;

class Configuracao  {

    
    /**
     *
     * @var Configuracao
     */
    private static $configuracao;
    
    
    protected $atributos = [];
    
    private $nomeArquivo = __DIR__."/configuracao.txt";



    public static function getInstance()
    {
        if(empty(self::$configuracao)) {
            self::$configuracao = new Configuracao();
        }
        
        return self::$configuracao;
    }
    
    private function __construct() {
    
        $this->iniciar();
        $this->carregar();
        
    }
    
    
    private function carregar()
    {
        $strJson = file_get_contents($this->nomeArquivo);
        
        $this->atributos =  json_decode($strJson,true) ?? []  ;   
        
    }
    
    
    public function __get($name) {
        
        if(array_key_exists($name, $this->atributos)) {
            return $this->atributos[$name];
        } else {
            $this->atributos[$name] = "";
            $this->gravar();
            return $this->atributos[$name];
        }
        
    }
    
    
    public function __set($name, $value) {
        
        $this->atributos[$name] = $value;
        
        $this->gravar();
        
    }
    
    
    protected function gravar()
    {
        
        $json = json_encode($this->atributos,true);
        
       // if(file_exists($this->nomeArquivo)) {
            file_put_contents($this->nomeArquivo, $json);
        //} else {
          //  file_pu
        //}
        
    }
    
    
    public function toArray(){
        return $this->atributos;
    }
    
    
    private function iniciar(){
            
        if(!file_exists($this->nomeArquivo)) {
//            var_dump("AQUI");exit;
            fopen($this->nomeArquivo,'c+');
        }
        
    }
    
    
    
}
