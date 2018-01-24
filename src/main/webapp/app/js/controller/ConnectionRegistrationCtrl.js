angular.module('app').controller('ConnectionRegistrationCtrl', function($scope, UserService) {
	
	/*Récupère les données du formulaire d'inscription 
	 *Pour créer le nouveau utilisateur*/
	$scope.create = function(user) {
		UserService.createUser(user);
	}
	
});