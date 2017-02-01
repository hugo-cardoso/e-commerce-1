angular
.module('app')
.controller('mensCategoriesController' , mensCategoriesController);

function mensCategoriesController($scope) {

	var vm = this;

	$scope.titlePage = "Mens";

	$scope.gender = 'mens';

} 