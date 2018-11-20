var Filmes = require("../models/Filmes.js");


module.exports.index = function(req, res) {
    res.render('index');
};

module.exports.listar = function(req,res){

    Filmes.find({},function(err,dados){

         res.json(dados);

     });
};

module.exports.gravar = function(req,res){
  
  var novoFilme = new Filmes(req.body);
  
  novoFilme.save(function(err,data){
      
      console.log(err,data);
      
      res.send(novoFilme);
      
  });
    
};

module.exports.deletar = function(req,res){
    
    Filmes.find({ "_id" : req.params.id}).remove(function(){
        
        res.send("Filme removido com sucesso");
        
    });
    
    
}

module.exports.editar = function(req,res){
    
    delete req.body._id;
    
    Filmes.update({ "_id" : req.params.id},req.body,function(){
        
        res.send(req.body);
        
    });
    
}




