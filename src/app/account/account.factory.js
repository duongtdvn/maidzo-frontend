(function() {
	'use strict';

	angular
		.module('Maidzo')
		.factory('Account', Account);

	function Account ($http, config) {
		return {
			getAccount: function() {
				return $http.get(config.apiUrl + 'me');
			},
			updateAccount: function(accountData) {
				return $http.put(config.apiUrl + 'me', accountData);
			}
		};
	}
})();
