angular.module('MyApp', ['ngRoute', 'ngResource'])
	.constant('customersApi','/api/customers')
	.constant('productsApi','/api/products')
	.constant('invoicesApi','/api/invoices')
	.config(['$routeProvider', '$httpProvider',function ($routeProvider, $httpProvider){
		$routeProvider
		.when('/', {
			controller: 'invoicesCtrl as invoices',
			templateUrl: 'components/invoices/invoices.html'
		}).when('/new-invoice', {
			controller: 'invoicesCtrl as invoices',
			templateUrl: 'components/invoices/addInvoice.html'
		}).when('/products', {
			templateUrl: 'components/products/products.html',
			controller: 'productsCtrl as product'
		}).when('/customers', {
			templateUrl: 'components/customers/customers.html',
			controller: 'customersCtrl as customer'			
		}).when('/page-one/details/:id', {
			controller: 'innerPageCtrl',
			templateUrl: 'components/page-one-inner/inner-page.html'
		}).otherwise({
	      redirectTo: '/'
	    });
	}]);

	