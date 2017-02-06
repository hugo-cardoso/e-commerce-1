angular
.module('app')
.controller('productController' , productController);

function productController($scope, $location, $filter, filterFilter, $timeout, $window, $rootScope) {


	$timeout(function(){

		if(!$rootScope.idProduct){
			window.history.go(-1);
		}

	})

	$scope.product = $filter('filter')($scope.products, {$id: $rootScope.idProduct})[0];

	console.log($scope.product);

} 