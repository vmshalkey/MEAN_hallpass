var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, './client')));

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Mongoose
require('./server/config/mongoose.js');

// HTTP Routes
var routes = require('./server/config/routes.js');
routes(app);

// Socket Routes
// require('./server/config/socket/routes.js')(app);

// Sockets
// io = require('socket.io').listen(server)

// MySQL Database
// var mysql = require('mysql');

// con = mysql.createConnection({
// 	host: "localhost",
// 	port: 3306,
// 	user: "root",
// 	password: "root",
// 	database: "lighthouse",
// 	multipleStatements: true
// });

// con.connect(function(err){
// 	if(err){
// 		console.log('Error connecting to database');
// 		return;
// 	}
// 	console.log('Connection to MySQL DB established');
// });
routes(app);

var port = 8000;
var server = app.listen(port, function() {
	console.log('============ hallpass app listening on port '+port+' ============')
});