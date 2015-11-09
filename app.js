var split = angular.module('split', ['ngRoute', 'ngCookies', 'ui.router']);


split.config(function($stateProvider, $urlRouterProvider){


	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './partials/home.html',
		})
		.state('splittwitch', {
			url: '/splittwitch',
			templateUrl: './partials/one.html',
		})
		.state('splittwitch.one', {
			url: '/one',
			templateUrl: './partials/one.html',
		})
		.state('splittwitch.two', {
			url: '/two',
			templateUrl: './partials/two.html',
		})
		.state('splittwitch.three', {
			url: '/three',
			templateUrl: './partials/three.html',
		})
		.state('splittwitch.four', {
			url: '/four',
			templateUrl: './partials/four.html',
		})


})