var express = require('express');
var path = require('path');

var appRoutes = function(app) {
  app.get('/*', function(req, res) {
    res.render(path.join(__dirname, '../../client/index'));
  });
};
module.exports = appRoutes;