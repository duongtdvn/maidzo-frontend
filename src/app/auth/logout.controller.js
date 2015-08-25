(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('LogoutController', LogoutController);

	function LogoutController($auth, localStorageService, toastr) {

		// the user is not logged in, so why do they here? GTFO
		if (! $auth.isAuthenticated()) {
			return;
		}

		// log the user out
		$auth.logout('home')
			.then(function() {
				// remove the user's data in local storage
				localStorageService.remove('currentUser');
				// notify them
				toastr.info('Đã thoát khỏi hệ thống!');
			});
	}
})();