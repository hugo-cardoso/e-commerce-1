angular
.module('app')
.controller('categorieController' , categorieController);

function categorieController($scope, $location, $filter, filterFilter, $timeout, $window, $rootScope) {

	$timeout(function(){

		if(!$scope.filterGender || !$scope.filterCategory){
			console.log("Opa!" + $location.path().split("/")[1])
			$location.url( $location.path().split("/")[1] + '/categories')
		}

	})

	$scope.openProduct = function(id){
		
		$rootScope.idProduct = id;

		$scope.go($location.path().split("/")[1] + '/categories/list/view');

		console.log($rootScope.idProduct);

	}


} 