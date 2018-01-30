angular.module('app').controller('HeaderCtrl', function($scope, $location, UserService, ProductService, CartService) {
	
	$scope.search = function(title) {
		ProductService.setSearch(title)
		$location.path('/');
	};
	
	$scope.role = function(){
		return UserService.getRole();
	};
	
	$scope.nbItemsInCart= function(){
		return CartService.getCartNbItem();
	}

	$scope.logout = function() {
		UserService.logout();
	};
	
	UserService.getSession();
	
});