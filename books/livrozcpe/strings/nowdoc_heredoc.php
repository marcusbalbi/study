<?php


////HEREDOC
//$idade = 14;
//$sql = <<<'SQL'
//   
//   SELECT * FROM PESSOAS WHERE ID = 15
//   
//    AND IDADE > {$idade}    
//        
//        
//SQL; echo "ok"; INVALIDO DEVE EXISTIR SOMENTE A LINHA DE FECHAMENTO TANDO NO HEREDOC
//QUANTO NO NOWDOC
//$b = 10; 


//HEREDOC
$idade = 14;
$sql = <<<'SQL'
   
   SELECT * FROM PESSOAS WHERE ID = 15
   
    AND IDADE > {$idade}    
        
        
SQL;
$b = 10;

echo $sql;

//HEREDOC
$idade = 14;
//no HEREDOC A ABERTURA TAMBEM PODERIA SER FEITA COM ASPAS DUPLAS
$sql = <<<SQL
   
   SELECT * FROM PESSOAS WHERE ID = 15
   
    AND IDADE > {$idade}    
        
        
SQL;
$a = 10;

echo $sql;