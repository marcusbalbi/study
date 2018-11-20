<?php
// //CONSTRUTORES DE LINGUAGEM

// exit("ADEUS MUNDO");// exibe uma saída e finaliza o script
// //============================================================================
// die("ADEUS MUNDO 2") // exibe uma saída e finaliza o script

// //============================================================================
// echo("ALO MUNDO") // Utilizado para exibir uma saida no script
// //============================================================================
// return("OK MUNDO") // utilizado para retornar um valor e finalizar a execução do script, ou retornar o valor desejado para quem estiver executando o script
// //============================================================================
// echo "ALO BRASIL";
// return;

// echo("ESSE CHO NAO SERA VISTO");
// //============================================================================

// function somar($num1,$num2) {
// 	return $num1 + $num2;
// }

// echo somar(2, 2);
// //============================================================================

// print("OLA MUNDO"); // exibe uma saída na tela

// //============================================================================

// //CONSTRUTORES DE AVALIAÇÃO
// $var1 = "";
// empty($var1); // utilizado para verificar se uma variavel está vazia(sem valor podendo ser uma string vazia, zero, null, array vazio etc)

//============================================================================

// $var1 = "echo 'alo brasil';die('ok');";

// eval($var1); // utilizado para avaliar o conteudo de uma string em php;

// //============================================================================

// include('teste.php'); // utilizado para adicionar um arquivo no script php, pode retornar um warning caso nao seja encontrado o arquivo

// include_once('teste.php'); // utilizado para adicionar um arquivo no scriot php caso o mesmo nao tenha sido incluico anteriomente no script e nenhum warning sera lançado

// //============================================================================

// require('teste.php'); // utilizado para adicionar um arquivo no script php, retornara um fatal Error caso nao seja encontrado o arquivo

// require_once('teste.php'); // utilizado para adicionar um arquivo no scriot php porem caso o mesmo nao tenha sido incluico anteriomente no script e nenhum warning sera lançado

//============================================================================

// $var1 = "TESTE";

// echo  isset($var1) ? $var1 : 'nao esta setada'; // utilizado para verificar se uma variavel existe ou  possui um valor ou nao

// echo  isset($var21) ? $var1 : 'nao esta setada'; // utilizado para verificar se uma variavel existe ou  possui um valor ou nao

//============================================================================

// $var2 = "ABCD";

// unset($var2); // utilizado para remover uma variavel 

// //gerara um E_NOTICE
// echo $var2;

//============================================================================

$cores = ['Branco','Azul','Amarelo'];

list($cor1,$cor2,$cor3) = $cores; // atribui um array a uma lista de variaveis

echo $cor1." ".$cor2." ".$cor3;

//============================================================================