var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'./app/template/list_product.html',
		controller:'ListProductCtrl',
	}).when('/createProduct', {
		templateUrl:'./app/template/create_product.html',
		controller:'ProductCtrl'
	}).when('/Admin_products', {
			templateUrl : './app/template/Array_products_admin.html',
			controller : 'ArrayProductsAdminController',
	})
	.otherwise({
		redirectTo:'/'
	})
});