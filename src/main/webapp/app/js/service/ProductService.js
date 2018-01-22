angular.module('app').factory('ProductService', ['$http', function($http) {
	
	var host = 'http://localhost' ;
	var port = '8080';
	var promiseProducts = $http.get(host + ':' + port + "/scah/api/products");
	
	var getAllProductBody = function() {
		var promiseListProduct = promiseProducts.then(function(response) {
			console.log(response.data);
			return response.data;
		});
		return promiseListProduct;
	}
	
	return {
		getAllProduct : getAllProductBody
	}
	
}]);