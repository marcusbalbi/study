class Tarefa {

    
    constructor(nome = "SEM NOME"){
        this.completa = false
        this.nome = nome;
    }
  



}

Vue.component('balbi-tarefas',{

    template : '#tarefas',

    css : '.balbi-tarefa',

    props : [{
        name: 'lista',
        type: Array,
        default: function(){
            return [];
        }
    }, {
        name: 'titulo',
        type: String,
        default: 'TITULO PADRAO'
    }],

    data: function(){
        return {
            nome_nova_tarefa: '',
        }

    },

    computed:{
        total: function(){
            return this.lista.length;
        },

        afazer: function(){
            return this.lista.filter(this.tarefaAfazer).length;
        },

        completas: function(){
            return this.total -  this.afazer;
        }
    },

    methods : {

            tarefaCompleta: function(tarefa) {
                return tarefa.completa;
            },

            tarefaAfazer: function(tarefa) {
                return tarefa.completa === false;
            },

            aoClicarTarefa : function(tarefa) {

                tarefa.completa = !tarefa.completa;

            },

            adicionarTarefa: function(ev){
                this.lista.push(new Tarefa(this.nome_nova_tarefa));

                this.nome_nova_tarefa = "";

            },

            excluirTarefa: function(tarefa) {

               this.lista.$remove(tarefa); 

            },

            removerCompletas: function() {
            
                this.lista = this.lista.filter(this.tarefaAfazer);
            }

        }   

});