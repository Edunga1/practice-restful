var express = requre('express');
var app = express();

app.get('/wines', function(req, res) {
    res.send(
        [
            {name: 'wine1'},
            {name: 'wine2'}
        ]
    );
});