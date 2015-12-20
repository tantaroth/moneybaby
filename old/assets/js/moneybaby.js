var mb = angular.module('moneybaby', ['ngRoute', 'LocalStorageModule', 'pascalprecht.translate', 'firebase']);

mb.config(function($routeProvider, $locationProvider, $translateProvider, localStorageServiceProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home/index.html',
			controller: 'HomeCtrl'
		})
		.when('/stock', {
			templateUrl: 'templates/stock/index.html',
			controller: 'StockCtrl'
		})
		.when('/product', {
			templateUrl: 'templates/product/index.html',
			controller: 'ProductCtrl'
		})
		.otherwise('/');

	$translateProvider.preferredLanguage('es');

	$translateProvider.useStaticFilesLoader({
		prefix: 'assets/static/langs/',
		suffix: '.json'
	});

	localStorageServiceProvider
		.setPrefix('moneybaby')
		.setStorageType('localStorage');
});