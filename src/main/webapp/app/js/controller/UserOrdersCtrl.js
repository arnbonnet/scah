/**
 * Controller de la vue user_orders (commande de l'utilisateur);
 */

angular.module('app').controller('UserOrdersCtrl', function($scope, CartService, OrdersService) {
	
	
	
	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	});
	
	
	OrdersService.getAllOrders().then(function(data){
		$scope.orders = data;
		console.log($scope.orders);
		console.log('scope', $scope.orders.quantityProducts);
		
	});
	
	
});


/*{
"date":"2018-01-26", 
"orderNumber" : "123", 
"totalPrice" : "12.52", 
"quantityProducts" :[{
"product":
{"id":"152"},
"quantity":"5"}]
}

{
"date":"2018-01-26", 
"orderNumber" : "459", 
"totalPrice" : "78.5", 
"quantityProducts" :[{
"product":
{"id":"153"},
"quantity":"2"}]
}
*/