(function() {
  'use strict';

  angular
    .module('Maidzo')
    .run(runBlock)
    .run(getConfig);

  /** @ngInject */
  function runBlock($rootScope, $state, $auth) {

    $rootScope.$on('$stateChangeStart', function(event, toState) {

      if (toState.data.authenticate && !$auth.isAuthenticated()) {
        $state.go('auth.login');
        event.preventDefault();
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {

      if (angular.isDefined(toState.data.pageTitle)) {
        $rootScope.pageTitle = toState.data.pageTitle + ' - Maidzo';
      }
    });
  }

  function getConfig($http, config, companyInfo) {
    $http.get(config.apiUrl + 'config')
      .then(function (response) {
        companyInfo(response);
      });
  }
})();
