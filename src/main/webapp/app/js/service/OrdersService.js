/**
 * gestion des commandes
 */

angular.module('app').factory('OrdersService', ['$http', function($http) {
	
	var getAllOrdersBody = function(){
		return $http.get('/api/orders').then(function(response) {
			return response.data;
		});
	}
		

		return {
			getAllOrders : getAllOrdersBody
		}
}]);