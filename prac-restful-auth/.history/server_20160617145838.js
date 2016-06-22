/**
 * 1. curl -X GET http://localhost:3000/fruits
 * 2. curl -X GET http://localhost:3000/fruits/1
 * 3. curl -X POST http://localhost:3000/fruits/newFruit
 * 4. curl -X PUT http://localhost:3000/fruits/1/updateFruit
 * 5. curl -X DELETE http://localhost:3000/fruits/1
 */

var express = require('express');
var app = express();

app.post('/login', function (req, res) {
    console.log(req.get('content-type'));
    console.log(req.params);
    res.sendStatus(200);
});

app.listen(3000);
console.log('Express Listening on port 3000...');
