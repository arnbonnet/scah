angular.module('app').controller('ProductCtrl', function($scope, ProductService, $routeParams) {
	$scope.data = {
		product : {},
	};
	
	$scope.createProduct = function(){
		console.log($scope.data.product);
		return ProductService.addProduct($scope.data.product).then(function(response){
			console.log('product creation success');
			return response.data;
		}, function(response){
			console.log("error creating product" + response.data)
		});
	};
		
	$scope.ListProducts = [];
	ProductService.getAllProduct().then(
		function(data) {
			$scope.ListProduct = data;
		},
		function() {
			console.log("Error ListProductCtrl - getAllProduct");
		}
	);
	
	
	
//	$scope.detailProduct = function(product) {
//		console.log(product.id);
//		console.log(product.title);
//		
//		ProductService.detailProduct(product);
//	};
});