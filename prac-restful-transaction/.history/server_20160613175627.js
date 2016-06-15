var express = require('express'),
    wines = require('./routes/wines'),
    mysql = require('mysql');
var app = express();

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(3000);
console.log('Express Listening on port 3000...');
