(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('LoginController', LoginController);

	function LoginController($scope, $auth, $state, Restangular, localStorageService, toastr) {

		var vm = this;

		// define login function
		vm.submit = login;

		// already login? so get the fuck out of here then!
		if ($auth.isAuthenticated()) {
			$state.go('home');
		}

		// the user is submitting the login form
		function login() {
			// prepair login credentials
			var credentials = {
				email: vm.email,
				password: vm.password
			};

			$auth.login(credentials)
				.then(function () {
					// get the user data and save to local storage for feature use
					Restangular.one('me').get().then(function (response) {
						localStorageService.set('currentUser', {'first_name': response.first_name, 'last_name': response.last_name});
					});
					// notify to use that they are login success
					toastr.info('Đăng nhập thành công!');
				})
				.catch(function (response) {
					// catch and notify errors
					toastr.error(response.data.message);
				});
		}
	}
})();