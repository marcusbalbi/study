angular.module('services', ['ngResource'])
    .factory('FuncionariosService', function($resource) {
        return $resource('/funcionarios/:id');
    }
);