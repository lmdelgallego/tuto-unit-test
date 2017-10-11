(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope','tmdbApi','$location'];
  function ResultsController($scope,tmdbApi,$location) {
    var vm = this;
    var query = $location.search().q;

    tmdbApi.search(query)
    .then(function (resolve) {
      console.log(resolve);
      $scope.results = resolve.results;
    })
    .catch(function(){
      $scope.errorMessage = "Something went wrong!";
    });

    activate();

    ////////////////

    function activate() { 

    }
  }
})();