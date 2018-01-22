angular.module('app').controller('ListProductCtrl', function($scope, ProductService) {
	
	$scope.ListProducts = [];
	
	ProductService.getAllProduct().then(
		function(data) {
			$scope.ListProduct = data;
		},
		function() {
			console.log("Error ListProductCtrl - getAllProduct");
		}
	);
	
});