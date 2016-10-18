'use strict';

angular.module('todoapp.answers', ['ngRoute'])

    .controller('AnswersCtrl', ['$stateParams', 'questionService', 'answerService', function($stateParams, questionService, answerService) {
        var ac = this;
        ac.taskId = $stateParams.id;
        ac.task = {};
        init();
        function init() {
            questionService.getTask({id: ac.taskId}).then(function(resp) {
                console.log('======assigning task ============')
                ac.task = resp.data;
            });
        }
    }]);