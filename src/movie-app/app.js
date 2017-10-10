angular.module('movieApp', ['tmdb', 'ui.bootstrap', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: 'movie-app/results.html',
        controller: 'ResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });