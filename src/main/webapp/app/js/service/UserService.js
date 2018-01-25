angular.module('app').factory('UserService', ['$http', '$location',function($http, $location) {
	
	var role = '';
	var authenticationFailed = false;
	function calculateRole(){ 
		return $http.get('/api/users/connectedUser').then(function(response) {
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
		var promiseCreateUser = $http.post('/api/users/', user);	
		promiseCreateUser.then(function(response) {
		
			$location.path('/');
			loginBody(user.email,user.password);
		});
		
		return promiseCreateUser;
	}
	
	var loginBody = function(email, password) {
		var loginPromise = $http.post('/authenticate', undefined, {params:{username:email, password:password}});
		loginPromise.then(
				function() {
					return calculateRole().then(function(){
						$location.path('/');
						authenticationFailed = false;
					}); // Le loggage est effectif lorsque l'on a également rechargé le role
				},
				function() {
					console.log('error UserService - login');
					role = '';
					authenticationFailed = true;
				}
		);
	};
	
	var logoutBody = function() {
		var logoutPromise = $http.post('/logout');
		logoutPromise.then(
				function() {
					$location.path('/#!logout');
					return calculateRole(); // Le déloggage est effectif lorsque l'on a également rechargé le role
				},
				function() {
					console.log('error UserService - logout');
					return calculateRole(); // Le déloggage est effectif lorsque l'on a également rechargé le role
				}
		);
	}
	
	var isAuthenticationFailedBody = function() {
		return authenticationFailed;
	}
	
	return {
		getRole : getRoleBody,
		login : loginBody,
		logout : logoutBody,
		createUser : createUserBody,
		isAuthenticationFailed : isAuthenticationFailedBody,
	}
}]);
