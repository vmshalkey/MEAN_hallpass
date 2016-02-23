app.factory('UserFactory', function($http, $location) {
	var factory = {};
	console.log("FACTORY")
	factory.loggedUser = false;

	// factory.loginUser = function(callback){

		// while(factory.loggedUser === false) {
		// 	factory.loggedUser = prompt("What is your name?");
		// }
	// 	return callback(factory.loggedUser);
	// }

	factory.loginUser = function(callback){
		while(factory.loggedUser === false) {
			factory.loggedUser = prompt("What is your name?");
		}
		return callback(factory.loggedUser);
	}


	factory.logoutUser = function(callback){
		factory.loggedUser = false;
		return callback(factory.loggedUser);
	}
	return factory;
});