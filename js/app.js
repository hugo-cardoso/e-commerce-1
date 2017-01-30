angular
.module('app', [
	'ngRoute',
	'angular-carousel'
	])
.controller('appController' , appController)
.controller('menuController' , menuController)

function appController($scope) { 

	var vm = this;

	$scope.featured = 
	[{
		"title":"Sapatênis Polo HPC Branco"
	},{
		"title":"Sapatênis Polo HPC Cinza"
	},{
		"title":"Mocassim Mr.Kitsch Drive Bailey Marrom"
	},{
		"title":"Camisa Lacoste Xadrez Vermelha"
	}
	];

	$scope.slides = ["slide-1","slide-2"]

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