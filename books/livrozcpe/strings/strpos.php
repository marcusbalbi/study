<?php

$string = 'abcde';

// caira no if pois será retornado o numero 2, a posição da primeira ocorrencia
if(strpos($string, 'b')) {
    
    echo "ENCONTREI O CARACTER B EM '{$string}'\n";
    
}

// CAIRA NO ELSE POIS o PHP irá retornar a posição 0 e na conversao de tipos 0 é 
//false
if(strpos($string, 'a')) {
    
    echo "ENCONTREI O CARACTER A EM '{$string}'\n";
    
} else {
    echo "NAO ENCONTREI O CARACTER A EM '$string'\n";
}


// CAIRA NO ELSE POIS AGORA ESTOU VERIFICANDO TAMBEM O TIPO DO DADO
if(strpos($string, 'a') === false) {
     echo "NAO ENCONTREI O CARACTER A EM '$string'\n";
  
    
} else {
     echo "ENCONTREI O CARACTER A EM '{$string}'\n";
}


// CAIRA NO IF pois estou contando apartir do terceiro caracter contando apartir de 0

if(strpos($string, 'b',2) === false) {
     echo "NAO ENCONTREI O CARACTER B EM '$string' pois comecei a contar apartir do terceiro "
             . "caracter lembrando que começamos com 0\n";
  
    
} else {
     echo "ENCONTREI O CARACTER B EM '{$string}'\n";
}


// VAI GERAR UM WARNING e CAIR No if
if(strpos($string, 'b',-2) === false) {
     echo "NAO ENCONTREI O CARACTER B EM '$string'";
  
    
} else {
     echo "ENCONTREI O CARACTER B EM '{$string}'\n";
}



