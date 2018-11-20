<?php


$email = "LAP-9307";
// remove uma porção da string contando apartir de 0 3 caracteres
//retornando LAP
echo substr($email,0,3)."\n\n";


//CASO PASASDO UM VALOR NEGATIVO PARA O SEGUNDO PARAMETRO ELE COMEÇARA DO FINAL DA STRING
//NESSE CASO RETORNARA 9307
echo substr($email, -4,4)."\n\n";

//CASO PASSADO UM VALOR ACIMA DO NUMERO DE CARACTERES DA STRING SERA RETORNDO UMA 
//STRING COM OS CARACTERES QUE ESTIVEREM DENTRO DAQUELE TAMANHO PASSADO
echo substr($email, 90,15)."\n\n";


