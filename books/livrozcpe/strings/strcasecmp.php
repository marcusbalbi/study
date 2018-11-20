<?php

/**
 * utilizada para fazer comparações em string idependentemente de ser caixa alta ou baixa
 */

$string = "ALO BRASIL";
$string2 = "aLo BrAsIl";
// zero elas são iguais
if(0 === strcasecmp($string, $string2)){
    echo "As strings $string e $string2 são iguais\n";
} else {
    echo "As strings $string e $string2 são diferentes\n";
}
//------------------------------------------------------------------------------

$valor = "oi voce";
$valor2 = "voce oi";
// valor negativo a primeira string é menor do que a passada
if(0 > strcasecmp($valor, $valor2)){
    echo "A string  $valor é menor que a string  $valor2 \n";
}
//------------------------------------------------------------------------------


$teste = "zaphira";
$teste2 = "alucard";
// valor positivo a primeira string é mmaior do que a passada
if(0 < strcasecmp($teste, $teste2)){
    echo "A string  $teste é maior que a string  $teste2 \n";
}

//------------------------------------------------------------------------------
//para facilitar o retorno será negativo se a segunda stirng for maior zero se = e positivo se a primeira for maior
//------------------------------------------------------------------------------
// outra possivel função é strcmp onde é comparado a string com case sensitive

// valor negativo a primeira string é menor do que a passada
$valor = "ALO BRASIL";
$valor2 = "ALO BRASIL";
if(0 === strcmp($valor, $valor2)){
    echo "A string  $valor é igual  $valor2 \n";
}

var_dump(strcmp($valor, $valor2));