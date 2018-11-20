angular.module('mean', []).controller('FilmesController', ['$scope', '$http', function ($scope, $http) {


        listar();

        function Filme()
        {
            this.titulo = "";
            this.diretor = "";
            this.ano = "";
        }

        function listar()
        {

            var resp = $http.get('/lista');

            resp.success(function (retorno) {

                $scope.filmes = retorno;
            });
        }

        $scope.filme = new Filme();


        var adicionarFilme = function ()
        {
            $http.post("/gravar", $scope.filme).success(function (retorno) {
                $scope.filmes.push(retorno);
            });
        }
        
        var editarFilme = function(filme)
        {
            $http.put("/editar/" + filme._id,filme).success(function (retorno) {
                listar();
            });
            
        }
        
        $scope.excluir = function(filme){
            
            $http.delete("/deletar/" + filme._id);
            listar();
            
        };
        
        $scope.editar = function(filme) {
            
            $scope.filme = filme;
           
            
        }
        
        $scope.enviarFilme = function(filme)
        {
            if(filme._id)
            {
                editarFilme(filme);
            }
            else
            {
                adicionarFilme();
            }
            
            $scope.filme = new Filme();
        }


    }]);

/*function FilmesController($scope,$http)
 {
 $scope.filmes = "NENHUM";
 
 var resp =  $http.get('/lista');
 
 resp.success(function(retorno){
 $scope.filmes = retorno;
 });
 } */