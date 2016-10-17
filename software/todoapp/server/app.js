var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var routes = require('./routes/index');
var users = require('./routes/users');
var session = require('express-session');
var mongoose = require('mongoose');


//load configuration from config
var config = require('./config/config.js');
var conf = new config();

console.log("*****************************************");
console.log("Application environment set to : "+ process.env.NODE_ENV);
console.log("*****************************************");


var app = express();
app.use(bodyParser());
app.use(expressValidator([]));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(session({secret: 'ssshhhhh'}));

//connect mongodb using mongoose
require('./models/db')(app, conf).then(init);
function init() {

  console.log("*****************************************");
  console.log("Application connected to MongoDB");
  console.log("*****************************************");

  app.set('views', __dirname + '../client/app/partials');
  app.set('view engine', 'html');
// This will change in production since we'll be using the dist folder
  app.use(express.static(path.join(__dirname, '../client')));
// This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  var TaskModel = require('./models/TaskModel');
  new Promise(function (resolve, reject) {
    TaskModel.findOne({title: 'task1'})
        .then(function (task) {
          if (task) {
            console.log('resolving from then part.....')
            resolve(task);
          }
          else {
            console.log('resolving from reject part.....')
            resolve(task);
          }
        })
        .catch(function (error) {
          if (error) {
            reject(error);
          }
        });
  });
  app.use('/', routes);
  app.use('/users', users);

// catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handlers

// development error handler
// will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

// production error handler
// no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  var defaultTasks = require('./bootstrap/default-tasks');
  defaultTasks.createDefaultTasks(app);
}

module.exports = app;
