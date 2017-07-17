myApp.directive('myTab', function() {
    return {
         restrict: 'E',
        templateUrl: 'views/tab.html',
        replace:true,
        scope: {
            tab : '@tab'
        }
    }
})