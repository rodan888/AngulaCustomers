angular.module('MyApp', ['ngRoute', 'ngResource'])
	.constant('customersApi','/api/customers')
	.constant('productsApi','/api/products')
	.constant('invoicesApi','/api/invoices')
	.config(['$routeProvider', '$httpProvider',function ($routeProvider, $httpProvider){
		$routeProvider
		.when('/', {			
			templateUrl: 'components/customers/customers.html',
			controller: 'customersCtrl'
		}).when('/products', {
			templateUrl: 'components/products/products.html',
			controller: 'productsCtrl'
		}).when('/invoices', {
			controller: 'invoicesCtrl as invoices',
			templateUrl: 'components/invoices/invoices.html'
		}).when('/page-one/details/:id', {
			controller: 'innerPageCtrl',
			templateUrl: 'components/page-one-inner/inner-page.html'
		}).otherwise({
	      redirectTo: '/'
	    });
	}]);

	