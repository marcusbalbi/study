<?php

$a = 10;
$b = 2;

echo "\n-------------------------\n";
echo "SOMA:".($a + $b);
echo "\n-------------------------\n";
echo "SUB:".($a - $b);
echo "\n-------------------------\n";
echo "MULT:".($a * $b);
echo "\n-------------------------\n";
echo "DIV:".($a / $b);
echo "\n-------------------------\n";
echo "MOD:".($a % $b);
echo "\n-------------------------\n";
echo "modo encurtado ATRIBUINDO ELE MESMO";
echo "\n-------------------------\n";
echo "SOMA:".($a += $b);
echo "\n-------------------------\n";
echo "SUB:".($a -= $b);
echo "\n-------------------------\n";
echo "MULT:".($a *= $b);
echo "\n-------------------------\n";
echo "DIV:".($a /= $b);
echo "\n-------------------------\n";
echo "MOD:".($a %= $b);
echo "\n-------------------------\n";
echo "\n-------------------------\n";
echo "ATRIBUINDO OM VARIAVEL SEM VALOR GERANDO UM NOTICE";
echo "\n-------------------------\n";
echo "\n-------------------------\n";
echo "SOMA:".($c+=2);