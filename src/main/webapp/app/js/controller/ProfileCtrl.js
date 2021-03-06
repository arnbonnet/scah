/**
 * Controller de la vue du profile utilisateur 
 */
angular.module('app').controller('ProfileCtrl', function($scope, UserService) {
	UserService.getSession().then(function(){
		UserService.checkConnection(['user'], '/connection');
		
		$scope.modify = false;
		$scope.toggleModify = function() {
			$scope.modify = !$scope.modify;
		};
		
		$scope.user = UserService.getUser();
		$scope.editProfile = function(user) {
			UserService.editUser(user);
			$scope.toggleModify();
		}
	});
});