app.controller('FuncionariosController',function($scope,$http,FuncionariosService){
   
   
   $scope.funcionarios = [];
   
  /*  $http.get("/funcionarios").success(function(retorno){
        $scope.funcionarios = retorno;
    }).error(function(retorno){
        $scope.mensagem = "Algum erro aconteceu";
        console.log(retorno);
    });*/
  
   
    
    function listar()
    {
        FuncionariosService.query(function(retorno){
            $scope.mostra = true;
            $scope.funcionarios = retorno;
             
        });
    }
    
    listar();
    
    
    $scope.remover = function(funcionario){
        
       FuncionariosService.remove({ id : funcionario.id },function(retorno){
            listar();
       });  
        
    };
  
    
});