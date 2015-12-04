mb.factory('fb', function(){
	return {
		ref: function (url) {
			var url = url || '';

			return (new Firebase("https://moneybaby.firebaseio.com/"+url));
		}
	};
});