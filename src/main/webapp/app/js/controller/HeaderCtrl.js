angular.module('app').controller('HeaderCtrl', function($scope, CartService, UserService) {
	 
	$scope.role = function(){
		return UserService.getRole();
	};
	
	$scope.nbItemsInCart= function(){
		return CartService.getCartNbItem();
	}
		
/*
	if(UserService.isAuthenticated()) {
		UserService.getRole().then(function(data) {
			$scope.role = data;
		},
		function() {
			console.log("Error HeaderCtrl - getRole");
		});
	}
*/
	$scope.logout = function() {
		UserService.logout();
	};
});