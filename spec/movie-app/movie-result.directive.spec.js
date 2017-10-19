describe('Movie Result Directive', function() {

  var result = {
    "adult": false,
    "backdrop_path": "/ZQixhAZx6fH1VNafFXsqa1B8QI.jpg",
    "belongs_to_collection": {
      "id": 131292,
      "name": "Iron Man Collection",
      "poster_path": "/fbeJ7f0aD4A112Bc1tnpzyn82xO.jpg",
      "backdrop_path": "/rI8zOWkRQJdlAyQ6WJOSlYK6JxZ.jpg"
    },
    "budget": 140000000,
    "genres": [{
      "id": 28,
      "name": "Action"
    }, {
      "id": 878,
      "name": "Science Fiction"
    }, {
      "id": 12,
      "name": "Adventure"
    }],
    "homepage": "http://www.ironmanmovie.com/",
    "id": 1726,
    "imdb_id": "tt0371746",
    "original_language": "en",
    "original_title": "Iron Man",
    "overview": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "popularity": 26.38426,
    "poster_path": "/848chlIWVT41VtAAgyh9bWymAYb.jpg",
    "production_companies": [{
      "name": "Paramount Pictures",
      "id": 4
    }, {
      "name": "Marvel Studios",
      "id": 420
    }],
    "production_countries": [{
      "iso_3166_1": "US",
      "name": "United States of America"
    }],
    "release_date": "2008-04-30",
    "revenue": 585174222,
    "runtime": 126,
    "spoken_languages": [{
      "iso_639_1": "en",
      "name": "English"
    }, {
      "iso_639_1": "fa",
      "name": "فارسی"
    }, {
      "iso_639_1": "ur",
      "name": "اردو"
    }, {
      "iso_639_1": "ar",
      "name": "العربية"
    }],
    "status": "Released",
    "tagline": "Heroes aren't born. They're built.",
    "title": "Iron Man",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 9011
  }

  var expectedHtml= [
    '<div class="row">',
      '<div class="col-sm-4">',
        '<img ng-src="https://image.tmdb.org/t/p/w500//848chlIWVT41VtAAgyh9bWymAYb.jpg" alt="Iron Man" width="220" src="/848chlIWVT41VtAAgyh9bWymAYb.jpg">',
      '</div>',
      '<div class="col-sm-8">',
          '<h3 class="ng-binding">Iron Man</h3>',
          '<p class="ng-binding">After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.</p>',
          '<p class="ng-binding"><strong>Released:</strong> 2008-04-30</p>',
          '<p class="ng-binding"><strong>Genre:</strong> Action</p>',
      '</div>',
    '</div>'
  ].join('')

  var $compile;
  var $rootScope;
  
  beforeEach(module('movieApp'));
  beforeEach(inject(function(_$compile_,_$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should output movie result to expected HTML format', function() {
    $rootScope.result = result;
    var element;
    element = $compile('<movie-result result="result"></movie-result>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toBe(expectedHtml);
  });

});
