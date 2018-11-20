
//import Person from './Person';

//let varivavel com escopo de bloco

//const variavel que nao pode ser redefinida

//var variavel com nivel de escopo de função

function exibirNome(bool)
{
    //mesmo com o var dentro do if o nome joao será exibido pois var tem escopo de função
    // e o javascript joga sua declaração para cima.
    if(bool) {
        var nome =  "joao";
    } 

    console.log(nome);

}

exibirNome(true);


function exibirNomeLet(bool)
{
    //com o let o escopo da variavel permance dentro do bloco que ela foi declarada, com isso
    //é exibido um erro de referencia caso ela seja utilizada fora do bloco, entenda como bloco
    // chaves 
    if(bool) {
        let nome =  "Carla";
    }

    console.log(nome);
}
//exibirNomeLet(true);

function exibirNomesConst()
{
    const nomes = ["joao",'Carla'];
    // a variavel do tipo const é modificavel
    nomes.push('Maria');
    //porem nao pode ser redefinida
    //nomes = "Joana,Claudio, Josimar";

    console.log(nomes);
}

exibirNomesConst();


class TarefasCollection {

    constructor(tarefas = []){
        this.tarefas = tarefas;
        console.log(tarefas);
    }

    exibirTarefas() {

        this.tarefas.forEach((tarefa,index) => {
            console.log(this,index);
            console.log(tarefa.obterNome()+ " a fazer");
        });





    }

    entenderArrow(){

        let nomes = ["joao", "maria", "jose"];

        let lista = nomes.map((nome) => { return nome+" esta na lista"; });

        console.log(lista);

    }

}

class Tarefa {

    constructor(nome){
        this.nome = nome;
    }

    obterNome(){
        return this.nome;
    }

}

let tarefasCollection = new TarefasCollection([
    new Tarefa("ir ao supermercado"),
    new Tarefa("Limpar a casa"),
    new Tarefa("passear com o cachorro")]);

tarefasCollection.exibirTarefas();
tarefasCollection.entenderArrow();


class AplicadorDescontos {

    static descontoPadrao(){
        return .10;
    }
    // ES6 agora aceita tambem valores padrões passados na assinatura do metodo
    //com um plus que tambem é possivel chamar uma função no lugar do parametro
    static aplicar(valor, desconto = AplicadorDescontos.descontoPadrao()){


        return (valor - (valor * desconto)).toFixed(2);
    }

}


console.log( "Aplicando desconto: " + AplicadorDescontos.aplicar(244.87,.33));



class Calculadora {

        // RESTO , a unica coisa que precisa ficar clara é que esse parametro com ... tem.
        // de ser o ultimo da lista e sera passado para o metodo um array com os valores
    static somar(...numeros) {

        return numeros.reduce((anterior,atual) => {
            return anterior + atual;
        });

    }

    static somar2(a,b) {

        return a + b;

    }

}

console.log("O resultado e :"+Calculadora.somar(1,2,3,4));

let numeros = [1,2];
// SPREAD logica inversa ao REST(RESTO) nesse caso ele transforma um array de dois numeros
//nos parametros para o metodo
console.log("O resultado tambem e "+ Calculadora.somar2(...numeros))


// para usar apostrofo em teclados brasileiros utilize SHIFT + tecla entre P e {
let variavel = "ALO BRASIL";
let string = `
<div>
    <p>${variavel}</p>
</div>`;

console.log(string); 


function obterPessoa(){

    let nome = "joao";

    let idade = 15;

    return {
        nome,
        idade,

        saudar() {
            return `Ola ${nome}`;
        }
    }

}

console.log(obterPessoa().saudar());

//object destructuring

let data = {
    nome: 'Janio',
    idade: 12
}

let {nome, idade} = data;

console.log(nome,idade);


function exibirDados({ dados, contagem}){

    dados.forEach(nome => {
        console.log(nome)
    });

    console.log(`A contagem é ${contagem}`);

    return true;

}

let resultado = {

    dataAtual: new Date(),
    dados: [
    "joao",
    "jose",
    "maria"
    ],

    contagem: 3
};

exibirDados(resultado);


class Usuario {

    constructor(nome, email) {
        this._nome = nome;
        this._email = email;
    }

    static Registrar(...args){

        return new Usuario(...args);

    }

    get email(){
        return `O email é  ${this._email}`;
    }

    set email(oEmail) {
        this._email = oEmail;
    }

    alterarEmail(novoEmail){
        this._email = novoEmail;
    }

}

let usuario =  Usuario.Registrar("Marcus", "marcus.balbi@gmail.com");

usuario.alterarEmail("balbimarcus@gmail.com");

console.dir(usuario);

console.log(usuario.email);


function log(strategy) {

    strategy.handle();
}

log(new class {

    handle(){
        console.log("Criando um log com ES6");
    }

});

// let p = new person("JOAO");

// console.log(p);

let timer = function(tempo){

    return new Promise(function(resolve,reject){

            console.log("Iniciando...");

            setTimeout(function(){
                console.log("tempo acabou!!!");
                resolve("ISSO AI!");
            },tempo)

    });

}

let tempo = timer(2000);

tempo.then(function(result){
    console.log(`Aqui está o resultado:${result}`);
});


let titulo = "O programador Pragmatico";

if(titulo.includes('programador')){
    console.log("possui programador");
}

if(!titulo.startsWith('Refatoracao')) {
    console.log("nao começa com Refatoracao");
}

if(titulo.endsWith('tico')) {
    console.log("termina com o tico");
}

console.log(titulo.repeat(122));


//array includes
let testeArray = [1,3,5,7,9,11,13,17];
console.log(testeArray.includes(11),testeArray.includes(2));


// array find
console.log(
    testeArray.find(item => { return item > 3 } )
);
// array findIndex
console.log(
    testeArray.findIndex(item => { return item > 3 } )
);

//array.keys  array.entries


//generators

function *gerador()
{
    console.log("INiciado");

// cada yield é como se fosse um return ; 
    yield 1;

    console.log("CONINUANDO");


    yield 2;

    console.log("ULTIMO");

    yield 3;
}

let teste = gerador();

console.log(teste);

// cada next é uma execução até o proximo yield
console.log(teste.next());

//consigo obter o valor de yield atravez da variavel value
console.log(teste.next().value);

// consigo saber o status do generator atravez da flag done
console.log(teste.next().done);

console.log(teste.next());


function* range(inicio, fim){

    while(inicio <= fim){

        yield inicio;

        inicio++;
    }

}


let umAcinco = range(1,5);

console.log(umAcinco.next());
console.log(umAcinco.next())
console.log(umAcinco.next())
console.log(umAcinco.next())
console.log(umAcinco.next())

let umAdez = range(1,10);
for(let value of umAdez) {
    console.log(value);
}










