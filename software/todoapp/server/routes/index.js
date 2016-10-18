var express = require('express');
var path = require('path');
var dashboard = require('./api/dashboard');

var appRoutes = function(app) {
  console.log('================ configuring approutes... =========== ');
  app.get('/listTopics', dashboard.listTopics);
  app.get('/api/v1/topic/:id', dashboard.getTopic);
  app.get('/*', function(req, res) {
    res.render(path.join(__dirname, '../../client/index'));
  });
};
module.exports = appRoutes;