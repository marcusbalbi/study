<?php


// REMOVE ESPAÇOS EM BRANCO DAS EXTREMIDADES DAS STRINGS EXEMPLO :
$string = "             AGORA ESTOU REMOVENDO ESPAÇOS       ";
echo trim($string)."\n\n";


//REMOVE OS ESPAÇOS DA STRING DO INICIO DA STRING
echo ltrim($string)."\n\n";


//REMOVE OS ESPAÇOS DO FIM DA STRING
echo rtrim($string)."\n\n";
