describe('Search controller', function() {
	var $this;
	var $location;
	var $controller;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$controller_, _$location_) {
		$scope = {}
		$location = _$location_;
		$controller = _$controller_;
	}));

	it('should redirect to the query results page for non-empty query', function() {
		$this = $controller('SearchController', {$location: $location } , {query: 'Jack Reacher'});
		$this.search();
		expect($location.url()).toBe('/results?q=Jack%20Reacher');
	});

	it('should not redirect to query results form empty query', function() {
		$this = $controller('SearchController', {$location: $location } , {query: ''});
		$this.search();
		expect($location.url()).toBe('')
	});

});