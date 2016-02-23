app.controller('MainController', function(UserFactory, PassFactory, $scope){
	console.log("MainController Loaded");

	// $scope.loggedUser = false;

	// 	while($scope.loggedUser === false) {
	// 		$scope.loggedUser = prompt("What is your name?");
	// 		console.log($scope.loggedUser);
	// 	}


	// UserFactory.loginUser(function(user) {
	// 	$scope.loggedUser = user;
	// 	console.log($scope.loggedUser);
	// });

	$scope.loginUser = function() {
		UserFactory.loginUser(function(user) {
			$scope.loggedUser = user;
			console.log("C | CTRL | loginUser", $scope.loggedUser);
		});
	}

	$scope.logoutUser = function() {
		console.log("C | CTRL | logoutUser", $scope.loggedUser);
		UserFactory.logoutUser(function(user) {
			$scope.loggedUser = user;
			console.log("LoggedUser: ", $scope.loggedUser);
		});
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


});