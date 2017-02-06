angular
.module('app', [
	'ngRoute',
	'ngAnimate',
	'angular.filter',
	'firebase'
	])
.controller('appController' , appController);

function appController($scope) {
	console.log("App Initialize");
}