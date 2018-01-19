angular.module('app').controller('ProductCtrl', function($scope) {
	$scope.types = ["Livre", "DVD", "CD"];
	
	$scope.createProduct = function(){
		console.log($scope.product);
		return $scope.product;
	}
});