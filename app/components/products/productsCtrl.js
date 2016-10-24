(function(){
	angular.module('MyApp')
		.controller('productsCtrl', ['$scope', '$http', '$window', 'productsApi', 'dataService', function ($scope, $http, $window, productsApi, dataService) {
	  		
	  	
	  	$scope.updateTest = function(val){
	  		test.resultfunc(val);
	  	};


			dataService.getData(productsApi)
				.then(function (response) {
					$scope.productsList = response.data;
				}, function (error) {
					console.log(error)
			});

			$scope.removeProduct = function(ind){
				var id =  $scope.productsList[ind].id;
				dataService.deleteData(productsApi,id)
					.then(function (response) {
						$scope.productsList.splice(ind, 1);
					}, function (error) {
						console.log(error)
				});				
			};



	}]);
}());