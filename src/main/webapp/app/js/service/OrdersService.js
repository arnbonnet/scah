/**
 * gestion des commandes
 */

angular.module('app').factory('OrdersService', ['$http', function($http) {
	
	var getAllOrdersBody = function(){
		return $http.get('/api/orders').then(function(response) {
			console.log('response.data', response.data);
			return response.data;
		});
	}
	
	var addOrderBody = function(order){
		console.log('service', order);
		var promiseAddOdert = $http.post('/api/orders', order, {});
		promiseAddOdert.then(function(response){
			return response.data;
		});
		return promiseAddOdert;
	}
	
		return {
			getAllOrders : getAllOrdersBody,
			addOrder : addOrderBody
			
		}
}]);