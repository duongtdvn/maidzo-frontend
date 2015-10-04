/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('Maidzo')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('config', {
			appName: 'Maidzo',
			apiUrl: 'http://api.maidzo.dev:8000/',
			exchangeRate: {
				USD: {
					amount: 21800,
					htmlCode: '&#8363;',
					isoCode: 'vnd'
	    	}
	    }
		});
})();
