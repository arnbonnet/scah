/**
 * 
 */
angular.module('app').controller('AdminOrdersCtrl', function($scope, OrdersService, UserService) {
	
	//UserService.checkConnection(['admin'], '/connection');
	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	
	OrdersService.getAllOrders().then(function(response){
		$scope.admin = response;
	});
		
	
		
		
});

