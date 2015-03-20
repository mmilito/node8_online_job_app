var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rockincompany');
//var applicants = require('./controllers/applicants.js');
var indexController = require('./controllers/indexController.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});


// displays a list of applicants
app.get('/applicants',indexController.appListing);

// creates an applicant
app.post('/applicant', indexController.newApplicant);

//removes applicant
app.get('/remove/:info', indexController.appRemove);



var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
