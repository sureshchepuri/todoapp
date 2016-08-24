'use strict';

// Declare app level module which depends on views, and components
angular.module('todoapp', [
  'ngRoute',
  'todoapp.view1',
  'todoapp.view2',
  'todoapp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
