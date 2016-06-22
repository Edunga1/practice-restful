/**
 * form request를 대응하고, 로그인 기능 연습
 */

'use strict';

var express = require('express'),
    session = require('express-session'),
    bparser = require('body-parser');
var app = express();

// body-parser application/x-www-form-urlencoded 파싱
app.use(bparser.urlencoded({extended: true}));
//
app.use(session({
    secret: 'feature-login',    //
    resave: false,              //
    saveUninitialized: true     //
}));

app.post('/login', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(3000);
console.log('Express Listening on port 3000...');
