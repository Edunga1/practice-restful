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
    secret: 'feature-login',    // 필수 옵션, session ID cookie 서명용 문자열
    resave: false,              // 기본값은 true, session이 수정되지 않으면 sesison stroe에 저장된 내용을 이용할 것인지 여부?
    saveUninitialized: true     // 새 session이 수정되지 않았다면, 초기화하지 않을지 여부?
}));

app.post('/login', function (req, res) {
    var id = req.body.id,
        pw = req.body.pw;

    console.log(id, pw);

    if (id === 'foo' && pw === 'bar') {
        res.sendStatus(200);
    } else if () {
        res.status(200).render('already!');
    }

    res.sendStatus(400);
});

app.listen(3000);
console.log('Express Listening on port 3000...');
