angular.module('app').controller('ProductCtrl', function($scope, ProductService) {
	
	$scope.ListProducts = function() {
		return ProductService.getProducts();
	};

});