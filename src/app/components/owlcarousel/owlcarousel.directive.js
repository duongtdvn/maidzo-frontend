(function() {
	'use strict';

	angular
		.module('Maidzo')
		.directive('owlCarousel', owlCarousel)
		.directive('owlCarouselItem', owlCarouselItem);

	function owlCarousel() {
		var directive = {
			restrict: 'AE',
			transclude: false,
			link: function(scope) {

				scope.initCarousel = function(element) {

					var defaultOptions = {};
					var customOptions = scope.$eval($(element).attr('owl-options'));

					// combine the two options objects
					for (var key in customOptions) {
						defaultOptions[key] = customOptions[key];
					}

					$(element).owlCarousel(defaultOptions);
				};
			}
		};

		return directive;
	}

	function owlCarouselItem() {
		var directive = {
			restrict: 'AE',
			transclude: false,
			link: function(scope, element) {

				if (scope.$last) {

					scope.initCarousel(element.parent());
				}
			}
		};

		return directive;
	}
})();
