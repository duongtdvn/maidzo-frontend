(function() {
	'use strict';

	angular
		.module('Maidzo')
		.factory('Product', Product);

	function Product ($http, config) {
		return {
			getDetail: function(slug, params) {
				if (params) {
					return $http.get(config.apiUrl + 'shop/products/' + slug + '?include=' + params);
				} else {
					return $http.get(config.apiUrl + 'shop/products/' + slug);
				}
			}
		};
	}
})();
