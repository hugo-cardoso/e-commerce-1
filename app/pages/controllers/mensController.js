angular
.module('app')
.controller('mensController' , mensController).filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});

function mensController($scope, $location, $filter, filterFilter, $timeout, $window) {

	$scope.search = {"Shoes":true,"Shirt":true};

	$scope.pagination = [];

	// pagination controls
	$timeout(function() {
		$scope.currentPage = 1;
		$scope.totalItems = $scope.filtered.length;
		$scope.entryLimit = 4;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

		for (var i = 1; i <= $scope.noOfPages; i++) {
			$scope.pagination.push(i);
		}

	});

	// Filtro

	$scope.searchBy = function () {
		return function (q) {
			if ( $scope.search[q.categoria] === true ) {
				return true;
			}
		}
	};

	$scope.toPage = function(i){
		$scope.currentPage = i;
		$window.scrollTo(0, 0);
	}

} 