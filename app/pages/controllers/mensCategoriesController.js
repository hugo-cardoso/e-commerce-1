angular
.module('app')
.controller('mensCategoriesController' , mensCategoriesController);

function mensCategoriesController($scope, ngCart) {

	var vm = this;

	$scope.titlePage = "Mens";

	$scope.gender = 'mens';

} 