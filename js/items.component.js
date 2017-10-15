(function () {
'use strict';

angular.module('MenuApp')
.component('items', {  
	templateUrl: 'component-items.html',
	bindings: {
		items: '<'
	} 
});
})();