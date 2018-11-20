<?php

//------------------------------------------------------------------------------
// exemplo mais simples troca uma string por outra
$string = "A cor do livro é laranja\n";
echo str_replace("laranja", "azul", $string);

//------------------------------------------------------------------------------
// recebe um array de strings como busca e troca pelo array de string do segundo parametro
//respeitando a ordem de definição dos arrays
$string = "Minha bicicleta é marrom\n";
echo str_replace(['bicicleta','marrom'], ['bola','vermelha'], $string);

//------------------------------------------------------------------------------
// recebe um array de strings para buscar e troca pela string do segundo parametro
$string = "Eu adoro essa cor e gosto esse cheiro\n";
echo str_replace(['adoro','gosto'], 'amo', $string);

//------------------------------------------------------------------------------
/** o quarto parametro de str_replace recebe um variavel por referencia para incrementar
o numero de vezes qeu foi encontrada a busca
por isso nao aceita nenhum valor estatico como por exemplo o numero 0 , caso passado
acontecerá um fatal error */
$string = "gosto disso, gosto daquilo e gosto daquilo outro\n";
$substituicoes = 0;
$novaString = str_replace("gosto", "amo", $string,$substituicoes);
echo $novaString;
echo "Numero de substituições:".$substituicoes."\n";

//------------------------------------------------------------------------------


echo  "\n";