/**
 * Controller de la vue recherche produit de l'admin, avec affichage de tous les prpduits sous la forme de tableaux
 */

app.controller('ArrayProductsAdminController', function($scope, ProductService){
	$scope.advancedResearch = false;
	$scope.activate = false;
	$scope.ListProduct = [];
	$scope.check = [];
	$scope.state = false;
	
	
    $scope.showAdvancedResearch = function() {
        $scope.advancedResearch = !$scope.advancedResearch;
    }
    
    ProductService.getAllProduct().then(
    		function(data) {
    			$scope.ListProduct = data;
    			for(var key in $scope.ListProduct){
    				$scope.check[key]=false;
    			}
    			
    		},
    		function() {
    			console.log("Error ListProductCtrl - getAllProduct");
    		}
    	);
    
    var states = function(){
    	console.log('state');
    	for(var key in $scope.check){
    		if ($scope.check[key]){
    			$scope.state = true;
    		}
    		$scope.state = false;
    	}
    }

});