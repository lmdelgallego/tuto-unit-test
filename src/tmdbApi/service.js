(function () {
  'use strict';

  angular
    .module('tmdb', [])
    .factory('tmdbApi', tmdbApi);

  tmdbApi.$inject = ['$http', '$q'];

  function tmdbApi($http, $q) {
    var baseUrl = 'https://api.themoviedb.org/3/';
    var apiKey = '?api_key=0da341242b02005fb8d566dc4f7d2428&';

    var service = {
      search: search,
      find: find
    };

    return service;

    ////////////////
    function search(query) {
      var def = $q.defer();
      $http({
          method: 'GET',
          url: baseUrl + 'search/' + apiKey + 'query=' + encodeURIComponent(query)
        })
        .then(function (data) {
          def.resolve(data);
        }, function (error) {
          def.reject(error);
        });

      return def.promise;
    }

    function find(id) {

      var def = $q.defer();
      $http({
          method: 'GET',
          url: baseUrl + 'movie/' + id + '/' + apiKey
        })
        .then(function (data) {
          def.resolve(data.data);
        }, function (error) {
          def.reject(error);
        });

      return def.promise;

    }
  }
})();