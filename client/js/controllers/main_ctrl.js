app.controller('MainController', ['$scope', '$http', 'auth', 'store', '$location', function(UserFactory, PassFactory, $scope, $http, auth, store, $location){
	console.log("MainController Loaded");

	$scope.auth = auth;

	$scope.login = function () {
        auth.signin({}, function (profile, token) {
            // Success callback
            store.set('profile', profile);
            store.set('token', token);
            $location.path('/');
        }, function () {
            // Error callback
        });
    }
    $scope.logout = function() {
        auth.signout();
        store.remove('profile');
        store.remove('token');
    }

	$scope.addPass = function() {
		console.log("C | CTRL | addPass", $scope.new_pass);

		PassFactory.addPass($scope.new_pass, function() {
			$scope.passes = PassFactory.getPasses(function(data) {
				$scope.passes = data;
			});
		});
	},

	$scope.updatePass = function(id, status) {
		console.log("C | CTRL | updatePass");

		PassFactory.updatePass(id, status, function() {
			$scope.passes = PassFactory.getPasses(function(data) {
				$scope.passes = data;
			});
		})
	},

	PassFactory.getPasses(function(data) {
		$scope.passes = data;
	});


}]);