angular.module('app').controller('ProductCtrl', function($scope, ProductService, UserService) {
	
	UserService.getSession().then(function(){
		
		$scope.ListProducts = function() {
			return ProductService.getProducts();
		};

	});
});