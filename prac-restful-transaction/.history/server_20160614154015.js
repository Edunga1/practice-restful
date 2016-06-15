var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.get('/fruits', fruits.findAll);
app.get('/fruits/:id', fruits.findById);

app.listen(3000);
console.log('Express Listening on port 3000...');
