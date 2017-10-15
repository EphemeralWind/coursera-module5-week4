(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {  
	templateUrl: 'component-categories.html',
	bindings: {
		categories: '<'
	} 
});
})();