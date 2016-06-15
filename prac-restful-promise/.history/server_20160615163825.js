/**
 * 1. curl -X POST http://localhost:3000/fruits/newFruit
 * -  정상 작동, 트랜잭션 정상 작동 버전
 * 2. curl -X POST http://localhost:3000/wrong/newFruit
 * -  정상 작동, 중간에서 오류 발생 시 트랜잭션이 작동하여 이전 내용 롤백 버전
 * 3. curl -X POST http://localhost:3000/no/newFruit
 * -  오류, no-transaction 버전, fruit insert 후 log insert 시 오류가 발생하여 fruit 만 입력 됨
 */

var express = require('express'),
    fruits = require('./routes/fruits');
var app = express();

app.post('/fruits/:name', fruits.add);
app.post('/wrong/:name', fruits.wrongAdd);
app.post('/no/:name', fruits.addNoTransaction);

app.listen(3000);
console.log('Express Listening on port 3000...');
