angular.module('app').factory('ProductService', ['$http', '$location', function($http, $location) {
		
	var promiseProducts = $http.get('/scah/api/products').then(function(response) {
		return response.data;
	});
	
	var reloadBody = function(){
		console.log('relaod function')
		promiseProducts = $http.get('/scah/api/products').then(function(response) {
			return response.data;
		});
		return promiseProducts;
	}
	
	var getAllProductBody = function() {
		return promiseProducts;
	};
	
	var addProductBody = function(product){
		var promiseAddProduct = $http.post('/scah/api/products', product, {});
		promiseAddProduct.then(function(response){
			return response.data;
		});
		return promiseAddProduct;
	};
	
	var promise = {};
	var getOneProductBody = function(id) {
		if(!promise[id]) {
			promise[id] = $http.get('/scah/api/products/search/'+id);
		}
		var prom2 = promise[id].then(function(reponse) {
			return reponse.data;
		});
		return prom2;
	};
	
	var editProductBody = function(product){
		var promiseEditProduct = $http.put('/scah/api/products', product, {});
		promiseEditProduct.then(function(response){
			return response.data;
		});
		return promiseEditProduct;
	};
	
	var removeProductBody = function(id){
		var promiseRemoveProduct = $http.delete('/scah/api/products/' + id);
		promiseRemoveProduct.then(function(response){
			return response.data;
		});
		return promiseRemoveProduct;
	};
	
	//upload des images
	var uploadFile = function(file){
		var promiseUploadFile = $http.post('/scah/api/products/upload', file);
		promiseUploadFile.them(function(response){
			return response.data;
		});
		return promiseUploadFile;
	}
	
	
	return {
		getAllProduct : getAllProductBody,
		addProduct : addProductBody,
		getOneProduct : getOneProductBody,
		editProduct : editProductBody,
		removeProduct : removeProductBody,
		reload : reloadBody
	}
}]);

