 var myApp = angular.module("myApp", ["ngRoute"])
 .config(function($routeProvider, $locationProvider){        
        $routeProvider.when('/home',
        {
            templateUrl:'views/home.html',
            controller:'HomeController'
        });

        $routeProvider.when('/search',
        {
            templateUrl:'views/search.html',
            controller:'SearchController'
        });
        $routeProvider.when('/calculate',
        {
            templateUrl:'views/calculate.html',
            controller:'CalculationController'
        });
        $routeProvider.when('/update',
        {
            templateUrl:'views/update.html',
            controller:'UpdateController'
        });

        $routeProvider.otherwise({redirectTo: '/home'});
      
})

