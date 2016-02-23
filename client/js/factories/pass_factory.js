app.factory('PassFactory', function($http, $location) {
	var factory = {};

	factory.getPasses = function(callback){
		$http.get('/passes').success(function(output){
			// console.log(output);
			passes = output;
			callback(passes);
		})
	}
	factory.addPass = function(info, callback){
		$http.post('/passes', info).success(function(output){
			callback();
			$location.path('/home');
		// console.log(output);
		})
	},
	factory.updatePass = function(id, status, callback){
		$http.get('/passes/'+id+'/'+status+'/update').success(function(output){
			callback();
			$location.path('/home');
		})
	}

	return factory;
});