(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController); 

CategoriesController.$inject = ['categories']; 
function CategoriesController(categories) {  
	var view = this;  
	view.categories = categories.data;

	console.log(view.categories);
}

})();