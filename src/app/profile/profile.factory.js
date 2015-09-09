(function() {
	'use strict';

	angular
		.module('Maidzo')
		.factory('Profile', Profile);

	function Profile($http, config) {
		return {
			getProfile: function() {
				return $http.get(config.apiUrl + 'shop/profile')
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
			updateProfile: function(profileData) {
				return $http.put(config.apiUrl + 'shop/profile', profileData);
			}
		};
	}
})();
