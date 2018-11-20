
var frutas = ['Banana','Mamao','Abacaxi', 'Laranja'];


function controllerLista($scope, $http){
            
             $scope.frutas = frutas
    
                console.log($scope, $http);
                
                $scope.alertar = function(el)
                {
                  alert('voce cliclou');  
                };
            
    }

function controllerNovo($scope,$location, $http){
           console.log(frutas);
           $scope.enviar = function() {
               frutas.push($scope.fruta);
             $location.path('/');
           };
            
    }
    
    function controllerEditar($scope, $routeParams, $location){
          var frutaSelecionada = $routeParams.nome;
         $scope.fruta = frutaSelecionada;

         $scope.enviar = function() {
             frutas.forEach(function(item,i){
               
            if(item == frutaSelecionada)
            {  
                frutas[i] = $scope.fruta;
            }
             });
             
              $location.path('/');
         }
         
         
            
    }

var app = angular.module('meuapp', [
  'ngRoute'
]);


app.config(['$routeProvider',function($routeProvider){
    
    $routeProvider.when('/',{templateUrl : 'views/lista.html',controller : controllerLista})
                  .when('/novo',{templateUrl : 'views/form.html',controller : controllerNovo})
                  .when('/editar/:nome',{templateUrl : 'views/formEditar.html',controller : controllerEditar})
                  .otherwise({redirectTo: '/'});
}]);

