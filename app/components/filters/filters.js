angular.module('MyApp')
	.filter('dateFormat', function(){
		return function(date){
			var result = new Date(date);
			return result;					
		}
	})