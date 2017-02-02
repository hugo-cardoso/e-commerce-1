angular
.module('app', [
	'ngRoute',
	'angular-carousel',
	'ngAnimate',
	'angular.filter',
	'angularUtils.directives.dirPagination',
	'ngCart'
	])
.controller('appController' , appController)
.controller('menuController' , menuController)

function appController($scope, $location, $window, $http, $filter,$timeout,$rootScope, ngCart) { 

	var vm = this;

	// Products

	$http.get("data.json")
	.then(function(response) {
		$scope.products = response.data;
	});

	// Change Router

	$scope.go = function ( path ) {
		$location.path( "/" + path );

		if(screen.width <= 480){

			$scope.menu = false;
		}

		$window.scrollTo(0, 0);

		$scope.pag

	};

	$scope.menu = false;

	$scope.toggleMenu = function(){

		if($scope.menu){
			$scope.menu = false;
		}else{
			$scope.menu = true;
		}

	}

	$scope.setFilter = function(gender,category){

		$scope.filterGender = gender;
		$scope.filterCategory = category;

	}

	$scope.scrollTop = function(){
		$window.scrollTo(0, 0);
		console.log("Top");
	}

	$scope.cart = 0;

	$rootScope.addCart = function(price){
		$scope.cart = price;
		$scope.cart1 = price;
		$timeout(function(){
			$scope.$apply();
		})
	}



}

function menuController($scope, $window, $location, $timeout, ngCart) {

	// Menu items

	$scope.menuItems = [{
		Title: 'home',
		LinkText: 'Home'
	}, {
		Title: 'mens/categories',
		LinkText: 'Mens'
	}];

	$scope.navClass = function (page) {

		var page1 = page.split("/");

		var currentRoute = $location.path().split("/")[1];

		return page1[0] === currentRoute? 'active' : '';

	};

	// Menu Fixed on Scroll 150px+ (Only Desktop)

	angular.element($window).on("scroll resize", function (e) {
		$scope.menuFixed = $window.pageYOffset;

		$timeout(function(){
			$scope.$apply();
		})

		$scope.$digest();
	});

}