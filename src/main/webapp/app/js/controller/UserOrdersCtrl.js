/**
 * Controller de la vue user_orders (commande de l'utilisateur);
 */

angular.module('app').controller('UserOrdersCtrl', function($scope, CartService) {
	
	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	
	$scope.products =  CartService.getCartItems();
	$scope.orders = [{date:'2015-02-01', order_number:'488676669', total_price : '57.36', user_id:'98746883', products:[$scope.products]}, {date:'2015-02-01', order_number:'488676669', total_price : '57.36', user_id:'98746883', products:[$scope.products]}, {date:'2015-02-01', order_number:'488676669', total_price : '57.36', user_id:'98746883', products:[$scope.products]}];
});