var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home', {
		controller: 'MainController',
		controllerAs: 'main_ctrl',
		templateUrl: '/partials/home.html'
	})
	.when('/log', {
		controller: 'PassesController',
		controllerAs: 'pass_ctrl',
		templateUrl: '/partials/log.html'
	})
	.when('/games', {
		controller: 'GamesController',
		controllerAs: 'games_ctrl',
		templateUrl: '/partials/games.html'

	})
	.otherwise('/home');
})