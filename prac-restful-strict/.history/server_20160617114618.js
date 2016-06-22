/**
 * 1. curl -X GET http://localhost:3000/fruits
 * 2. curl -X GET http://localhost:3000/fruits/1
 * 3. curl -X POST http://localhost:3000/fruits/newFruit
 * 4. curl -X PUT http://localhost:3000/fruits/1/updateFruit
 * 5. curl -X DELETE http://localhost:3000/fruits/1
 */

var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.all('*', function (req, res) {
    console.error('otherwise');

});
app.get('/fruits', fruits.findAll);
app.get('/fruits/:id', fruits.findById);
app.post('/fruits/:name', fruits.add);
app.put('/fruits/:id/:name', fruits.update);
app.delete('/fruits/:id', fruits.delete);

app.listen(3000);
console.log('Express Listening on port 3000...');
