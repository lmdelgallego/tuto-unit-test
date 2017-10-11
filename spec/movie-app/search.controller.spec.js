describe('Search controller', function() {
	var $this;
	var $location;
	var $timeout;
	var $controller;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$controller_, _$location_,_$timeout_) {
		$scope = {}
		$location = _$location_;
		$controller = _$controller_;
		$timeout = _$timeout_
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

	it('should redirect after 1 second of keyboard inactivity', function(){
		$this = $controller('SearchController', {$location: $location, $timeout: $timeout } , {query: 'Star Wars'});
		$this.keyup();
		$timeout.flush();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
		expect($location.url()).toBe('/results?q=Star%20Wars');
	});

	it('should cancel timeout in keydown',function(){
		$this = $controller('SearchController', {$location: $location, $timeout: $timeout } , {query: 'Star Wars'});
		$this.keyup();
		$this.keydown();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	});

	it('should cancel timeout on search',function(){
		$this = $controller('SearchController', {$location: $location, $timeout: $timeout } , {query: 'Star Wars'});
		$this.keyup();
		$this.search();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	})

});