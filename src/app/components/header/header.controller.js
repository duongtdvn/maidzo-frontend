(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('OfferCtrl', OfferCtrl)
		.controller('NavController', NavController);

	function OfferCtrl($scope) {
			$scope.offers = [
				{
					title: 'Phục vụ nhu cầu tiêu dùng và kinh doanh của quý Khách hàng ngu ngốc, khốn nạn, mất dạy',
					url: 'url_1'
				},
				{
					title: 'Dịch vụ chuyển tiền sang Trung Quốc',
					url: 'url_2'
				}
			];
		}

	function NavController($scope, $auth) {
		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};
	}
})();
