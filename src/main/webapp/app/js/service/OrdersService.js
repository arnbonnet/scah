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
		var promiseAddOdert = $http.post('/api/orders', order, {});
		promiseAddOdert.then(function(response){
			return response.data;
		});
		return promiseAddOdert;
	}
	
	var getOrdersByIdBody = function(){
		var promiseOrderbyId = $http.get('/api/users/orders');
		promiseOrderbyId.then(function(response){
			console.log('response.data order by id', response.data);
			return response.data;
		});
		return promiseOrderbyId;
		
	}
	
		

		return {
			getAllOrders : getAllOrdersBody,
			addOrder : addOrderBody,
			getOrdersById : getOrdersByIdBody
		}
}]);