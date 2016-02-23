app.controller('PassesController', function(PassFactory, UserFactory, $scope){
	console.log("PassesController Loaded");

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