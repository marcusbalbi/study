

var form2 = new Vue({

    el: '#form2',

    data : {

        contador : 0
    },

    methods: {

        aoFormSubmetido : function(e){
            console.log(form);
          
            
           
        },

        aoClicarEnviar: function(e){
            this.contador++;
            
        }

    }

});


var form = new Vue({

    el : '#form',
    data : {
        texto : '',
        mensagem_erro : 'DIGITE ALGO!',
        textoBotao: 'Enviar'
    },

    methods: {

        aoEnviar: function(ev,a) {
          console.log(ev,this.texto)
          this.textoBotao = this.texto;
        }

    }
});


var v = new Vue({
    el : '#teste',
    
    data : {
        lista : ["Maria","jose"," cabral", "junior"],
        nome : "JOAO DA SILVA"
        
    },
    
    methods : {
        
        teste : function() {
            
           this.lista.push(this.nome);
           
            this.nome = "";
            this.nome.getFocus();
            
        },
        
        onKeyUp : function(a,b,c){
            
            console.log(a,b,c);
            
        }
        
    }
});
//
//var vm = new Vue({
//  el: '#example',
//  data: {
//    name: 'Vue.js'
//  },
//  // define methods under the `methods` object
//  methods: {
//    greet: function (event) {
//      // `this` inside methods point to the Vue instance
//      alert('Hello ' + this.name + '!')
//      // `event` is the native DOM event
//      alert(event.target.tagName)
//    }
//  }
//})