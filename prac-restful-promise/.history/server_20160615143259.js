var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.post('/fruits/:name', fruits.add);

app.listen(3000);
console.log('Express Listening on port 3000...');
