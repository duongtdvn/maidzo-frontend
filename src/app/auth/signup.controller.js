(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('SignupController', SignupController);

	function SignupController($scope, $auth, $state, Restangular, localStorageService, toastr) {
		$scope.submit = signup;

		// User is logged in, they must log out before register another account
		if ($auth.isAuthenticated()) {
			$state.go('home');
		}

		// Do signup
		function signup() {
			$auth.signup($scope.signup)
				.then(function () {
					// get the user data and save to local storage for feature use
					Restangular.one('me').get().then(function (response) {
						localStorageService.set('currentUser', {'first_name': response.first_name, 'last_name': response.last_name});
					});
					// notify to use that they are login success
					toastr.info('Đăng ký thành công!');
				})
				.catch(function(response) {
					toastr.warning(response.data.message);
				});
		}
	}
})();