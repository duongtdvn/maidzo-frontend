(function() {
	'use strict';

	angular
		.module('Maidzo')
		.controller('ProfileController', ProfileController);

	function ProfileController($scope, config, $http, Profile, profileData, toastr) {

		// Pre-fill the profile form
		$scope.profile = profileData.data.data;

		// Update profile with data
		$scope.updateProfile = function() {
			Profile
				.updateProfile($scope.profile)
				.then(function() {
					toastr.success('Thay đổi thông tin thành công!');
				})
				.catch(function() {
					toastr.error('Có lỗi xảy, ra vui lòng kiểm tra lại!');
				});
		};

		// build map selection
		$http.get(config.apiUrl + 'map/provinces')
			.success(function(response) {
				$scope.provinces = response.data;
			});

		$scope.provinceConfig = {
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			sortField: 'name',
			placeholder: 'Pick something',
			maxItems: 1,
			highlight: true,
			onItemAdd: function(value) {
				$http.get(config.apiUrl + 'map/provinces/' + value + '?include=districts')
					.success(function(response) {
						$scope.districts = response.data.districts.data;
					});
			}
		};
		$scope.districtConfig = {
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			sortField: 'name',
			placeholder: 'Pick something',
			maxItems: 1,
			onItemAdd: function(value) {
				$http.get(config.apiUrl + 'map/districts/' + value + '?include=wards')
					.success(function(response) {
						$scope.wards = response.data.wards.data;
					});
			}
		};
		$scope.wardConfig = {
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			sortField: 'name',
			placeholder: 'Pick something',
			maxItems: 1
		};
	}
})();
