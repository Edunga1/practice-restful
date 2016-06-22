var express = require('express'),
    fruit = require('./routes/fruit');
var app = express();

app.get('/exercise', exercise.findAll);
app.get('/exercise/:id', exercise.findById);

app.listen(3000);
console.log('Express Listening on port 3000...');
