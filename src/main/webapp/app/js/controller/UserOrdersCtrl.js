/**
 * Controller de la vue user_orders (commande de l'utilisateur);
 */

angular.module('app').controller('UserOrdersCtrl', function($scope, CartService, OrdersService, UserService) {

	UserService.checkConnection(['user'], '/connection');
	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	
	OrdersService.getOrdersById().then(function(data){
		$scope.orders = data;
		console.log('orsrers ', $scope.orders);
		
		
	});
	
	
});

