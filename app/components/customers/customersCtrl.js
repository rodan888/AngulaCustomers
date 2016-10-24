(function(){
	angular.module('MyApp')
		.controller('customersCtrl', ['$scope', '$http', '$window', 'customersApi','getData', 'customerService', function ($scope, $http, $window, customersApi, getData, customerService) {
	  
		// getPage.async(customersApi).then(function() {
		//     $scope.customersList = getPage.data();
		// });

		// getData.getData(customersApi).then(function(data) {
  //       	$scope.customersList = data;
  //   	});
     	customerService.async().then(function() {
            $scope.customersList = customerService.getCustomers();                    	
        });


  //       $scope.addCustomer = function(el){
  //       	$scope.customersList = customerService.addCustomer(el);
		// };


		// $scope.newPage = function(){
		// 	$http.post(customersApi, $scope.page).success(function(response){
		// 		$scope.testData.push(response);
		// 		console.log(response);
		// 	});
		// };	
		


		$scope.removeCustomers = function(ind){
			var id = $scope.customersList[ind].id;
			$http({
				method: 'DELETE',
				url: customersApi+'/'+id
			}).success(function(res){
				$scope.customersList.splice(ind, 1);
				console.log('deleted');
			});
		};

		$scope.editCustomers = function(ind, customer){
			var id = $scope.customersList[ind].id;
			$http({
				method: 'PUT',
				url: customersApi+'/'+id,
				data: customer				
			}).success(function(res){				
				console.log(res);
			});
		};

		$scope.addCustomer = function(el){
			$scope.customersList.push();
			$http.post(customersApi, el).success(function(data){				
				$scope.customersList.push(data);				
			}).error(function(err){
				console.log(err);				
			});
		};

	}]);
}());