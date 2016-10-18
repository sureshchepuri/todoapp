'use strict';

angular.module('todoapp.questions', ['ngRoute'])
    .controller('QuestionsCtrl', ['$stateParams', 'questionService', function($stateParams, questionService) {
        var qc = this;
        qc.taskId = $stateParams.id;
        qc.task = {};
        init();
        function init() {
            questionService.getTask({id: qc.taskId}).then(function(resp) {
                console.log('======assigning task ============')
                qc.task = resp.data;
            });
        }
    }]);