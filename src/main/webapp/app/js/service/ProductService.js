angular.module('app').service('ProductService', ['$http', function($http){
	
	var host = 'http://localhost/scah'; 
	var port = '8080';
	
	
	this.addProduct = function(product){
		return $http.post(host +':' + port + '/products', product, {})
					.then(function(response){
						return response.data;
					})
	}	
}])