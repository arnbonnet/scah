angular.module('app').factory('OrderService', function($http, CartService){
	var addOrderBody = function(order){
		var promiseAddOdert = $http.post('/api/products', order, {});
		promiseAddOdert.then(function(response){
			console.log('response date', response.data);
			return response.data;
		});
		return promiseAddOder;
	}
	
	return {
		addOrder : addOrderBody
	}
})