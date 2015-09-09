(function() {
	'use strict';

	angular
		.module('Maidzo')
		.factory('Account', Account);

	function Account ($http, config) {
		return {
			getAccount: function() {
				return $http.get(config.apiUrl + 'me')
					.then(function(response) {
						if (typeof(response.data) === 'object') {
							return response.data;
						} else {
							return $q.reject(response.data);
						}
					}, function(response) {
						return $q.reject(response.data);
					});
			},
			updateAccount: function(accountData) {
				return $http.put(config.apiUrl + 'me', accountData);
			}
		};
	}
})();
