angular.module('app').controller('ConnectionRegistrationCtrl', function($scope, UserService) {

	$scope.authenticationFailed = function() {
		return UserService.isAuthenticationFailed();
	}
		
	/*Récupère les données du formulaire d'inscription 
	 *Pour créer le nouveau utilisateur*/
	$scope.create = function(user) {
		UserService.createUser(user);
	}

	$scope.login = function(email, password) {
		console.log('login', email, password );
		UserService.login(email, password);
	};

});