var app = angular.module('Funcionarios', ['ngRoute','services']);


app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/bem-vindo.tpl.html',
        controller: 'WelcomeController'
    });
    
    $routeProvider.when('/funcionarios', {
        templateUrl: 'partials/funcionarios.tpl.html',
        controller: 'FuncionariosController'
    });
    
    
});