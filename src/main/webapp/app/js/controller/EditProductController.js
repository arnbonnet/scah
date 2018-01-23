angular.module('app').controller('EditProductCtrl', function($scope, $routeParams, ProductService) {

	var productId = $routeParams.id;
	console.log(productId);
	ProductService.getOneProduct(productId).then(function(product) {
		$scope.data = {
				product : product
		};
	}, function(response){
		console.log('error loading product' + response);
	})
	
	$scope.editProduct = function(){
		var productId = $routeParams.id; 
		console.log(productId);
		ProductService.getOneProduct(productId).then(function(product) {
			$scope.data.product = product;
		})
		console.log($scope.data.product);
		return ProductService.editProduct($scope.data.product).then(function(response){
			console.log('product edit success');
			return response.data;
		}, function(response){
			console.log("error editing product" + response.data)
		});
	};
});
