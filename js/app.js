angular
.module('app', [
	'ngRoute',
	'angular-carousel'
	])
.controller('appController' , appController);

function appController($scope) { 

	var vm = this;

	$scope.featured = 
	[{
		"title":"Product 1"
	},{
		"title":"Product 2"
	},{
		"title":"Product 3"
	},{
		"title":"Product 4"
	}
	];

	$scope.slides = ["slide-1","slide-2"]

}