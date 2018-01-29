angular.module('app').factory('UserService', ['$http', '$location', '$injector', function($http, $location, $injector) {
	
	var role = '';
	var authenticationFailed = false;
	var creationFailedEmail = false;
	var creationFailedPhone = false;
	var emailError = '';
	
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
			loginBody(user.email, user.password);
			creationFailedEmail = false;
			creationFailedPhone = false;
		},
		function(response) {
			console.log(response);
			if("Unique" === response.data[0].code) {
				emailError = response.data[0].defaultMessage;
				creationFailedEmail = true;
			} else if("Size" === response.data[0].code){
				phoneError = response.data[0].defaultMessage;
				creationFailedPhone = true;
			}

		});
		
		return promiseCreateUser;
	};
	
	var loginBody = function(email, password) {
		var loginPromise = $http.post('/authenticate', undefined, {params:{username:email, password:password}});
		loginPromise.then(
				function() {
					return calculateRole().then(function(){
						$location.path('/');
						authenticationFailed = false;
						var productService = $injector.get('ProductService');
						productService.reload();
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
					return calculateRole().then(function() {
						var productService = $injector.get('ProductService');
						productService.reload();
					}); // Le déloggage est effectif lorsque l'on a également rechargé le role
				},
				function() {
					console.log('error UserService - logout');
					return calculateRole(); // Le déloggage est effectif lorsque l'on a également rechargé le role
				}
		);
	};
	
	var isAuthenticationFailedBody = function() {
		return authenticationFailed;
	};
	
	var isCreationFailedBody = function(type) {
		if(type === 'email') {
			return creationFailedEmail;
		} else if (type === 'phone') {
			return creationFailedPhone;
		}
	};
	
	var getErrorBody = function(type) {
		if(type === 'email') {
			return emailError;
		} else if (type === 'phone') {
			return phoneError;
		}
	};
	
	return {
		getRole : getRoleBody,
		login : loginBody,
		logout : logoutBody,
		createUser : createUserBody,
		isAuthenticationFailed : isAuthenticationFailedBody,
		isCreationFailed : isCreationFailedBody,
		getError : getErrorBody,
	}
}]);

