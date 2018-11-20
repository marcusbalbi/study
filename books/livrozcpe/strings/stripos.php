<?php


$string = 'abcde';

// caira no if pois será retornado o numero 2, a posição da primeira ocorrencia
//INDEPENDENTE DA CAIXA
if(stripos($string, 'B')) {
    
    echo "ENCONTREI O CARACTER B EM '{$string}'\n";
    
}