var filmes = require("../modulos/Filmes/models/Filmes.js");



filmes.find().exec(function(err,dados){
    
    if(err) console.log("ERRO :",err);
    
  console.log(dados);  
});