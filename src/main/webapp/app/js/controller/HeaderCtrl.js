angular.module('app').controller('HeaderCtrl', function($scope, CartService/*, UserService*/) {
	 
	$scope.role;
	
	$scope.nbItemsInCart=CartService.getCartNbItem();
		
//	UserService.getRole().then(function(data) {
//		$scope.role = data;
//	},
//	function() {
//		console.log("Error HeaderCtrl - getRole");
//	});
});