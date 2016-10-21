angular.module('MyApp', ['ngRoute', 'ngAnimate', 'ngMap', 'ngResource'])
	.constant('homeApiUrl','/api/customers')
	.config(['$routeProvider', '$httpProvider',function ($routeProvider, $httpProvider){
		$routeProvider
		.when('/', {			
			templateUrl: 'components/customers/customers.html',
			controller: 'customersCtrl',
			animation: 'first'
		}).when('/page-one/details/:id',{
			controller: 'innerPageCtrl',
			templateUrl: 'components/page-one-inner/inner-page.html',
			animation: 'first'
		}).when('/products', {
			templateUrl: 'components/page-two/page-two.html',
			controller: 'pageTwoCtrl',
			animation: 'first'
		}).otherwise({
	      redirectTo: '/'
	    });
	}])
	.controller('animateCtrl', function($scope, $rootScope){
		$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
			$rootScope.animation = currRoute.animation;
		});		
	});