angular.module('app').factory('ProductService', ['$http', '$location', function($http, $location) {
	
	var host = 'http://localhost' ;
	var port = '8080';
	
	var promiseProducts = $http.get(host + ':' + port + '/scah/api/products');
	var getAllProductBody = function() {
		var promiseListProduct = promiseProducts.then(function(response) {
			return response.data;
		});
		return promiseListProduct;
	};
	
	var detailProductBody = function(product) {
		$location.path('/'+ product.id);
	};
	
	var addProductBody = function(product){
		var promiseAddProduct = $http.post(host +':' + port + '/scah/api/products', product, {});
		promiseAddProduct.then(function(response){
			return response.data;
		});
		return promiseAddProduct;
	};
	
	var promise = {};
	var getOneProductBody = function(id) {
		if(!promise[id]) {
			promise[id] = $http.get(host + ':' + port +'/scah/api/products/search/'+id);
		}
		var prom2 = promise[id].then(function(reponse) {
			return reponse.data;
		});
		return prom2;
	};
	
	var editProductBody = function(product){
		var promiseEditProduct = $http.put(host +':' + port + '/scah/api/products', product, {});
		promiseEditProduct.then(function(response){
			return response.data;
		});
		return promiseEditProduct;
	};
	
	
	return {
		getAllProduct : getAllProductBody,
		detailProduct : detailProductBody,
		addProduct : addProductBody,
		getOneProduct : getOneProductBody,
		editProduct : editProductBody
	}
}]);

