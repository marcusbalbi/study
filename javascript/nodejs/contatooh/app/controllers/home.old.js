module.exports = function(app)
{
    var controller = {};
    
    controller.index = function(req,res)
    {
        res.render('index',{ nome : app.models.home.nome });
    }
    
    return controller;
}