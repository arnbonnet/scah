angular.module('app', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'./app/template/list_product.html',
		controller:'ListProductCtrl'
	})
	.when('/:id',{
		templateUrl:'./app/template/detail_product.html',
		controller:'ListProductCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});