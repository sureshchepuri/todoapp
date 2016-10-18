'use strict';

// Declare app level module which depends on views, and components
angular.module('todoapp', [
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngResource',
    'ngCookies',
    'todoapp.dashboard',
    'todoapp.questions',
    'todoapp.answers',
    'todoapp.version',
    'pascalprecht.translate'
]);