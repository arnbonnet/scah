angular.module('app').factory('ProductService', ['$http', '$location', function($http, $location) {
	var promiseProducts = $http.get('/api/products').then(function(response) {
		return response.data;
	});
	
	var reloadBody = function(){
		console.log('relaod function')
		promiseProducts = $http.get('/api/products').then(function(response) {
			return response.data;
		});
		return promiseProducts;
	}
	
	var getAllProductBody = function() {
		return promiseProducts;
	};
	
	var addProductBody = function(product){
		var promiseAddProduct = $http.post('/api/products', product, {});
		promiseAddProduct.then(function(response){
			return response.data;
		});
		return promiseAddProduct;
	};
	
	var promise = {};
	var getOneProductBody = function(id) {
		if(!promise[id]) {
			promise[id] = $http.get('/api/products/search/'+id);
		}
		var prom2 = promise[id].then(function(reponse) {
			return reponse.data;
		});
		return prom2;
	};
	
	var editProductBody = function(product){
		var promiseEditProduct = $http.put('/api/products', product, {});
		promiseEditProduct.then(function(response){
			return response.data;
		});
		return promiseEditProduct;
	};
	
	var removeProductBody = function(id){
		var promiseRemoveProduct = $http.delete('/api/products/' + id);
		promiseRemoveProduct.then(function(response){
			return response.data;
		});
		return promiseRemoveProduct;
	};

	//upload des images
	var uploadFileBody = function(file){
        var formdata = new FormData();
        formdata.append('file', file);
		var promiseUploadFile = $http.post('/api/products/upload', formdata,  {headers: {'Content-Type': undefined}});
		promiseUploadFile.then(function(response){
			console.log(response);
			return response.data;
		}, function(response){
			console.log('ERR', response);
		});
		return promiseUploadFile;
	}

	return {
		getAllProduct : getAllProductBody,
		addProduct : addProductBody,
		getOneProduct : getOneProductBody,
		editProduct : editProductBody,
		removeProduct : removeProductBody,
		reload : reloadBody,
		uploadFile : uploadFileBody
	}
}]);

