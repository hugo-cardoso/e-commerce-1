angular
.module('app')
.config(config);

function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'app/pages/layout/home.html',
		controller  : 'appController',
		controllerAs: 'vm'
	})

	.when('/home', {
		templateUrl : 'app/pages/layout/home.html',
		controller  : 'appController',
		controllerAs: 'vm'
	})

	.when('/home/view', {
		templateUrl : 'app/pages/layout/product.html',
		controller  : 'productController',
		controllerAs: 'vm'
	})

	.when('/myaccount', {
		templateUrl : 'app/pages/layout/myaccount.html',
		controller  : 'myaccountController',
		controllerAs: 'vm'
	})

	.when('/cart', {
		templateUrl : 'app/pages/layout/cart.html',
		controller  : 'cartController',
		controllerAs: 'vm'
	})

	// Mens

	.when('/mens/categories', {
		templateUrl : 'app/pages/layout/categories.html',
		controller  : 'mensCategoriesController'
	})

	.when('/mens/categories/list', {
		templateUrl : 'app/pages/layout/categorie.html',
		controller  : 'categorieController',
		controllerAs: 'vm'
	})

	.when('/mens/categories/list/view', {
		templateUrl : 'app/pages/layout/product.html',
		controller  : 'productController',
		controllerAs: 'vm'
	})

	// Women

	.when('/women/categories', {
		templateUrl : 'app/pages/layout/categories.html',
		controller  : 'womenCategoriesController'
	})

	.when('/women/categories/list', {
		templateUrl : 'app/pages/layout/categorie.html',
		controller  : 'categorieController',
		controllerAs: 'vm'
	})

	.when('/women/categories/list/view', {
		templateUrl : 'app/pages/layout/product.html',
		controller  : 'productController',
		controllerAs: 'vm'
	})

}