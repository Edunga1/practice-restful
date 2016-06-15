var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.get('/fruits', fruits.findAll);
app.get('/fruits/:id', fruits.findById);
app.post('/fruits/:name', fruits.add);
app.put('/fruits/:id/:name', fruits.update);
app.delete('/fruits/:id', fruits.delete);

app.listen(3000);
console.log('Express Listening on port 3000...');
