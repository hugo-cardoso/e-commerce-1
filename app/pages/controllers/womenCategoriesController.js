angular
.module('app')
.controller('womenCategoriesController' , womenCategoriesController);

function womenCategoriesController($scope, ngCart) {

	var vm = this;

	$scope.titlePage = "Women";

	$scope.gender = 'women';

} 