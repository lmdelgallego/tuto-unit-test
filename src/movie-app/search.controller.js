angular
  .module('movieApp')
  .controller('SearchController', SearchController);

SearchController.$inject = ['$location', '$timeout'];

function SearchController($location, $timeout) {
  var vm = this;
  var timeout;
  vm.keyup = function (){
    timeout = $timeout(vm.search,1000)
  }
  vm.keydown = function(){
    $timeout.cancel(timeout);
  }
  vm.search = function () {
    $timeout.cancel(timeout);
    if (vm.query) {
      $location.path('/results').search('q', vm.query);
    }
  }

}