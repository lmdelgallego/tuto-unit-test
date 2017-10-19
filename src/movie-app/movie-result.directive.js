(function() {
  'use strict';

  angular
    .module('movieApp')
    .directive('movieResult', movieResult);

  // movieResult.$inject = [];
  function movieResult() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
        // bindToController: true,
        // controller: ControllerController,
        // controllerAs: 'vm',
        // link: link,
        restrict: 'E',
        remplace: true,
        scope: {
          result: '=result'
        },
        template: [
          '<div class="row">',
            '<div class="col-sm-4">',
              '<img ng-src="https://image.tmdb.org/t/p/w500/{{result.poster_path}}" alt="{{result.title}}" width="220">',
            '</div>',
            '<div class="col-sm-8">',
                '<h3>{{result.title}}</h3>',
                '<p>{{result.overview}}</p>',
                '<p><strong>Released:</strong> {{result.release_date}}</p>',
                '<p><strong>Genre:</strong> {{result.genres[0].name}}</p>',
            '</div>',
          '</div>'
        ].join('')
    };
    return directive;
    
    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function ControllerController () {
    
  }
})();