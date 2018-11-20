(function(){
    
window.App = {
    Models:{},
    Collection :{},
    Views : {}
    
};


window.template = function(id){
    
    return _.template($("#" + id ).html() );
    
};


App.Models.Task = Backbone.Model.extend({
  
    validate : function(attrs){
        
        if(! $.trim(attrs.title))
            return "Nenhum titulo foi Fornecido";
        
    },
    url : function()
    {
        var url =  'http://backbone.app/tarefa/';
        
        if(this.get('id'))
            url+= this.get('id');
        
        return url;
    }
    
});

App.Collection.Task = Backbone.Collection.extend({
    model : App.Models.Task
    
});


App.Views.Tasks = Backbone.View.extend({
    
    tagName : 'ul',
    
    
     initialize : function(){
         
         this.collection.on('add',this.addOne,this);
         
     },
    
     render : function(){
         
         this.collection.each(this.addOne,this);
         
     },
     
     addOne : function(task) {
       
      var taskView = new App.Views.Task({ model : task });
       
       this.$el.append(taskView.render().el);
         
     }
    
});
    
App.Views.Task  = Backbone.View.extend({
    
    tagName : "li",
    
    initialize : function(){
      
      this.model.on('change',this.render,this);
      this.model.on('destroy',this.remover,this);  
    },
    
    template : template('tarefaTemplate'),
    
    render : function(){
        this.$el.html(this.template(this.model.toJSON()));
          // console.log();
        return this;
    },
    
    events : {
       'click .edit' : 'editarTarefa',
       'click .delete' : 'removerTarefa'
    },
    
    editarTarefa : function(event){
       var novotitulo = prompt("Qual o titulo da tarefa?",this.model.get('title'));
       
       this.model.save({title : novotitulo});
       
       
    },
    removerTarefa : function(event) {
       this.model.destroy();
    },
    
    remover : function(obj)
    {
        this.$el.remove();
    }
    
    
});

App.Views.addTask = Backbone.View.extend({
    
    el : "#inserirTarefa",
    
    events : {
        
        'submit' : 'enviar'
    },
    
    enviar : function(e){
        e.preventDefault();
       
       var novaTarefa = new App.Models.Task({
           'title' : this.$el.find('#tarefa').val(),
           'prioridade' : 0
       });
       novaTarefa.save();
       this.collection.add(novaTarefa);
    }
    
});


var tarefas = new App.Collection.Task([
    {
    'id' : 1,
    'title' : "Ir ao Shopping",
    'prioridade' : 4
    },
    {
        'id' : 2,
    'title' : "Ir ao Mercardo",
    'prioridade' : 2
    },
    {
        'id' : 3,
    'title' : "Comprar comida para o cachorro",
    'prioridade' : 5
    },
    {
        'id' : 4,
    'title' : "Ir Trabalhar",
    'prioridade' : 9
    }


]);

ViewAddTarefas = new App.Views.addTask({ collection : tarefas });

ViewTarefas = new App.Views.Tasks({
    collection : tarefas
});

ViewTarefas.render();

$(".tarefas").html(ViewTarefas.el);
    
})();