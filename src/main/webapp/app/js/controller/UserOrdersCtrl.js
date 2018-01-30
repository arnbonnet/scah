/**
 * Controller de la vue user_orders (commande de l'utilisateur);
 */

angular.module('app').controller('UserOrdersCtrl', function($scope, CartService, OrdersService) {
	
	
	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	
	OrdersService.getAllOrders().then(function(data){
		$scope.orders = data;
		console.log('orsrers ', $scope.orders);
		
		
	});
	
	
});

