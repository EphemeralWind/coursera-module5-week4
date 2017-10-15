(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	var service = this;
	
	service.doShit = function() {
		return "SHIT";
	};

	service.getAllCategories = function() {
		return $http({
			url: "https://davids-restaurant.herokuapp.com/categories.json"
		});
	}

	service.getItemsForCategory = function(categoryShortName) {
		return $http({
			url: "https://davids-restaurant.herokuapp.com/menu_items.json",
			params: { category: categoryShortName }
		});
	}
}

})();