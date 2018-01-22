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
	
	var addProductBody = function(product){
		var promiseAddProduct = $http.post(host +':' + port + '/scah/api/products', product, {});
		promiseAddProduct.then(function(response){
			return response.data;
		});
		return promiseAddProduct;
	}
	
	return {
		getAllProduct : getAllProductBody,
		addProduct : addProductBody
	}
	
}]);

