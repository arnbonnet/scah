angular.module('app', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:'./app/template/listProduct.html',
		controller:'ListProductCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});