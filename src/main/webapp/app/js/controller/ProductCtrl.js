angular.module('app').controller('ProductCtrl', function($scope, ProductService) {
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
			console.log("Error ProductCtrl - getAllProduct");
		}
	);
	
	
	//fonction qui permet l'affichage de l'image uploader en prévisualisation
	//attention c'est en jquery
	
	function readURL(input) {
		if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    reader.onload = function(e) {
		      $('#img').attr('src', e.target.result);
		    }

		    reader.readAsDataURL(input.files[0]);
		  }
		}

		$("#imgImport").change(function() {
		  readURL(this);
		});
	

});