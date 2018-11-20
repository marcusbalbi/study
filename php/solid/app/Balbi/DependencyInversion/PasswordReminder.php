<?php

namespace Balbi\DependencyInversion;

interface ConnectionInterface {
    public function connect();
}

class DbConnection implements ConnectionInterface {
    
    
    public function connect() {
            //COnecta com o Banco
    }

}

/**
 * 
 * Description of PasswordReminder
 *
 * @author marcus
 */
class PasswordReminder {
    
    private $con;
    
    //Não Quebra o Principio de Inversao de Dependencia, pois PassowordReminder não tem idéia de como se conecta no banco , apenas sabe que existe a conexao,
    // e tanto PasswordReminder quanto DbConnection dependem de um contrato.
    public function __construct(ConnectionInterface $con) {
        $this->con = $con;
    }

    
    

//Quebra o Principio de Inversão de Dependencia, visto que Modulos de Nivel alto não devem depender de Modulos de nivel baixo
//Todos os Principios estão ligados com a seguinte frase "Codifique para uma Interface"
    /*public function __construct(MysqlConnection $con) {
        
        $this->con = $con;
    }*/
    
    
}
