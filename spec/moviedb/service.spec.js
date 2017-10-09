describe('tmdb service', function () {

  var baseUrl = 'https://api.themoviedb.org/3/';
  var apiKey = '?api_key=0da341242b02005fb8d566dc4f7d2428&';

  var movieData = {
    "page": 1,
    "total_results": 2,
    "total_pages": 1,
    "results": [{
      "vote_count": 3028,
      "id": 75780,
      "video": false,
      "vote_average": 6.3,
      "title": "Jack Reacher",
      "popularity": 20.619252,
      "poster_path": "\/38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg",
      "original_language": "en",
      "original_title": "Jack Reacher",
      "genre_ids": [80, 18, 53],
      "backdrop_path": "\/ezXodpP429qK0Av89pVNlaXWJkQ.jpg",
      "adult": false,
      "overview": "In an innocent heartland city, five are shot dead by an expert sniper. The police quickly identify and arrest the culprit, and build a slam-dunk case. But the accused man claims he's innocent and says \"Get Jack Reacher.\" Reacher himself sees the news report and turns up in the city. The defense is immensely relieved, but Reacher has come to bury the guy. Shocked at the accused's request, Reacher sets out to confirm for himself the absolute certainty of the man's guilt, but comes up with more than he bargained for.",
      "release_date": "2012-12-20"
    }, {
      "vote_count": 1836,
      "id": 343611,
      "video": false,
      "vote_average": 5.3,
      "title": "Jack Reacher: Never Go Back",
      "popularity": 18.346136,
      "poster_path": "\/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
      "original_language": "en",
      "original_title": "Jack Reacher: Never Go Back",
      "genre_ids": [28],
      "backdrop_path": "\/nDS8rddEK74HfAwCC5CoT6Cwzlt.jpg",
      "adult": false,
      "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
      "release_date": "2016-10-19"
    }]
  }
  var movieDataById = {
    "adult": false,
    "backdrop_path": "/ezXodpP429qK0Av89pVNlaXWJkQ.jpg",
    "belongs_to_collection": {
      "id": 403374,
      "name": "Jack Reacher Collection",
      "poster_path": "/7baSUtFKi8PQ9SLo6ECYBfAW2K8.jpg",
      "backdrop_path": "/3FHrAeYMogXd6K1e5tUzQAiS7GE.jpg"
    },
    "budget": 60000000,
    "genres": [{
      "id": 80,
      "name": "Crime"
    }, {
      "id": 18,
      "name": "Drama"
    }, {
      "id": 53,
      "name": "Thriller"
    }],
    "homepage": "http://www.jackreachermovie.com/",
    "id": 75780,
    "imdb_id": "tt0790724",
    "original_language": "en",
    "original_title": "Jack Reacher",
    "overview": "In an innocent heartland city, five are shot dead by an expert sniper. The police quickly identify and arrest the culprit, and build a slam-dunk case. But the accused man claims he's innocent and says \"Get Jack Reacher.\" Reacher himself sees the news report and turns up in the city. The defense is immensely relieved, but Reacher has come to bury the guy. Shocked at the accused's request, Reacher sets out to confirm for himself the absolute certainty of the man's guilt, but comes up with more than he bargained for.",
    "popularity": 19.619252,
    "poster_path": "/38bmEXmuJuInLs9dwfgOGCHmZ7l.jpg",
    "production_companies": [{
      "name": "Paramount Pictures",
      "id": 4
    }, {
      "name": "Mutual Film Company",
      "id": 762
    }, {
      "name": "Skydance Productions",
      "id": 6277
    }, {
      "name": "TC Productions",
      "id": 21777
    }],
    "production_countries": [{
      "iso_3166_1": "US",
      "name": "United States of America"
    }],
    "release_date": "2012-12-20",
    "revenue": 218340595,
    "runtime": 130,
    "spoken_languages": [{
      "iso_639_1": "en",
      "name": "English"
    }],
    "status": "Released",
    "tagline": "The Law Has Limits. He Does Not.",
    "title": "Jack Reacher",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 3038
  };
  var tmdbApi = {};
  var $httpBackend;
  beforeEach(module('tmdb'));
  beforeEach(inject(function (_tmdbApi_, _$httpBackend_) {
    tmdbApi = _tmdbApi_;
    $httpBackend = _$httpBackend_;
  }));

  it('should return search movie data', function () {
    var response;

    $httpBackend.when('GET', baseUrl + 'search/' + apiKey + "query=Jack%20Reacher")
      .respond(200, movieData);

    tmdbApi.search('Jack Reacher')
      .then(function (resolve) {
        response = resolve.data;
      });

    $httpBackend.flush();

    expect(response).toEqual(movieData)
  });

  it('should handle error', function () {
    var response;

    $httpBackend.when('GET', baseUrl + 'movie/75780/' + apiKey)
      .respond(500);

    tmdbApi.find(75780)
      .then(function (resolve) {
        response = resolve;
      })
      .catch(function (error) {  
        response = "Error!";
      });

    $httpBackend.flush();

    expect(response).toEqual("Error!");
  });

  it('should return movie data by id', function () {
    var response;

    $httpBackend.when('GET', baseUrl + 'movie/75780/' + apiKey)
      .respond(200, movieDataById);

    tmdbApi.find(75780)
      .then(function (resolve) {
        response = resolve;
      });

    $httpBackend.flush();

    expect(response).toEqual(movieDataById);
  });
})