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
			url: '/splittwitch/one',
			templateUrl: './partials/one.html',
		})
		.state('splittwitch.two', {
			url: '/splittwitch/two',
			templateUrl: './partials/two.html',
		})
		.state('splittwitch.three', {
			url: '/splittwitch/three',
			templateUrl: './partials/three.html',
		})
		.state('splittwitch.four', {
			url: '/splittwitch/four',
			templateUrl: './partials/four.html',
		})


})