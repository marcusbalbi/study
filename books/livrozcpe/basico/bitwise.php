<?php



var_dump(2 | 4); // 6 Os bits que estão ativos em 2 ou em 6 são ativados.
var_dump(6 & 7); // 6 Os bits que estão ativos tanto em 6 quanto em 7 são ativados.

var_dump(8 | 7); // 15
var_dump(8 & 7); // 0


/**
128	64	32	16	8	4	2	1

1	0	0	0	0	0	0	1 =  129

0	0	1	0	0	0	0	1 = 33

0	0	0	0	0	0	0	1 = 1
**/
var_dump(129 & 33); // 1




// 2 ELEVADO A BIT A DIRETA MULTIPLICADO POR BIT A ESQUERDA
var_dump(3 << 6); // 2 elevado a 6 vezes 3 ou 64 * 3  = 192

var_dump(7 << 8); // 1792

var_dump(2 << 34); // 34359738368



// LEVANDO SEMPRE EM CONTA QUE COMO ESTAMOS FALANDO DE BITS  UM VALOR DECIMAL
// SERA ARENDODADO PRA BAIXO POR EXEMPLO : 0,344 = 0 3,56 = 3
//2 elevado a bit a direita dividido por bit a esquerda
var_dump(256 >> 6); // 256 dividido por 2 elevado a 6  = 4

var_dump(322 >> 5); //  10?


var_dump(~1567);//o valor atual * -1  e depois -1 = -1568

var_dump(~1322); // -1323
