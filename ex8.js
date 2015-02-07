var express = require('express');
var fs = require('fs');
var app = express();
app.get('/', function(req, res) {
	fs.readFile(process.argv[2], function(data) {
		res.json(JSON.parse(data));
	});
});
app.listen(process.argv[2] || 3001);