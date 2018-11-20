<?php


$texto = 'Ola meu nome é marcus e estou aqui para dizer que strings tambem são arrays em php';


echo $texto;
echo "\n\n";
//strlen conta o numero de caracteres da string
for($i=0;$i<strlen($texto);$i++)
{
    echo $texto[$i]." ";
}