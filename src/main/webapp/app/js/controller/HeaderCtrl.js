angular.module('app').controller('HeaderCtrl', function($scope, UserService) {
	
	$scope.role = function(){
		return UserService.getRole();
	};

/*
	if(UserService.isAuthenticated()) {
		UserService.getRole().then(function(data) {
			$scope.role = data;
		},
		function() {
			console.log("Error HeaderCtrl - getRole");
		});
	}
*/
	$scope.logout = function() {
		UserService.logout();
	};
});