angular.module('app').controller('ConnectionRegistrationCtrl', function($scope, UserService) {

	$scope.authenticationFailed = function() {
		return UserService.isAuthenticationFailed();
	};
	
	$scope.creationFailed = function(type) {
		return UserService.isCreationFailed(type);
	};
	
	$scope.error = function(type) {
		return UserService.getError(type);
	};
		
	/*Récupère les données du formulaire d'inscription 
	 *Pour créer le nouveau utilisateur*/
	$scope.create = function(user) {
		UserService.createUser(user);
	};

	$scope.login = function(email, password) {
		//console.log('login', email, password );
		UserService.login(email, password);
	};
	
});