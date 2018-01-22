angular.module('app').controller('ProductCtrl', function($scope, ProductService) {
	$scope.data = {
			product : {},
		};
	$scope.createProduct = function(){
		console.log($scope.data.product);
		return ProductService.addProduct($scope.data.product).then(function(response){
			console.log('product creation success');
			return response.data;
		});
	}
});