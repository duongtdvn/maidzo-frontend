// (function() {
// 	'use strict';

// 	angular
// 		.module('Maidzo')
// 		.factory('Cart', Cart);

// 	function Cart (config, $http, $q) {
// 		return {
// 			getCart: function() {
// 				return $http.get(config.apiUrl + 'shop/carts')
// 					.then(function(response) {
// 						if (typeof(response.data === 'object')) {
// 							return response.data;
// 						} else {
// 							return $q.reject(response.data);
// 						}
// 					}, function(response) {
// 						return $q.reject(response.data);
// 					});
// 			}
// 		};
// 	}
// })();
