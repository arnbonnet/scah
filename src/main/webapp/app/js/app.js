angular.module('app', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'./app/template/list_product.html',
		controller:'ListProductCtrl'
	}).when('/createProduct', {
		templateUrl:'./app/template/create_product.html',
		controller:'ProductCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});