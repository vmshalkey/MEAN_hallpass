var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, './client')));

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);

var port = 8000;
var server = app.listen(port, function() {
	console.log('============ hallpass app listening on port '+port+' ============')
});