(function () {
	'use strict';

	angular
		.module('Maidzo')
		.controller('CartController', CartController);

	function CartController (cartData, Cart, CartItem, $scope) {
		$scope.cart = cartData.cart;

		$scope.CartInstance = Cart;
		$scope.ItemInstance = CartItem;

		$scope.updateItem = function (variant_id) {
			CartItem.updateItem({
				variant_id: variant_id,
				quantity: 10
			})
		}
	}
})();
