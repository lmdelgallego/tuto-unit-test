describe('MovieCore', function() {
  var PopularMovies;
  var $httpBackend;

  beforeEach(module('movieCore'));

  beforeEach(inject(function(_PopularMovies_,_$httpBackend_){
    PopularMovies = _PopularMovies_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function(){
    $httpBackend.verifyNoOutstandingExpectation(); 
    $httpBackend.verifyNoOutstandingRequest();
  })

  it('should create popular movie', function(){
    // '{"movieId":"75780","description":"Great Movie!"}'
    var expectedData =function(data){
      return angular.fromJson(data).movieId === "75780";
    }

    $httpBackend.expectPOST(/./, expectedData)
      .respond(201)

    var popularMovie = new PopularMovies({
      movieId: '75780',
      description: 'Great Movie!'
    });

    popularMovie.$save();

    expect($httpBackend.flush).not.toThrow();
    
  });

  it('should get popular movie by id', function(){
    $httpBackend.expectGET('popular/75780').respond(200);
    PopularMovies.get({
      movieId : '75780'
    });
    expect($httpBackend.flush).not.toThrow();
  });

  it('should update popular movie', function(){
    $httpBackend.expectPUT('popular').respond(200);
    var popularMovie = new PopularMovies({
      movieId: '75780',
      description: 'Great Movie!'
    });
    popularMovie.$update();
    expect($httpBackend.flush).not.toThrow();
  });

  it('should authenticated request', function() {
    // '{ "authToken": "teddybear","Accept": "application/json, text/plain, */*"}'
    var headerData = function(headers){
      return angular.fromJson(headers).authToken === 'teddybear';
    };
    var matchAny = /.*/;

    $httpBackend.whenGET(matchAny,headerData).respond(200);

    $httpBackend.expectPOST(matchAny,matchAny,headerData).respond(200);
    $httpBackend.expectPUT(matchAny,matchAny,headerData).respond(200);
    $httpBackend.expectDELETE(matchAny,headerData).respond(200);

    var popularMovie = {
      movieId: '75780',
      description: 'Great Movie!'
    };

    PopularMovies.query();
    PopularMovies.get({movieId: '75780'});
    new PopularMovies(popularMovie).$save();
    new PopularMovies(popularMovie).$update();
    new PopularMovies(popularMovie).$remove();

    expect($httpBackend.flush).not.toThrow();
  });


});