angular.module('app').controller('DetailProductCtrl', function($scope, $routeParams, ProductService) {
	
	$scope.product= undefined;
	var productId = $routeParams.id;
	$scope.rupture = false;
	
	//récupère les données d'un produit par rappor à son ID
	ProductService.getOneProduct(productId).then(function(product) {
		$scope.product = product;
		if(product.stock <= 5) {
			$scope.rupture = true;
		}
	});
	
	
});
