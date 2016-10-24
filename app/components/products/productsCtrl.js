
angular.module('MyApp')
	.controller('productsCtrl', ['$http', '$window', 'productsApi', 'dataService', productsCtrl]);

	function productsCtrl($http, $window, productsApi, dataService) {
		var vm = this;

		dataService.getData(productsApi)
			.then(function (response) {
				vm.productsList = response.data;
			}, function (error) {
				console.log(error)
		});

		vm.editProduct = function(ind, product){
			console.log(ind +'|'+ product);
			var id = vm.productsList[ind].id;
			$http({
				method: 'PUT',
				url: productsApi+'/'+id,
				data: product				
			}).success(function(res){				
				console.log(res);
			});
		};

		vm.removeProduct = function(ind){
			var id =  vm.productsList[ind].id;
			dataService.deleteData(productsApi,id)
				.then(function (response) {
					vm.productsList.splice(ind, 1);
				}, function (error) {
					console.log(error)
			});				
		};

		vm.addProduct = function(el){			
			$http.post(productsApi, el).success(function(data){				
				vm.productsList.push(data);				
			}).error(function(err){
				console.log(err);				
			});
		};
};