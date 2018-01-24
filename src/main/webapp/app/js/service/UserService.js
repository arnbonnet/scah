angular.module('app').factory('UserService', ['$http', '$location',function($http, $location) {
	
	var role = '';
	function calculateRole(){ 
		return $http.get('/scah/api/users/connectedUser').then(function(response) {
			console.log(response.data);
			if(response.data.admin) {
				role = 'admin';
			} else if(response.data.admin === false) {
				role = 'user';
			} else {
				role = '';
			}
		});
	}

	var getRoleBody = function() {
		return role;
	};

	var createUserBody = function(user) {
		var promiseCreateUser = $http.post('/scah/api/users/', user);	
		promiseCreateUser.then(function(response) {
			console.log(response);
			$location.path('/scah');
		});
		
		return promiseCreateUser;
	}
	
	var loginBody = function(email, password) {
		var loginPromise = $http.post('/scah/authenticate', undefined, {params:{username:email, password:password}});
		loginPromise.then(
				function() {
					return calculateRole().then(function(){
						$location.path('/scah');
					}); // Le loggage est effectif lorsque l'on a également rechargé le role
				},
				function() {
					console.log('error UserService - login');
					role = '';
				}
		);
	};
	
	var logoutBody = function() {
		var logoutPromise = $http.post('/scah/logout');
		logoutPromise.then(
				function() {
					$location.path('/scah#!logout');
					return calculateRole(); // Le déloggage est effectif lorsque l'on a également rechargé le role
				},
				function() {
					console.log('error UserService - logout');
					return calculateRole(); // Le déloggage est effectif lorsque l'on a également rechargé le role
				}
		);
	}
	
	return {
		getRole : getRoleBody,
		login : loginBody,
		logout : logoutBody,
		createUser : createUserBody,
	}
}]);

