myApp.factory('dataService',function($http, $q){
    return{
       getItemsData: function(){
			var deferred = $q.defer();
			$http({method: 'GET', url: 'item.json'}).
				then (function success(response) {
						deferred.resolve(response.data.items);
					},function error(response) {
						deferred.reject(response.status);
					}
				);
			
			return deferred.promise;
		},
        getServicesData:  function(){
			var deferred = $q.defer();
			$http({method: 'GET', url: 'item.json'}).
				then (function success(response) {
						deferred.resolve(response.data.services);
					},function error(response) {
						deferred.reject(response.status);
					}
				);
			
			return deferred.promise;
		},
        sum : function(services){
			console.log('Call');
		    var sum = 0;
		    services.forEach(function(s){
                s.selected && (sum+= s.price);			
		    });
		    return sum;
        },
        changeSelected : function(service){
		    service.selected = !service.selected;
	    }

    };
})