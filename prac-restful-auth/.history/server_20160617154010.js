/**
 * form request를 대응하고, 로그인 기능 연습
 */

var express = require('express');
var bparser = require('body-parser');
var app = express();

// app.use(bparser.urlencoded({extended: true}));

app.post('/login', function (req, res) {
    console.log(req.body);
    req.on('data', function (data) {
        console.log(data);
    });
    res.sendStatus(200);
});

app.listen(3000);
console.log('Express Listening on port 3000...');
