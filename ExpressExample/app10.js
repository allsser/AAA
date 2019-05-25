//Express 기본 모듈 불러오기
var express = require('express'), http = require('http'), path = require('path');

//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');

//미들웨어 static
var static=require('serve-static');

//익스프레서 객체 생성
var app = express();

//기본 속성 설정
app.set('port', process.env.PORT || 3000);

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname)));

//오류 핸들러 사용
var expressErrorHandler = require('express-error-handler');

//라우터 객체 참조
var router = express.Router();

//라우팅 함수 등록
router.route('/process/login/:id').post(function(req, res) {
  console.log('/process/login/:id 처리함.');

  //URL 파라미터 확인
  var paramId = req.params.id;

  console.log('/process/user와 토큰 %s를 이용해 처리함.', paramId);

  res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
  res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
  res.write('<div><p>Param id : ' + paramId + '</p></div>');
  res.end();
});

//라우터 객체를 app 객체에 등록
app.use('/', router);

//모든 router 처리 끝난 후 404 오류 페이지 처리
var errorHandler = expressErrorHandler({
  static: {
    '404': './public/404.html'
  }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

//Express 서버 시작
http.createServer(app).listen(3000, function() {
  console.log('익스프레스 서버를 시작했습니다 : 3000');
});
