<?php 

define('1NUMERO','UM NUMERO'); // invalido a regra para criar as consntantes seque a mesma regra de variaveis nao pode começar com numeros 

define('_CONSTANTE','VALOR DE UMA CONSTANTE'); // valiro, é possivel criar uma constante com um underscore no inicio

define('minhaconstante','OK'); // valido, é possivel criar uma consntante em caixa baixa, porem a nomeclatura sugerida é utilizar caixa alta

define('$CONSTANTE','VALOR DA CONSNTANTE'); //valido, porem qunado for ler o valor da consntante o php intepretara o $ como uma variavel e nao será possivel recuperar a consntate  == > bem confuso :S

print(minhaconstante)."\n";

//CONSTANTES MAGICAS
// sao constantes criadas pelo php que se comportam de forma "magica" , pois o valor delas se baseia no contexto onde elas estao sendo utilizadas


print(__LINE__."\n"); // o numero da linha 

print(__FILE__."\n"); // o caminho do arquivo de script

print(__DIR__."\n"); // o caminho do diretorio do arquivo

print(__FUNCTION__."\n") ; // o nome dafunção

print(__CLASS__."\n") ; // o nome da classe , caso a classe possua um namespace será retornado tambem o namespace com o nome da classe

print(__TRAIT__."\n"); // o mesmo principio da constante __CLASS__ porem para ser utilizado cm traits

print(__METHOD__."\n"); // o nome do metodo onde for chamado;

print(__NAMESPACE__."\n"); // o nome do Namespace atual


