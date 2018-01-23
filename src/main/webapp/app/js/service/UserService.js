angular.module('app').factory('UserService', ['$http', function($http) {
	
	var host = 'http://localhost';
	var port = '8080';
	
	var promiseUser = $http.get(host + ':' + port + '/scah/api/users/connectedUser');
	var getRoleBody = function() {
		var promiseRole = promiseUser.then(function(response) {
			console.log(response.data);
			if(response.data.admin) {
				return 'admin';
			} else if(response.data.admin === false) {
				return 'user';
			} else {
				return '';
			}
		});
		return promiseRole;
	};
	
	return {
		getRole : getRoleBody
	}
}]);

