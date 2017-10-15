(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig); 

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']; 
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		.state('home', {      
			url: '/',      
			templateUrl: 'template-home.html'    
		})
		.state('categories', {      
			url: '/categories',
			templateUrl: 'template-categories.html',
			controller: 'CategoriesController as con',
			resolve: {
			 	categories: ['MenuDataService', function (MenuDataService) {
			 		return MenuDataService.getAllCategories();
			 	}]  
			 }
		})
		.state('items', {      
			url: '/items/{category}',
			templateUrl: 'template-items.html',
			controller: 'ItemsController as con',
			resolve: {
			 	items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
			 		return MenuDataService.getItemsForCategory($stateParams.category);
			 	}]  
			 }   
		})
	;
};

})();