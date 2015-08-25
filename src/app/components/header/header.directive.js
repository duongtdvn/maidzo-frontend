(function() {
	'use strict';

	angular
		.module('Maidzo')
		.directive('header', header);

	function header() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/header/header.html'
		};

		return directive;
	}
})();
