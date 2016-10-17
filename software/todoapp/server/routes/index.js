var express = require('express');
var router = express.Router();
var path = require('path');
var allRouter = require('./app/static/allRoutes');

var appRoutes = function(app) {
  app.get('/*', function(req, res) {
    res.render(path.join(__dirname, '../../client/index'));
  });
};
module.exports = appRoutes;
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/