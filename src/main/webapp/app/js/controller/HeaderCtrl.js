angular.module('app').controller('HeaderCtrl', function($scope, UserService, ProductService, CartService) {
	
	$scope.search = function(title) {
		ProductService.setSearch(title);
	};
	
	$scope.role = function(){
		return UserService.getRole();
	};

	$scope.nbItemsInCart = CartService.getCartNbItem();

	$scope.logout = function() {
		UserService.logout();
	};
	
});