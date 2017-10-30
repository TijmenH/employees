const express = require('express');
const request = require('request');
const app = express();

// Static files directory
app.use('/public', express.static(__dirname + '/build'));

// Root route
app.get('/', async (req, res) => {
	// Get data using request package
	request('http://sys4.open-web.nl/employees.json', (error, response, data) => {
		console.log(data);
		res.sendFile(__dirname + '/views/index.html');
	});
});

// Server
app.listen(3000, () => {
	console.log('App listening on port 3000');
});
