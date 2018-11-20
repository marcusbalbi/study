<?php

$email = "joao@php.net";

//strstr retorna pedaço final de uma string apartir de uma outra sring passada
//incluindo a propria string passada, retornara uma string vazia caso nao encontre
// nada
echo strstr($email,'@')."\n\n";



// o mesmo comportamento porem retornara a primeira parte da string
echo strstr($email,'@',true)."\n\n";