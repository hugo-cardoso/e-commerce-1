angular
.module('app', [
	'ngRoute',
	'angular-carousel',
	'ngAnimate'
	])
.controller('appController' , appController)
.controller('menuController' , menuController)

function appController($scope, $location, $window) { 

	var vm = this;

	// Menu itens

	// Products

	$scope.featured = 
	[{
		"title":"Shoes Polo HPC White",
		"category": "Shoes",
		"gender": "M"
	},{
		"title":"Shoes Polo HPC Gray",
		"category": "Shoes",
		"gender": "M"
	},{
		"title":"Mocassim Mr.Kitsch Drive Bailey Brown",
		"category": "Shoes",
		"gender": "M"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "M"
	},{
		"title":"Mocassim Mr.Kitsch Drive Bailey Brown",
		"category": "Shoes",
		"gender": "M"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "M"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "F"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "F"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "F"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "F"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "F"
	},{
		"title":"Lacoste Red Chess Shirt",
		"category": "Shirt",
		"gender": "F"
	}
	];

	// Change Router

	$scope.go = function ( path ) {
		$location.path( "/" + path );

		if(screen.width <= 480){

			$scope.menu = false;
		}

		$window.scrollTo(0, 0);

	};

	$scope.menu = false;

	$scope.toggleMenu = function(){

		if($scope.menu){
			$scope.menu = false;
		}else{
			$scope.menu = true;
		}

	}



}

function menuController($scope, $window, $location) {

	// Menu items

	$scope.menuItems = [{
		Title: 'home',
		LinkText: 'Home',
	}, {
		Title: 'category/mens',
		LinkText: 'Mens'
	}];

	$scope.navClass = function (page) {
		var currentRoute = $location.path().substring(1) || 'home';
		return page === currentRoute ? 'active' : '';
	};

	// Menu Fixed on Scroll 150px+ (Only Desktop)

	angular.element($window).on("scroll resize", function (e) {
		$scope.$apply(function(){
			$scope.menuFixed = $window.pageYOffset;
		})
	});

}