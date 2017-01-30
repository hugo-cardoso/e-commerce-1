angular
.module('app', [
	'ngRoute',
	'angular-carousel'
	])
.controller('appController' , appController)
.controller('menuController' , menuController)

function appController($scope, $window) { 

	var vm = this;

	$scope.featured = 
	[{
		"title":"Shoes Polo HPC White"
	},{
		"title":"Shoes Polo HPC Gray"
	},{
		"title":"Mocassim Mr.Kitsch Drive Bailey Brown"
	},{
		"title":"Lacoste Red Chess Shirt"
	}
	];

	$scope.slides = ["slide-1","slide-2"]

	window.onscroll = function () {
		var menuFixed = window.pageYOffset;

		if (menuFixed > 150) {
			$scope.menuFixed = true;
		}else{
			$scope.menuFixed = false;
		}


		$scope.$digest();
	};

}

function menuController($scope) {

	$scope.menu = false;

	$scope.toggleMenu = function(){

		if($scope.menu){
			$scope.menu = false;
		}else{
			$scope.menu = true;
		}

	}

}