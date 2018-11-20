<?php

/**
 * levenshtein retorna o numero de caracteres que precisam ser substituidos
 * para que as duas string se tornem identicas
 * 
 * levando em consideração a ordem dos parametros pois ele calculara quantos cara
 * cteres precisamos mudar no primeiro parametro para ele se tornar igual ao segundo
 * parametro
 * 
 */


$string = "O Brasil está falindo";

$string2 = "Acredito que o Brasil não está falindo";

var_dump(levenshtein($string2, $string));