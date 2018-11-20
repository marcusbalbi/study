angular.module("meuapp").controller('ControllerCliente',function($scope){
    
    $scope.clientes = [
        {'nome' : 'Joao'},
        {'nome' : 'Jose'},
        {'nome' : 'Carlos'},
        {'nome' : 'Vicente'},
        {'nome' : 'Maria'},
        {'nome' : 'Joana'},
        {'nome' : 'Clara'},
        {'nome' : 'Gustavo'},
        {'nome' : 'Gabriel'},
        {'nome' : 'Paulo'}
    ];
    
    $scope.dizerOla = function($el){
        alert("OLA " + $el.cliente.nome);
    };
    
});