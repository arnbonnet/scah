/**
 * Controller de la vue recherche produit de l'admin, avec affichage de tous les prpduits sous la forme de tableaux
 */

app.controller('ArrayProductsAdminController', function($scope, ProductService){
	$scope.advancedResearch = false;
	$scope.activate = false;
	$scope.ListProduct = [];
	$scope.check = [];
	$scope.switche;
	
	
	// fonction qui affiche la recherche avancée
    $scope.showAdvancedResearch = function() {
        $scope.advancedResearch = !$scope.advancedResearch;
    }
    
    //récupère l'ensemble des produits via la bdd
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
    
    //gère l'affichage des deux boutons suppresion et activation.désativation
    $scope.switche = function(id){
    	$scope.check[id] = !$scope.check[id];
    	}
    
    $scope.show = function(){
    	return $scope.check.includes(true);
    }
    

    //gestion de la modification
    
    
    
    //
});