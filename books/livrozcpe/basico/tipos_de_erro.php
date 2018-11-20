<?php

/** em php temos diferentes tpos de erros em diferentes niveis
. os três mais comuns são :
 E_ERROR : São ERROS FATAIS que nao sao possiveis de recuperar ou continuar
 o script , são utilizados pelo php quando há algum problema de alocação de memoria, inclusive pelas funções construtores require e require_once

 E_WARNING : Comportamento similar ao E_ERROR, porém é um tipo de erro
 que nao finalizada a execução do script

 E_NOTICE : Utilizado para indicar um possivel erro durante a execução do script, são facilmente encontrados quando acessamos uma posição de um array que nao existe

 **/

//NOTICE 
 $var1 = ['ok'];
 echo $var1[2];




 //ERROR e WARNING
 require 'teste.php';