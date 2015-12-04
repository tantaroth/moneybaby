mb.controller('MainCtrl', function ($scope, $translate, $interval) {
	$scope.changeLanguage = function (lang) {
		$translate.use(lang);
	}
	$interval(function() {
		$scope.onLine = navigator.onLine;
    }, 1000);
});