var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

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
		controller:'EditProductController'
	})
	.when('/admin_products', {
			templateUrl : './app/template/Array_products_admin.html',
			controller : 'ArrayProductsAdminController',
	})
	.when('/product/:id',{
		templateUrl:'./app/template/detail_product.html',
		controller:'DetailProductCtrl'
	})
	.when('/connection',{
		templateUrl:'./app/template/connection_registration.html',
		controller:'ConnectionRegistrationCtrl'
	})
	.when('/cart',{
		templateUrl:'./app/template/cart.html',
		controller:'CartCtrl'
	})
	.when('/userOrders',{
		templateUrl:'./app/template/user_orders.html',
		controller:'UserOrdersCtrl'
	})
	.when('/adminOrders',{
		templateUrl:'./app/template/admin_orders.html',
		controller:'UserOrdersCtrl'
	})
	.when('/profile',{
		templateUrl:'./app/template/profile.html',
		controller:'ProfileCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});