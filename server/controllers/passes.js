var mongoose = require('mongoose');
var Pass = mongoose.model("Pass");

module.exports = (function(){
	return {
		show: function(req, res){
			Pass.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		add: function(req, res){
			console.log('S | CTRL | Add Pass' , req.body);

			var status = "pending";

			var pass = new Pass({
				name: req.body.name,
				destination: req.body.destination,
				status: status,
				departure: null,
				arrival: null,
				created_at: new Date()
			})
			pass.save(function (err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
		},
		update: function(req, res){
			console.log('S | CTRL | Update Pass', req.params.id, req.params.status);

			if(req.params.status === "1") {

				var status = "departed";
				var departure = new Date();

				Pass.update({_id: req.params.id}, { status: status, departure: departure }, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			}
			else if(req.params.status === "2") {

				var status = "arrived";
				var arrival = new Date();

				Pass.update({_id: req.params.id}, { status: status, arrival: arrival }, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			}
			else if(req.params.status === "3") {

				var status = "cancelled";

				Pass.update({_id: req.params.id}, { status: status }, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			}
			else if(req.params.status === "4") {

				var status = "pending";

				Pass.update({_id: req.params.id}, { status: status }, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			}
		}
	}
})()