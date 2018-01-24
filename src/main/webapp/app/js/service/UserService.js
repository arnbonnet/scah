angular.module('app').factory('UserService', ['$http', '$location',function($http, $location) {
	
	var getRoleBody = function() {
		var promiseUser = $http.get('/scah/api/users/connectedUser');
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
	
	var loginBody = function(email, password) {
		var loginPromise = $http.post('/scah/authenticate', undefined, {params:{username:email, password:password}});
		loginPromise.then(
				function() {
					$location.path('/scah');					
				},
				function() {
					console.log('error UserService - login');
				}
		);
	};
	
	return {
		//getRole : getRoleBody,
		login : loginBody
	}
}]);

