/**
 * 
 */
angular.module('app').controller('AdminOrdersCtrl', function($scope, OrdersService, UserService) {
	
	//UserService.checkConnection(['admin'], '/connection');
	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	$scope.orders = OrdersService.getAllOrders();
	console.log($scope.orders);
});

