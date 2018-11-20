<?php 

// namespaces foram criados para evitar colisão com nome de classes dentro de um projeto php, e foram introduzidos na versão 5.3 do php , antes disso era muito comum a utilização de underscores para separar o nome das classes por exemplo : Zend_Db_Table // o framework zend 1 era todo assim

// para se utilizar um namespace utilizamos a palavra reservada namespace e o 
//nome do namespace que queremos e separado por \ (contra 
//barra) exemplo :  namespace Zce\teste para melhor entendimento mantemos a hierarquia do namespace com diretorios como é feito no java 

namespace Teste\Zce; // o classe que possuir esse namespace deve ficar dentro de uma pasta Teste e uma subpasta Zce
// a declaração do namespace deve ser a primeira de um arquivo php

//é possivel declarar dois namespaces no mesmo arquivo , porem nao é uma recomendação pois pode ficar confuso, é possivel colocar um namespace com chaves para facilitar a declaração de classes e namespaces, por exemplo :

namespace Teste\Model{
	class Model {

	}
}
namespace Teste\Controller{
	class Controller {

	}
}

//para se utilizar uma classe que esteja dentro de um namespace utilizamos a palavra reservada use , por exemplo :

use Teste\Controller\MeuController;


// vale lembrar que as classes globais do php devem ser informadas no use, pois caso contrario poderá ser gerado um fatal error por nao encontrar a classe, isso acontece porque quando instanciamos uma classe global do php ele procurara por ela dentro do namespace atual caso nao tenha sido definida no use ou utilizado uma contra barra , por exemplo :

// fatal error se nao estiver nos uses da classe
$pdo = new PDO();

// ok ele procurara em suas classes globais
$pdo = new \PDO();