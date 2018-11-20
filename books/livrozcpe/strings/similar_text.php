<?php

/**
 * verifica o quão uma string é igual a outra string contando o numero de caracteres
 * que elas possuem iguais
 */

$string = "O Brasil está falindo";

$string2 = "Acredito que o Brasil não está falindo";

var_dump(similar_text($string2, $string));

//------------------------------------------------------------------------------
// podemos passar um terceiro parametro para calcular a porcentagem , caso seja passado
//um valor estatico e nao uma variavel acontecerá um fatal error
$porcentagem = 0;

var_dump($string2,
        $string,
        "caracteres encontrados:".similar_text($string2, $string,$porcentagem),
        "Porcentagem:".$porcentagem);