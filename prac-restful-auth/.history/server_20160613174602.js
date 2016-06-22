var express = require('express'),
    wines = require('./routes/wines');
var app = express();

app.get('/wines', wines.findAll);

app.get('/wines/:id', function(req, res) {
    res.send(
        {
            id: req.params.id,
            name: 'The Name',
            description: 'description'
        }
    );
});

app.listen(3000);
console.log('Express Listening on port 3000...');