angular.module('contatooh').controller('ContatosController',function($scope){
    
    
    $scope.total = 0;
    
    $scope.incrementa = function()
    {
        $scope.total++;
       
        
    };
    
    $scope.filtro = "";
    
    $scope.contatos = [
        
        { _id : 1, nome : "Joao", email : "joao@empresa.com.br"},
        { _id : 2, nome : "Joana", email : "joana@empresa.com.br"},
        { _id : 3, nome : "Juca", email : "juca@empresa.com.br"},
        { _id : 4, nome : "Josiane", email : "josiane@empresa.com.br"},
        { _id : 5, nome : "Jeremisas", email : "jeremias@empresa.com.br"},
        
    ];
    
});