angular.module('app').controller('ProductCtrl', function($scope, ProductService, $routeParams) {
	$scope.data = {
		product : {},
	};
	
	$scope.createProduct = function(){
		$scope.uploadFile();
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
		    $scope.data.product.image = input.files[0].name;
		    

		    reader.onload = function(e) {
		      $('#img').attr('src', e.target.result);
		    }

		    reader.readAsDataURL(input.files[0]);
		  }
		}

		$("#fichier").change(function() {
			
		  readURL(this);
		});
		
		$scope.uploadFile = function() {
			var fichier = document.getElementById('fichier').files[0];
			ProductService.uploadFile(fichier);
			console.log("passage dans upload file");
		}
		
	
		

});