const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Static files directory
app.use('/public', express.static(__dirname + '/build'));

// Root route
app.get('/', (req, res) => {
	// res.sendFile(__dirname + '/views/index.html');
	res.render('employee-list', {test: 'test'})
});

// Server
app.listen(3000, () => {
	console.log('App listening on port 3000');
});
