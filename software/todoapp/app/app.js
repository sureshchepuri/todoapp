'use strict';

// Declare app level module which depends on views, and components
angular.module('todoapp', [
  'ngRoute',
  'ui.router',
  'todoapp.home',
  'todoapp.admin',
  'todoapp.version'
]).
config(['$locationProvider', '$routeProvider', '$urlRouterProvider', '$stateProvider', function($locationProvider, $routeProvider, $urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/partials/home/home.html"
        })
        .state('admin', {
            url: "/admin",
            templateUrl: "app/partials/admin/admin.html"
        });


    /*$routeProvider
        .when('/home', {
          templateUrl : 'app/home/home.html',
          controller: 'View1Ctrl'
        })
        .when('/admin', {
          templateUrl : 'app/admin/admin.html',
          controller: 'View2Ctrl'
        });*/

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  // $routeProvider.otherwise({redirectTo: '/home'});
}]);
