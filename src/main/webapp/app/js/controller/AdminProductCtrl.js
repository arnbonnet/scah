angular.module('app').controller('AdminProductCtrl', function($scope, $location, ProductService, UserService) {
	
	UserService.checkConnection(['admin'], '/connection');
	
	$scope.data = {
			product : {}
	};
		
	$scope.createProduct = function(){
		$scope.uploadFile();
		return ProductService.addProduct($scope.data.product).then(function(response){
			console.log('product creation success');
			$location.path('/admin_products');
			return response.data;
		}, function(response){
			console.log("error creating product" + response.data)
		});
		
	};
	
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
		var file = document.getElementById('fichier').files[0];
		ProductService.uploadFile(file);
		console.log("passage dans upload file");
	}
	
});