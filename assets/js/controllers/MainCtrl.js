mb.controller('MainCtrl', function ($scope, $translate) {
	$scope.changeLanguage = function (lang) {
		$translate.use(lang);
	}
});