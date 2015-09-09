(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('CheckoutController', CheckoutController);

	function CheckoutController (ngCart, profileData, config, $scope, $http, toastr, $state) {
		$scope.profile = profileData.data.data;

		// build map selection
		$http.get(config.apiUrl + 'map/provinces')
			.success(function(response) {
				$scope.provinces = response.data;
			});

		$scope.provinceConfig = {
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			sortField: 'name',
			placeholder: 'Pick something',
			maxItems: 1,
			highlight: true,
			onItemAdd: function(value) {
				$http.get(config.apiUrl + 'map/provinces/' + value + '?include=districts')
					.success(function(response) {
						$scope.districts = response.data.districts.data;
					});
			}
		};
		$scope.districtConfig = {
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			sortField: 'name',
			placeholder: 'Pick something',
			maxItems: 1,
			onItemAdd: function(value) {
				$http.get(config.apiUrl + 'map/districts/' + value + '?include=wards')
					.success(function(response) {
						$scope.wards = response.data.wards.data;
					});
			}
		};
		$scope.wardConfig = {
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			sortField: 'name',
			placeholder: 'Pick something',
			maxItems: 1
		};

		// Redirect to homepage if cart is empty
		if (ngCart.getTotalItems() === 0) {
			$state.go('home')
		};

		// Define the items
		var items = ngCart.getCart().items;

		$scope.checkoutSuccess = false;

		// Let's place order
		$scope.checkout = function() {
			$http.post(config.apiUrl + 'shop/orders', {
				items: items,
				customer: $scope.profile,
				payment: $scope.paymentType
			})
			.then(function(response) {
				// ngCart.empty();
				$scope.checkoutSuccess = true;
				$scope.order = response.data.order;
			}, function() {
				toastr.error('Có lỗi xảy, ra vui lòng kiểm tra lại!')
			})
		}
	}
})();
