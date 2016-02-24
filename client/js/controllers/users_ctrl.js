app.controller('UsersController', function(UserFactory, $location, $scope, auth){
	console.log("UsersController Loaded");
	var that = this;

	$scope.auth = auth;

	console.log(auth);

	if(UserFactory.loggeduser){
		that.loggeduser = UserFactory.loggeduser;
	}
	var getUsers = function() {
		console.log("UsersController getUsers");
		UserFactory.getUsers(function(users) {
			that.users = users;
		});
	}

	this.loginUser = function(user){
		console.log("Click - user through param Login", user);
		console.log(user);
		// console.log(that.users);
		if(user){
			UserFactory.loginUser(user, function(user){
				// that.loggeduser = user;
				that.loggeduser = user;
				console.log(that.loggeduser[0]);
				console.log("Controller says " + that.loggeduser[0]);
				console.log(that.loggeduser[0].first_name);

				UserFactory.saveUser(that.loggeduser[0]);
				$location.path("/");

				// console.log(user);
			});
		}
	}
	getUsers();

	this.addUser = function(newUser){
		console.log("Clicked - newUser through param ", newUser);
		// console.log("Clicked - data through scope ", that.newUser);
		if(newUser){
			UserFactory.addUser(newUser, function(){
				getUsers();
			})
		}
	}

});