(function(){
    
    window.App = {
        Models : {},
        Collections : {},
        Views : {},
        Router: {}
    };
    
var Eventos = {};

_.extend(Eventos, Backbone.Events);


App.Views.Cliente = Backbone.View.extend({
    
    initialize : function(){
        Eventos.on('cliente:exibir',this.exibir);
    },
    
    exibir : function(id){
        console.log('exibindo o cliente com o id : '+ id);
    }
    
});    

App.Router = Backbone.Router.extend({
   
        routes :{
            '' : 'home',
            'TESTE' : 'show',
            'download/*arquivo' : 'download',
            'exibir/:id' : 'exibir',
            'procurar/:query' : 'procurar',
            '*naoencontrado' : 'missing'
        },
        
        
        'home' : function(){
            console.log("OLA DA PAGINA INICIAL");
        },
        'show' : function(a){
            console.log("ROTA PARA SHOW!");
            console.log(a);
        },
        'download' : function(arquivo){
            console.log(arquivo);
        },
        'exibir' : function(id)
        {
          Eventos.trigger("cliente:exibir",id);
        },
        'procurar' : function(query){
            console.log("procurando no banco de dados por :" + query);
        },
        'missing' : function(naoencontrado) {
            
            console.log("ME desculpe mas nao consegui encontrar a pagina!");
            
        }
    
    
});
    
    new App.Views.Cliente;
    
new App.Router();
Backbone.history.start();
})();