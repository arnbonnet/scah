angular.module('app').controller('ConnectionRegistrationCtrl', function($scope, UserService) {
	
	$scope.login = function(email, password) {
		console.log('login', email, password );
		UserService.login(email, password);
	};
	
});