angular
.module('app')
.controller('productController' , productController);

function productController($scope, $location, $filter, filterFilter, $timeout, $window, $rootScope) {


	$timeout(function(){

		if(!$scope.filterGender || !$scope.filterCategory){
			console.log("Opa!" + $location.path().split("/")[1])
			$location.url( $location.path().split("/")[1] + '/categories')
		}

	})

	$scope.product = $filter('filter')($scope.products, {id: $rootScope.idProduct})[0];

	console.log($scope.product);

} 