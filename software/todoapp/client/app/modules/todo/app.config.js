'use strict';

// Declare app level module which depends on views, and components
angular.module('todoapp').
config(['$locationProvider', '$routeProvider', '$urlRouterProvider', '$stateProvider', '$translateProvider',
    function($locationProvider, $routeProvider, $urlRouterProvider, $stateProvider, $translateProvider) {

        $stateProvider
            .state('dashboard', {
            url: "/dashboard",
            templateUrl: "app/partials/dashboard.html",
            controller: 'DashboardCtrl',
            controllerAs: 'dc'
        }).state('topic', {
            url: '/topic/{id}',
            templateUrl: "app/modules/todo/topic/topic.html",
            controller: 'TopicCtrl',
            controllerAs: 'tc'
        }).state('answers', {
            url: '/answers/{id}',
            templateUrl: "app/modules/todo/answers/answers.html",
            controller: 'AnswersCtrl',
            controllerAs: 'ac'
        });

        $urlRouterProvider.otherwise("/dashboard");
        // configures staticFilesLoader
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/messages-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');

        /*$routeProvider
         .when('/home', {
         templateUrl : 'app/home/home.html',
         controller: 'HomeCtrl'
         })
         .when('/admin', {
         templateUrl : 'app/admin/admin.html',
         controller: 'AdminCtrl'
         });*/

        // use the HTML5 History API
        //https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag
        $locationProvider.html5Mode(true);

        $locationProvider.hashPrefix('!');
}]);
