describe('Results Controller', function () {
  var results = {
    "Search": [{
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie"
      },
      {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie"
      },
      {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie"
      }
    ]
  };

  var $controller;
  var $location;
  var $q;
  var $rootScope;
  var $scope;
  var tmdbApi;


  beforeEach(module('tmdb'));
  beforeEach(module('movieApp'));

  beforeEach(inject(function (_$controller_, _$location_, _$q_, _$rootScope_, _tmdbApi_) {
    $controller = _$controller_;
    $location = _$location_;
    $scope = {};
    $q = _$q_;
    $rootScope = _$rootScope_;
    tmdbApi = _tmdbApi_;
  }));

  it('should load search results', function () {
    spyOn(tmdbApi, 'search').and.callFake(function () {
      var def = $q.defer();
      def.resolve(results);
      return def.promise;
    });
    $location.search('q', 'Star Wars');
    $controller('ResultsController', {
      $scope: $scope
    });
    $rootScope.$apply();
    expect($scope.results[0].Title).toBe(results.Search[0].Title);
    expect($scope.results[1].Title).toBe(results.Search[1].Title);
    expect($scope.results[2].Title).toBe(results.Search[2].Title);
    expect(tmdbApi.search).toHaveBeenCalledWith('Star Wars')
  });

  it('should set result status to error', function() {
		spyOn(tmdbApi, 'search').and.callFake(function() {
			var deferred = $q.defer();
			deferred.reject();
			return deferred.promise;
		});
		$location.search('q', 'star wars');
		$controller('ResultsController', { $scope: $scope });
		$rootScope.$apply();
		expect($scope.errorMessage).toBe('Something went wrong!');
	});

})