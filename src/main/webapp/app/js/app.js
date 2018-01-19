angular.module('app', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'./app/template/list_product.html',
		controller:'ListProductCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});