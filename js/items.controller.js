(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController); 

ItemsController.$inject = ['items']; 
function ItemsController(items) {  
	var view = this;
	view.category = items.data.category;
	view.items = items.data.menu_items;

	console.log(view.category);
	console.log(view.items);
}

})();