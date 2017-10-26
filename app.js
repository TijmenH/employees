const express = require('express');
const app = express();

// Static files directory
app.use('/public', express.static(__dirname + '/build'));

// Root route
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

// Server
app.listen(3000, () => {
	console.log('App listening on port 3000');
});
