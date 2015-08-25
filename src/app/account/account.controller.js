(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('AccountController', AccountController);

	function AccountController($scope, config, Account, accountData, toastr) {

		$scope.account = accountData.data.data;

		$scope.updateAccount = function() {
			Account
				.updateAccount($scope.account)
				.then(function() {
					toastr.success('Thay đổi thông tin thành công!');
				})
				.catch(function() {
					toastr.error('Có lỗi xảy, ra vui lòng kiểm tra lại!');
				});
		};
	}
})();
