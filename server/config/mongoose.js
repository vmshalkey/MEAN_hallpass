var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/MEAN_hallpass');

var models_path = (__dirname + '/./../models');
// read all of the files in the models_path an require (run) each of them
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		// require the file (this runs the model file which registers the)
		require(models_path + '/' + file);
	}
});