var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var $ = require('jquery');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var productRouter = require('./routes/product');
var productItemRouter = require('./routes/productItem.js');
var app = express();
//允许跨域
app.all('*',function (req,res,next) {
  res.header('Access-Control-Allow-Origin','*');
  //res.header('Access-Control-Allow-Headers','*');
  res.header('Access-Control-Allow-Methods','*');
  //res.header('Content-Type','application/json;charset=utf-8');
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/webapp', indexRouter);
app.use('/webapp/users', usersRouter);
app.use('/webapp/contact',contactRouter);
app.use( '/webapp/product',productRouter);
app.use('/webapp/productItem',productItemRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
