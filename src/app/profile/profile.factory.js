(function() {
	'use strict';

	angular
		.module('Maidzo')
		.factory('Profile', Profile);

	function Profile($http, config) {
		return {
			getProfile: function() {
				return $http.get(config.apiUrl + 'shop/profile');
			},
			updateProfile: function(profileData) {
				return $http.put(config.apiUrl + 'shop/profile', profileData);
			}
		};
	}
})();
