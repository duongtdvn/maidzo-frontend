// (function() {
// 	'use strict';

// 	angular
// 		.module('Maidzo')
// 		.directive('cart', cart);

// 	function cart(Cart) {
// 		var directive = {
// 			restrict: 'AE',
// 			templateUrl: 'app/components/cart/cart.html',
// 			link: function ($scope) {
// 				Cart.getCart().then(function(response) {
// 					// Define the cart data
// 					var cart = response.cart;

// 					$scope.cart = cart;
// 					// Count the total length of items in the cart
// 					$scope.total_items = cart.line_items.length;
// 					// Count the total items price
// 					$scope.total_price = function() {
// 						// Set the total price to zero before calculating
// 						var total = 0;
// 						// Loop through each items and plus it's price
// 						for (var i = 0; i < cart.line_items.length; i++) {
// 							var item = cart.line_items[i];
// 							total += item.price;
// 						}
// 						// Return the calculated price
// 						return total;
// 					};
// 				});
// 			}
// 		};

// 		return directive;
// 	}
// })();
