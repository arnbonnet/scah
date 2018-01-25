angular.module('app').controller('HeaderCtrl', function($scope, UserService, ProductService) {
	
	$scope.search = function(title) {
		ProductService.setSearch(title);
	}
	
	$scope.role = function(){
		return UserService.getRole();
	};

	$scope.logout = function() {
		UserService.logout();
	};
});