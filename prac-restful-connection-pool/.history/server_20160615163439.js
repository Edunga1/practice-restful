/**
 * 1. curl -X GET http://localhost:3000/fruits
 * -  정상 작동
 * 2. curl -X GET http://localhost:3000/fruits2
 * -  최대 커넥션 초과 request 요청 시, 무한 대기 발생
 * 3. curl -X GET http://localhost:3000/fruits3
 * -  정상 작동, 커넥션 획득 및 반환 생략 버전
 */

var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.get('/fruits', fruits.findAll);
app.get('/fruits2', fruits.findAllNoRelease);
app.get('/fruits3', fruits.findAllPoolQuery);

app.listen(3000);
console.log('Express Listening on port 3000...');
