angular.module('MyApp')
	.controller('customersCtrl', [ '$http', '$window', 'customersApi','getData', 'customerService', customersCtrl]);
  	
  	function customersCtrl($http, $window, customersApi, getData, customerService){
  		var vm = this;

	 	customerService.async().then(function() {
	        vm.customersList = customerService.getCustomers();                    	
	    });


	   	vm.removeCustomers = function(ind){
	   		console.log(ind);
			var id = vm.customersList[ind].id;
			$http({
				method: 'DELETE',
				url: customersApi+'/'+id
			}).success(function(res){
				vm.customersList.splice(ind, 1);
				console.log('deleted');
			});
		};

		vm.editCustomers = function(ind, customer){			
			var id = vm.customersList[ind].id;
			$http({
				method: 'PUT',
				url: customersApi+'/'+id,
				data: customer				
			}).success(function(res){				
				console.log(res);
			});
		};

		vm.addCustomer = function(el){			
			$http.post(customersApi, el).success(function(data){				
				vm.customersList.push(data);				
			}).error(function(err){
				console.log(err);				
			});
		};
  		
  	};	