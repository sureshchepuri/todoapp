'use strict';

angular.module('todoapp.answers', ['ngRoute'])

    .controller('AnswersCtrl', ['$stateParams', function($stateParams) {
        var ac = this;
        ac.questionId = $stateParams.id;
    }]);