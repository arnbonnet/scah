/**
 * gestion des commandes
 */

angular.module('app').factory('OrdersService', ['$http', function($http) {
	
	
	
	var getAllOrdersBody = function(){
		var promise = $http.get('/api/orders');
		return promise.then(function(response) {
			console.log('service', response);
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