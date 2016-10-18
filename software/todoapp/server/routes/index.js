var express = require('express');
var path = require('path');
var dashboard = require('./api/dashboard');

var appRoutes = function(app) {
  console.log('================ configuring approutes... =========== ');
  app.get('/listTasks', dashboard.listTasks);
  app.get('/api/v1/task/:id', dashboard.getTask);
  app.get('/*', function(req, res) {
    res.render(path.join(__dirname, '../../client/index'));
  });
};
module.exports = appRoutes;