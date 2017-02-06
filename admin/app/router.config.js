angular
.module('app')
.config(config);

function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'app/pages/layout/cadastro.html',
		controller  : 'cadastroController',
		controllerAs: 'vm'
	})
	
}