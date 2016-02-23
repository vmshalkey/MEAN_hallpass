var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PassSchema = new mongoose.Schema({
	id: {},
	name: { type: String, required: true },
	destination: { type: String, required: true },
	status: { type: String, required: true },
	departure: { type: Date },
	arrival: { type: Date },
	created_at: { type: Date }
})
var Pass = mongoose.model('Pass', PassSchema);