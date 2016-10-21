(function(){
	angular.module('MyApp')
		.controller('customersCtrl', ['$scope', '$http', '$window', 'homeApiUrl','getPage', function ($scope, $http, $window, homeApiUrl, getPage) {
	  
		getPage.async(homeApiUrl).then(function() {
		    $scope.customersList = getPage.data();
		});

		// $scope.newPage = function(){
		// 	$http.post(homeApiUrl, $scope.page).success(function(response){
		// 		$scope.testData.push(response);
		// 		console.log(response);
		// 	});
		// };	

		$scope.removeCustomers = function(ind){
			var id = $scope.customersList[ind].id;
			$http({
				method: 'DELETE',
				url: homeApiUrl+'/'+id
			}).success(function(res){
				$scope.customersList.splice(ind, 1);
				console.log('deleted');
			});
		};

		$scope.editCustomers = function(ind, customer){
			var id = $scope.customersList[ind].id;
			$http({
				method: 'PUT',
				url: homeApiUrl+'/'+id,
				data: customer				
			}).success(function(res){				
				console.log(res);
			});
		};

	}]);
}());