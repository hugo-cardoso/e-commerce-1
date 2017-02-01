angular
.module('app')
.controller('categorieController' , categorieController).filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});

function categorieController($scope, $location, $filter, filterFilter, $timeout, $window) {

	$scope.pagination = [];

	// pagination controls
	$timeout(function() {
		$scope.currentPage = 1;
		$scope.totalItems = $scope.filtered.length;
		$scope.entryLimit = 8;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

		for (var i = 1; i <= $scope.noOfPages; i++) {
			$scope.pagination.push(i);
		}

	});

	$scope.toPage = function(i){
		$scope.currentPage = i;
		$window.scrollTo(0, 0);
	}

} 