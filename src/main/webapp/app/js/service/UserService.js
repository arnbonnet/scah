angular.module('app').factory('UserService', ['$http', '$location', function($http, $location) {
	
	var promiseUser = $http.get('/scah/api/users/connectedUser');
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
	
	var createUserBody = function(user) {
		var promiseCreateUser = $http.post('/scah/api/users/', user);	
		promiseCreateUser.then(function(response) {
			console.log(response);
			$location.path('/scah');
		});
		
		return promiseCreateUser;
	}
	
	
	return {
		getRole : getRoleBody,
		createUser : createUserBody,
	}
}]);

