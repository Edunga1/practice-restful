/**
 * form request를 대응하고, 로그인 기능 연습
 */

var express = require('express');
    bparser = require('body-parser');
var app = express();


app.post('/login', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000);
console.log('Express Listening on port 3000...');