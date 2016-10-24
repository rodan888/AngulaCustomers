angular.module('MyApp')
	.filter('dateFormat', function(){
		return function(date){
			var result = new Date(date);
			return result;					
		}
	})
	.filter('totalSum', function(){
		return function(productList, discont){
			var discont = 1 + discont;
				result = 0;
				
			if (productList.length > 0) {
				for(var i = 0; i<productList.length; i++){
					result += productList[i].price;
				};			
			}			
			return result - (result*discont/100);
		}
	})