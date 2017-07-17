myApp.controller('SearchController', SearchController);

function SearchController($scope, $rootScope, dataService){
    $rootScope.active = "search";
    var promiseObj = dataService.getItemsData().then( function(value) { 
        $scope.items = value 
    });
}