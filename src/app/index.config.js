(function() {
  'use strict';

  angular
    .module('Maidzo')
    .config(config);

  /** @ngInject */
  function config($locationProvider, $authProvider, RestangularProvider, toastr) {
    // Enable html5mode
    $locationProvider.html5Mode(true);

    // API base url
    $authProvider.baseUrl = 'http://maidzo.dev:8000/api/';

    // RestAngular API base url
    RestangularProvider.setBaseUrl('http://maidzo.dev:8000/api/');

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

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
