/**
 * Controller de la vue user_orders (commande de l'utilisateur);
 */

angular.module('app').controller('UserOrdersCtrl', function($scope, CartService, OrdersService, UserService) {


	UserService.checkConnection(['user'], '/connection');

	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	
	$scope.orders = function(){
		$scope.user = UserService.getUser();
		console.log($scope.user);
		return $scope.user.orders;
	}
	
});

