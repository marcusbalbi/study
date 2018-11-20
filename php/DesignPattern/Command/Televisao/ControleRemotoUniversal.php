<?php


namespace Balbi\Command\Televisao;

/**
 * INVOCADOR
 */
class ControleRemotoUniversal {
 
    
    public $comandos = [];
    
    public function __call($name, $arguments) {
        
        if(strpos($name, 'botao') !== false) {
            
            $nomeComando = strtolower(substr($name, strlen('botao')));
            
            $this->adicionarComandoBotao($nomeComando,$arguments[0]);
        } 
        
        if(strpos($name, 'pressionarBotao') !== false) {
            $nomeAcao = strtolower(substr($name, strlen('pressionarBotao')));
            $this->pressionarBotao($nomeAcao);
        }
        
        
    }
    
    public function adicionarComandoBotao($nomeComando, $comando)
    {
        $this->comandos[strtolower($nomeComando)] = $comando;
    }


    public function pressionarBotao($nomeAcao) {
        
        if(!array_key_exists($nomeAcao, $this->comandos)) {
            throw new \Exception("Botao Inexistente");
        }
        
        $this->comandos[$nomeAcao]->execute();
    }

}
