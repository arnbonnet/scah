/**
 * Controller de la vue recherche produit de l'admin, avec affichage de tous les prpduits sous la forme de tableaux
 */

app.controller('ArrayProductsAdminController', function($scope){
	$scope.advancedResearch = false;
	$scope.activate = false;
	
	
    $scope.showAdvancedResearch = function() {
        $scope.advancedResearch = !$scope.advancedResearch;
    }

});