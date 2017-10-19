(function() {
  'use strict';

  angular
    .module('movieApp')
    .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope','tmdbApi','$location'];
  function ResultsController($scope,tmdbApi,$location) {
    var vm = this;
    var query = $location.search().q;

    $scope.expand = expand;

    tmdbApi.search(query)
    .then(function (results) {
      $scope.results = results.results;
    })
    .catch(function(){
      $scope.errorMessage = "Something went wrong!";
    });



    activate();

    ////////////////

    function activate() { 

    }

    function expand(index, id){
      tmdbApi.find(id)
      .then(function(data){
        console.log(data);
        $scope.results[index].data = data;
        $scope.results[index].open = true;
      })
    }

  }
})();