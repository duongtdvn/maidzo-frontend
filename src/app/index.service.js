(function() {
	'use strict';

	angular
		.module('Maidzo')
		.service('companyInfo', companyInfo);

		function companyInfo (localStorageService) {
			return function (data) {
				return localStorageService.set('currency', data.data.currency);
			};
		}
})();
