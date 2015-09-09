(function () {
	'use strict';

	angular
		.module('Maidzo')
		.controller('CartController', CartController);

	function CartController (ngCart, $scope) {
		$scope.ngCart = ngCart;
	}
})();
