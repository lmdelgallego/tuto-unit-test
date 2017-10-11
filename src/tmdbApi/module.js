(function() {
  'use strict';

  angular.module('tmdb', [
    'restangular'
  ])
  .config(config);

  function config(RestangularProvider) {  
    RestangularProvider.setBaseUrl('https://api.themoviedb.org/3/');
  }

})();