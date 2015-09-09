(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('ProductDetailController', ProductDetailController);

	function ProductDetailController ($scope, productData, $filter, $http, config, ngCart) {
		// Fill the product information
		$scope.product = productData.data.data;

		// disable/enable the add to cart button
		$scope.isAvailable = true;

		// Init option selection
		$scope.selected = {};

		// Define the customer's selected options
		var selectedOptions = {};

		// Build the option list
		$scope.buildOption = function (position) {

			var option = 'option' + position;

			var value = $scope.selected[position];

			selectedOptions[option] = value;

			return variantFilter(selectedOptions);
		};

		// Filter out product's variation
		function variantFilter (selectedOptions) {
			// Define the list of product's variations
			var variants = productData.data.data.variants.data;

			variants = $filter('filter')(variants, selectedOptions, true);

			if (variants.length === 1) {
				// Activate the add to cart button
				$scope.isAvailable = true;
				// Change the default price to variantion price
				$scope.product.price = variants[0].price;
			} else if (variants.length === 0) {
				// No variant available, disable the add to cart button
				$scope.isAvailable = false;
				// temporary log
				console.log('no variant available');
			}

			return variants;
		}

		$scope.addToCart = function () {
			var selectedVariant = variantFilter(selectedOptions);

			ngCart.addItem(
				selectedVariant[0].id,
				$scope.product.name,
				selectedVariant[0].price,
				$scope.product.shipping,
				$scope.quantity,
				{
					product_id: $scope.product.id,
					options: selectedOptions,
					currency: $scope.product.currency
				}
			);
		};
	}
})();
