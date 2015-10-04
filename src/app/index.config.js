(function() {
  'use strict';

  angular
    .module('Maidzo')
    .config(config);

  /** @ngInject */
  function config($locationProvider, $authProvider, RestangularProvider, localStorageServiceProvider, cfpLoadingBarProvider, toastr) {
    // Enable html5mode
    $locationProvider.html5Mode(true);

    // API base url
    $authProvider.baseUrl = 'http://api.maidzo.dev:8000/';
    $authProvider.tokenPrefix = 'maidzo';

    // Local storage prefix
    localStorageServiceProvider.setPrefix('maidzo');

    // RestAngular API base url
    RestangularProvider.setBaseUrl('http://api.maidzo.dev:8000/');

    // Because all of our API response grouped in a 'data' object, so we will need to extract it out
    RestangularProvider.addResponseInterceptor(function(data, operation) {
      var extractedData;

      if (operation === 'getList') {
        extractedData = data.data;
      } else {
        extractedData = data.data;
      }

      return extractedData;
    });

    // Configuration for angular loading bar
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.spinnerTemplate = '<div class="loader-logo"></div><div class="loader"></div>';

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
