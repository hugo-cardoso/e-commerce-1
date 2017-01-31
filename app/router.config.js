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

	.when('/category/mens', {
		templateUrl : 'app/pages/layout/mens.html',
		controller  : 'mensController',
		controllerAs: 'vm'
	});
}