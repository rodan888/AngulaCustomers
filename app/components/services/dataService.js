(function() {
	angular
		.module('MyApp')
		.factory('getPage', function($http, $q) {
			  var deffered = $q.defer();
			  var data = [];  
			  var getPage = {};

			  getPage.async = function(url) {
				$http.get(url)
				.success(function (d) {
				  data = d;			
				  deffered.resolve();
				});
				return deffered.promise;
			  };
			  getPage.data = function() { return data; };

			  return getPage;
		})
		.factory('getData', function($q, $http) { 
			return {
				getData: function(url) {
					var defer = $q.defer();
					$http.get(url, { cache: 'true'})
					.success(function(data) {
						defer.resolve(data);
					});
					return defer.promise;
				}
			}
		})
		.service('dataService', ['$http', function ($http) {
			this.getData = function (urlBase) {
				return $http.get(urlBase);
			};
			this.getDataItem = function (urlBase, id) {
				return $http.get(urlBase + '/' + id);
			};
			this.insertData = function (urlBase, cust) {
				return $http.post(urlBase, cust);
			};
			this.updateData = function (urlBase, cust) {
				return $http.put(urlBase + '/' + cust.id, cust)
			};
			this.deleteData = function (urlBase, id) {
				return $http.delete(urlBase + '/' + id);
			};			
		}])
		.factory('test', function() { 
			return {
				result: ['1','2','3','4'],
				testData: function(el) {					
					this.result.push(el);
					return this.result;
				},
				resultfunc: function(el){
					if(el){
						this.testData(el);
					}else{
						return this.result;						
					}
				}
			}
		})

		.factory('customerService', function($q, $http) { 
			return {
				customers: [],
				async: function() {					
					var deffered = $q.defer(),
							vm = this;
					$http.get('/api/customers', { cache: 'true'})
						.success(function(data) {
							vm.customers = data;			
				  		deffered.resolve();					  
					});						
					return deffered.promise;
				},
				getCustomers: function() { 
					return this.customers;					
				},
				addCustomer: function(el){
					var vm = this;
					$http.post('/api/customers', el).success(function(data){				
						vm.customers.push(data);
									
						return vm.customers; 
					}).error(function(err){
						console.log(err);				
					});										
				},
				resultfunc: function(el){
					if(el){
						this.testData(el);
					}else{
						return this.result;						
					}
				}
			}
		})


})();
