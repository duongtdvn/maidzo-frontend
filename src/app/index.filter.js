(function() {
	'use strict';

	angular
		.module('Maidzo')
		.filter('currency', currency)
		.filter('exchange', exchange)
		.filter('getMap', getMap);

		function currency () {
			return function (input, currency) {
				if (isNaN(input)) {
					return input;
				} else if (currency === 'usd') {
					return accounting.formatMoney(input, {symbol: '$', format: '%s %v'}, 2);
				} else if (currency === 'cny') {
					return accounting.formatMoney(input, {symbol: '¥', format: '%s %v'}, 2);
				}
			};
		}

		function exchange (localStorageService) {
			return function (input, currency) {
				var company_currency = localStorageService.get('currency');
				var rate = company_currency.vnd.rate;

				if (isNaN(input)) {
					return input;
				} else if (currency === 'usd') {
					return accounting.formatMoney(input * rate.usd, {symbol: '₫', format: '%v %s'}, 0);
				} else if (currency === 'cny') {
					return accounting.formatMoney(input * rate.cny, {symbol: '₫', format: '%v %s'}, 0);
				} else {
					return accounting.formatMoney(input, {symbol: '₫', format: '%v %s'}, 0);
				}
			};
		}

		function getMap ($http, Restangular) {
			return function (input, mapType) {
				if (isNaN(input)) {
					return input;
				} else if (mapType === 'province') {
					Restangular.one('map/provinces', input).get().then(function (province) {
						return province.name;
					});
				} else if (mapType === 'district') {
					Restangular.one('map/districts', input).get().then(function (district) {
						return district.name;
					});
				} else if (mapType === 'ward') {
					Restangular.one('map/wards', input).get().then(function (ward) {
						return ward.name;
					});
				} else {
					return input;
				}
			};
		}
})();
