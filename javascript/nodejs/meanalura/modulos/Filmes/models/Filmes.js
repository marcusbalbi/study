var mongoose  = require("mongoose");


mongoose.connect("mongodb://localhost/mean");

var filmeSchema = new mongoose.Schema({
     titulo  : { type : String, required : true },
     diretor : { type : String, required : true },
     ano     : { type : String  }
});

var Filme = mongoose.model('filmes',filmeSchema);


module.exports = Filme;