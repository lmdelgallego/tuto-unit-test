describe('Home Controller', function () {

  var results = [{
      "Title": "Star Wars: Episode IV - A New Hope",
      "imdbID": "tt0076759"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "imdbID": "tt0080684"
    },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "imdbID": "tt0086190"
    }
  ];
  var $scope;
  var $interval;

  beforeEach(module('movieApp'));

  // beforeEach(inject(function(_q_,_PopularMovies_){
  //   spyOn(_PopularMovies_,'get').and.callFake(function(){
  //     var def = _$q_.defer();
  //     def.resolve([1726,68721,10138]);
  //     return def.promise;
  //   })
  // }));

  beforeEach(inject(function(_$q_, _tmdbApi_){
    spyOn(_tmdbApi_,'find').and.callFake(function(){
      var def = _$q_.defer();
      var args = _tmdbApi_.find.calls.mostRecent().args[0];
      if(args === 1726){
        def.resolve(results[0]);
      }else if (args === 68721){
        def.resolve(results[1]);
      }else if (args === 10138){
        def.resolve(results[2]);
      }else {
        def.reject();
      }

      return def.promise;
    });
  }));

  beforeEach(inject(function(_$controller_,_$interval_,_$rootScope_,_tmdbApi_) {
    $scope = {};
    $interval = _$interval_
    _$controller_('HomeController',{
      $scope: $scope,
      $interval: _$interval_,
      $tmdbApi: _tmdbApi_,
    });
    _$rootScope_.$apply();
  })); 
  
  it('should rotate movies every 5 seconds', function(){
    expect($scope.result.Title).toBe(results[0].Title);
    $interval.flush(5000);
    expect($scope.result.Title).toBe(results[1].Title);
    $interval.flush(5000);
    expect($scope.result.Title).toBe(results[2].Title);
    $interval.flush(5000);
    expect($scope.result.Title).toBe(results[0].Title);
  })
});