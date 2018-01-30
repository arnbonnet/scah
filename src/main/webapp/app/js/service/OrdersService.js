/**
 * gestion des commandes
 */

angular.module('app').factory('OrdersService', ['$http', function($http) {
	
	var getAllOrdersBody = function(){
		var promise = $http.get('/api/orders');
		promise.then(function(response) {
			console.log('response.data', response.data);
			return response.data;
		}, function(response){
			console.log ('erreur dans le service', response.data);
		});
		return promise;
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