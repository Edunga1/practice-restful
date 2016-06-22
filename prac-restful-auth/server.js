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
// express-session 사용
app.use(session({
    secret: 'feature-login',
    rolling: true,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 3000
    }
}));

app.post('/login', function (req, res) {
    var id = req.body.id,
        pw = req.body.pw;

    if (req.session.uid) {
        req.session.touch();
        res.sendStatus(200);
        console.log('foo is already login.');
    } else if (id === 'foo' && pw === 'bar') {
        req.session.uid = id;
        res.sendStatus(200);
        console.log('foo login.');
    } else {
        res.sendStatus(400);
        console.log('login denied.');
    }

});

app.post('/logout', function (req, res) {
    var uid = req.session.uid;
    if (req.session.uid) {
        req.session.destroy();
        res.sendStatus(200);
        console.log('foo logout.');
    } else {
        res.sendStatus(400);
        console.log('logout denied.');
    }
});

app.listen(3000);
console.log('Express Listening on port 3000...');
