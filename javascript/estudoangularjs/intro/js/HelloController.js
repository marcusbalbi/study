app.controller('HelloController',function($scope) {
  $scope.total = 0;
  
  $scope.incrementar = function(){
    $scope.total++;
  }
  
});