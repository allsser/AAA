var express = require('express'), http = require('http');

//익스프레스 객체 생성
var app = express();

app.use(function(req, res, next) {
  console.log('첫 번째 미들웨어에서 요청을 처리함.');

  res.send({name:'최찬종', age:26});
});

//Express 서버 시작
http.createServer(app).listen(3000, function() {
  console.log('익스프레스 서버를 시작했습니다 : 3000');
});
