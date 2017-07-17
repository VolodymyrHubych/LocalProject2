myApp.filter('searchFilter', function() {

	return function(arr, filterStr) {
		if(!filterStr){
			return arr;
		}
        filterStr = filterStr.toLowerCase();
		var filterArr = [];
		arr.forEach(function(item){
			if(item.text.toLowerCase().indexOf(filterStr) !== -1) {
				filterArr.push(item);
			}
		});
		return filterArr;
	};

});