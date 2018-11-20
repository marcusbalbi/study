var Pessoas = Backbone.Model.extend({
    defaults: {
        nome: "JOAO",
        idade: 67,
        ocupacao: "Reporter"
    },
    validate: function (attrs, options) {

        if (attrs.idade < 0)
        {
            return "Idade Inválida";
        }

        if (!attrs.nome)
        {
            return "Nome inválido";
        }

    },
    trabalhar: function () {
        return this.get("nome") + " está trabalhando";
    }


});

var PessoaCollection = Backbone.Collection.extend({
    model: Pessoas

});


var PessoaView = Backbone.View.extend({
    'tagName': "li",
    'className': "lista",
    //'id'      : "pessoasLista"
    //'initialize': function () {
        //console.log(this.model);
     //   this.render();
    //},
    //'template' : _.template("<%= nome %> (<%= idade %>) - <%= ocupacao %>"),

    template: "#pessoaTemplate",
    'render': function () {
        //this.$el.html(this.model.get('nome') +" ("+ this.model.get("idade")+") - "+ this.model.get("ocupacao"));
        //this.$el.html(this.template(this.model.toJSON()));

        var template = _.template($(this.template).html());

        this.$el.html(template(this.model.toJSON()));
        
        return this;

    }

});


var ListaPessoa = Backbone.View.extend({
    
    tagName: "ul",
    
    render : function(){
        
        this.collection.each(function(pessoa){
            
            var pessoaView = new PessoaView({ model : pessoa });
            
            this.$el.append(pessoaView.render().el);
            
        },this);
        
        return this;
        
    }
    
    
    
});


var pessoa = new Pessoas();
var pessoa2 = new Pessoas({"nome": "joao nanico", "idade": "45", "ocupacao": "Medico"});

var pessoaCollection = new PessoaCollection();

pessoaCollection.add(pessoa);
pessoaCollection.add(pessoa2);


//console.log(pessoaCollection);


pessoaColletion2 =  new PessoaCollection([
    {
        "nome": "JOAO NINGUEM",
        "idade": "3",
        "ocupacao": "Pedreiro"

    },
    {
        "nome": "Jeremias jose da Silva",
        "idade": "56",
        "ocupacao": "Pinguço"

    },
    {
        "nome": "JAMILTON SANTOS",
        "idade": "33",
        "ocupacao": "Carpinteiro"
    },
    {
        "nome": "JOSIAS JOSE JADSON",
        "idade": "31",
        "ocupacao": "Musico"
    }

]);


//console.log(pessoaColletion2);





var view = new PessoaView({'model': pessoa});
var view2 = new PessoaView({'model': pessoa2});


var listaPessoa = new ListaPessoa({ collection : pessoaColletion2 });

$('body').append(listaPessoa.render().el);