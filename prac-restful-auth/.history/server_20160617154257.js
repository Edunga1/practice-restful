/**
 * form request를 대응하고, 로그인 기능 연습
 */

'use strict';

var express = require('express'),
    bparser = require('body-parser'),
    session = require('session');
var app = express();

app.use(bparser.urlencoded({extended: true}));

app.post('/login', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000);
console.log('Express Listening on port 3000...');
