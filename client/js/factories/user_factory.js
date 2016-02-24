app.factory('UserFactory', function($http, $location) {
	return {

		getUsers: function(callback){
			console.log("UserFactory getUsers");
			$http.get('/users').success(function(response) {
				callback(response);
			})
			// var response = [{first_name: 'Winners!'}];
			// callback(response);
		},
		loginUser: function(user, callback){
			console.log("UserFactory loginUser");
			$http.post('/users/login', user).success(function(response){
				callback(response);
				this.loggeduser = user;
				console.log("logged user is " + this.loggeduser);
				console.log(this.loggeduser);
			});
		},
		saveUser: function(user){
			console.log("UserFactory saveUser");
			this.loggeduser = user;
			console.log("UserFactory saved " + this.loggeduser.first_name);
		},
		addUser: function(newUser, callback){
			console.log("UserFactory addUser", newUser);
			$http.post('/users', newUser).success(function(response){
				callback(response);

			});
			$location.path("/");
		}
	}
})