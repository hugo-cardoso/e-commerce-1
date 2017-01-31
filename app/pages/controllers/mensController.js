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

function mensController($scope, $location, $filter, filterFilter, $timeout) {

	$scope.search = {"Shoes":true,"Shirt":true};

	// pagination controls
	$timeout(function() {
		$scope.currentPage = 1;
		$scope.totalItems = $scope.featured.length;
		$scope.entryLimit = 6;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
	});

	// Filtro

	$scope.searchBy = function () {
		return function (q) {
			if ( $scope.search[q.categoria] === true ) {
				return true;
			}
		}
	};

} 