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

	.when('/myaccount', {
		templateUrl : 'app/pages/layout/myaccount.html',
		controller  : 'myaccountController',
		controllerAs: 'vm'
	})

	.when('/mens/categories', {
		templateUrl : 'app/pages/layout/categories.html',
		controller  : 'mensCategoriesController'
	})

	.when('/mens/categories/list', {
		templateUrl : 'app/pages/layout/categorie.html',
		controller  : 'mensCategorieController',
		controllerAs: 'vm'
	})

}