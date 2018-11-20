(function(){
    
    
    var push = new Pusher("f8e25e7057fa7d70f7c9");
    
    var canalTeste = push.subscribe("canalTeste");
    
    window.App = {};
    
    App.Notifier = function(){
        
      this.notify = function(msg) {
       
       
       var template = Handlebars.compile($("#flash-template").html());
       
       $(template({ message : msg })).appendTo('body').fadeIn(300);
       
      };
        
    };
    
    canalTeste.bind("ComentouUmaFoto",function(data){
        
        (new App.Notifier).notify(data.comentario);
      
        
    });
    
})();