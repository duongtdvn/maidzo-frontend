(function() {
	'use strict';

	angular
		.module('Maidzo')
		.directive('sidebar', sidebar);

	function sidebar(localStorageService) {
		var direcitve = {
			restrict: 'AE',
			templateUrl: 'app/components/sidebar/sidebar.html',
			link: function ($scope) {
				$scope.first_name = localStorageService.get('currentUser').first_name;
				$scope.last_name = localStorageService.get('currentUser').last_name;
			}
		};

		return direcitve;
	}
})();