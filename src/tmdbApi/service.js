(function () {
  'use strict';

  angular
    .module('tmdb')
    .factory('tmdbApi', tmdbApi);

  tmdbApi.$inject = ['$http', '$q', 'Restangular'];

  function tmdbApi($http, $q, Restangular) {
    var baseUrl = 'http://api.themoviedb.org/3/';
    var apiKey = '?api_key=386d9bc2541c487c3ef4666ee5449ab2&';

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
          url: baseUrl + 'search/movie' + apiKey + 'query=' + encodeURIComponent(query)
        })
        .then(function (data) {
          def.resolve(data.data);
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