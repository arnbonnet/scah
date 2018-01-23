var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'./app/template/list_product.html',
		controller:'ProductCtrl',
	})
	.when('/createProduct', {
		templateUrl:'./app/template/create_product.html',
		controller:'ProductCtrl'
	})
	.when('/editProduct/:id', {
		templateUrl:'./app/template/edit_product.html',
		controller:'EditProductCtrl'
	})
	.when('/Admin_products', {
			templateUrl : './app/template/Array_products_admin.html',
			controller : 'ArrayProductsAdminController',
	})
	.when('/product/:id',{
		templateUrl:'./app/template/detail_product.html',
		controller:'DetailProductCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});