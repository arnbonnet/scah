angular.module('app').factory('ProductService', ['$http', '$location', function($http, $location) {
	
	var host = 'http://localhost' ;
	var port = '8080';
	
	var promiseProducts = $http.get(host + ':' + port + '/scah/api/products');
	var getAllProductBody = function() {
		var promiseListProduct = promiseProducts.then(function(response) {
			console.log(response.data);
			return response.data;
		});
		return promiseListProduct;
	}
	
	var productPromises = {};
	var getOneProductBody = function(id) {
		if(!productPromises[id]) {
			productPromises[id] = $http.get(host + ':' + port + '/scah/api/products/search/'+id);
		}
		var promiseProduct = productPromises[id].then(function(response) {
			console.log(reponse);
			return reponse;
		});
		return promiseProduct;
	}
	
	var detailProductBody = function(response) {
		console.log(response.id);
		$location.path('/'+ response.id);
	};
	
	return {
		getAllProduct : getAllProductBody,
		getOneProduct : getOneProductBody,
		detailProduct : detailProductBody
	}
	
}]);