<?php

/* 
 * Conta o numero de caracteres de uma string levando sempre em conta o tipo
 * de aspas utilizado na contagem, pois no caso de aspas simples a contagem será
 * sempre interpretada de forma literal ou seja strlen('1\n2') retornará 4 e
 * strlen("1\n2"); será 3 ("contando o espaço interpretado")
 */

echo "COM ASPAS SIMPLES:".strlen('1\n2')."\n";
echo "COM ASPAS DUPLAS:".strlen("1\n2")."\n";

