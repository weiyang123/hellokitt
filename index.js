var path = require('path');//引用模板引擎使用

var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

app.use('/',indexRouter);
app.use('/user',userRouter);

app.listen(3000);