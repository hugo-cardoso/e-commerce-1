angular
.module('app')
.controller('mensCategorieController' , mensCategorieController);

function mensCategorieController($scope, $location, $filter, filterFilter, $timeout, $window) {

	if(!$scope.filterGender || !$scope.filterCategory){
		$location.url('/mens/categories')
	}

} 