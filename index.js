var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/ola', function(req, res){
	res.send('ola');
	
});

app.listen(3001);

