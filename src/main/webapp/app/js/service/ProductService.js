angular.module('app').factory('ProductService', ['$http', '$location', 'UserService', function($http, $location, UserService) {
	
	var promiseProducts;
	var updatePromiseProducts = function() {
		if(UserService.getRole() === 'admin') {
			return promiseProducts = $http.get('/api/products').then(function(response) {
				return response.data;
			});
		} else {
			return promiseProducts = $http.get('/api/products/search', {params:{activated:true}}).then(function(response) {
				return response.data;
			});
		}
	};
	updatePromiseProducts();
	
	var reloadBody = function() {
		return updatePromiseProducts().then(function(response) {
			products = response;
			return response;
		});
	}
	
	var getAllProductBody = function() {
		return promiseProducts;
	};

	var getProductsByTitleBody = function(productTitle) {
		var promiseGetByTitle;
		if(UserService.getRole() === 'admin') {
			promiseGetByTitle = $http.get('/api/products/search', {params:{title:productTitle}});
		} else {
			promiseGetByTitle = $http.get('/api/products/search', {params:{title:productTitle, activated:true}});
		}
		return promiseGetByTitle.then(function(response) {
			return response.data;
		});
	};
	
	var products = [];
	getAllProductBody().then(function(response) {
		products = response;
	});

	var getProductsBody = function() {
		return products;
	};
	
	var setSearchBody = function(title) {
		products = [];
		getProductsByTitleBody(title).then(function(response) {
			products = response;
		});
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
			return response.data;
		}, function(response){
			console.log('ERR', response);
		});
		return promiseUploadFile;
	}

	return {
		getAllProduct : getAllProductBody,
		setSearch : setSearchBody,
		getProductsByTitle : getProductsByTitleBody,
		getProducts : getProductsBody,
		addProduct : addProductBody,
		getOneProduct : getOneProductBody,
		editProduct : editProductBody,
		removeProduct : removeProductBody,
		reload : reloadBody,
		uploadFile : uploadFileBody,
	}
}]);

