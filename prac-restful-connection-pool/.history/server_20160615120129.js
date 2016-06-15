var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.get('/fruits', fruits.findAll);

app.listen(3000);
console.log('Express Listening on port 3000...');
