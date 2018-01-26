/**
 * Controller de la vue recherche produit de l'admin, avec affichage de tous les prpduits sous la forme de tableaux
 */

app.controller('ArrayProductsAdminController', function($scope, ProductService, UserService, $uibModal){
	
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
			initData(data);
		},
		function() {
			console.log("Error ListProductCtrl - getAllProduct");
		}
	);
    
    //gère l'affichage des deux boutons suppresion et activation.désativation
    function initData(data){
		$scope.ListProduct = data;
		for(var key in $scope.ListProduct){
			$scope.check[key]=false;
		}
	}
    
    $scope.switche = function(id){
    	$scope.check[id] = !$scope.check[id];
    	}
    
    $scope.show = function(){
    	return $scope.check.includes(true);
    }
    
    //suppression des produits
    function remove(id){
    	ProductService.removeProduct(id)
		.then(function(response){
			console.log('remove success');
			ProductService.reload().then(function(data) {
    			initData(data);
			});
			return response;
		}, function(response){
			console.log('remove error');
		});
    }
	
    // Call modal for product deletion confirmation
    $scope.callConfirmDelete = function(item){
    	var modalInstance = $uibModal.open({
    	      templateUrl: 'app/template/modal-confirm-delete.html',
    	      controller : 'ModalConfirmDeleteController',
    	      size: 'md',
    	      resolve : {
    	    	  item : item
    	      }
   	    });
    	
    	//Handle modal response if confirme or cancel
    	modalInstance.result.then(function () {
    		remove(item.id);
    	}, function () {
//    		 console.log('NOK');
    	}); 	
    }
    
    $scope.removeProduct = function(id){
    	console.log(id);
    	remove(id);
    }
    
    // change product status if admin click on button activer/désactiver
    $scope.productStatus = function(product){
    	product.activated = !product.activated;
		return ProductService.editProduct(product).then(function(response){
			console.log('product status change success');
			return response.data;
		}, function(response){
			console.log("error status change product" + response.data)
		});
    }
});