angular.module('MyApp')
	.filter('dateFormat', function(){
		return function(date){
			var result = new Date(date);

			// if(result > 0){
			// 	return 'Left '+ result +' days';
			// }else if(result == 0){
			// 	return 'Task end today';					
			// }else{
				return result;					
			// };				
		}
	});