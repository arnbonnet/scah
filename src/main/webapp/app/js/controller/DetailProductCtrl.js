angular.module('app').controller('DetailProductCtrl', function($scope, $routeParams, ProductService) {
	
	$scope.product=undefined;
	
	var productId = $routeParams.id;
	console.log(productId);
	ProductService.getOneProduct(productId).then(function(product) {
		$scope.product = product;
	})
});

