myApp.controller('CalculationController', CalculationController);

function CalculationController($scope, $rootScope, dataService){
    $rootScope.active = "calculate";
    var promiseObj = dataService.getServicesData().then( function(value) { 
            $scope.services = value;
            $scope.sum = dataService.sum.bind(null, $scope.services);
    });
    $scope.changeSelected = dataService.changeSelected;

}    