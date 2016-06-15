var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.get('/fruits', fruits.findAll);

// test
app.get('/test', fruits.test);

app.listen(3000);
console.log('Express Listening on port 3000...');
