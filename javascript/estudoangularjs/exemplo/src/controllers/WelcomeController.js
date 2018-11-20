app.controller('WelcomeController',function($scope,FuncionariosService){
    
   FuncionariosService.query(function(retorno){
            $scope.funcionarios = retorno;
             
        });
    
});