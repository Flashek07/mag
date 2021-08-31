

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nocache = require('nocache')

var clear_jsons = require('./scripts/clear_json.js');
clear_jsons.clear_json(target = "json/users.json", clear = "{}");
clear_jsons.clear_json(target = "json/events.json", clear = "{}");
clear_jsons.clear_json(target = "json/archive.json", clear = "{}");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var add_userRouter = require('./routes/add_user');
var del_userRouter = require('./routes/del_user');
var eventRouter = require('./routes/event');
var add_eventRouter = require('./routes/add_event');
var mysql_connect = require('./mysql/connect');
var users_json = require('./json/users.json');
var get_users = require('./scripts/get_user.js');
var add_archiveRouter = require('./routes/add_archive');
var archiveRouter = require('./routes/archive');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(nocache());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add_user', add_userRouter);
app.use('/del_user', del_userRouter);
app.use('/event', eventRouter);
app.use('/add_event', add_eventRouter);
app.use('/archive', archiveRouter);
app.use('/add_archive', add_archiveRouter);


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

  // disable cache for all sites
  app.use(function (req, res, next) {
    res.set('Cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  });


mysql_connect.connect_database();

module.exports = app;
