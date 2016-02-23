var passes = require('../controllers/passes.js');

module.exports = function(app){

	app.get('/passes', function(req, res){
		passes.show(req, res);
	});
	app.post("/passes", function(req, res){
		passes.add(req, res);
	});
	app.get("/passes/:id/:status/update", function(req, res){
		passes.update(req, res);
	});
};