const express = require('express');
const request = require('request');
const exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static files directory
app.use('/public', express.static(__dirname + '/build'));

// Root route
app.get('/', (req, res) => {
	// Get data using request package
	request('http://sys4.open-web.nl/employees.json', (error, response, data) => {
		res.render('employee-list', {data: data})
	});
});

// Server
app.listen(3000, () => {
	console.log('App listening on port 3000');
});
