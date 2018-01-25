angular.module('app').controller('DetailProductCtrl', function($scope, $routeParams, ProductService, CartService) {
	
	$scope.product= undefined;
	var productId = $routeParams.id;
	$scope.rupture = false;
	$scope.quantity = 1;
	
	//récupère les données d'un produit par rappor à son ID
	ProductService.getOneProduct(productId).then(function(product) {
		$scope.product = product;
		if(product.stock <= 5) {
			$scope.rupture = true;
		}
	});
	
	$scope.addToCart = function(item){
		CartService.addToCart(item, $scope.quantity);
		console.log('quantity:' + $scope.quantity )
		console.log(CartService.getCartNbItem());
	}
	
});
