(function () {
  'use strict';

  angular
    .module('movieApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$interval','tmdbApi'];

  function HomeController($scope,$interval,tmdbApi) {
    var vm = this;
    var results = [];
    var idx = 0;
    var findMovie = function(id){
      tmdbApi.find(id).then(
        function(data){
          $scope.result = data;
        }
      )
    };

    // PopularMovies.get()
    //   .then(function(data){
      var data = [1726,68721,10138];
        results = data;
        findMovie(results[0]);

        $interval(function(){
          ++idx;
          findMovie(results[idx % results.length]);
        },5000)
      // });


    activate();

    ////////////////

    function activate() {}
  }
})();
