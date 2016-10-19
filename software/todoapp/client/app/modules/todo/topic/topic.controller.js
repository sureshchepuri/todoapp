'use strict';

angular.module('todoapp.topic', ['ngRoute'])
    .controller('TopicCtrl', ['$stateParams', 'topicService', '$rootScope', '$state',
        function($stateParams, topicService, $rootScope, $state) {
            var tc = this;
            tc.topicId = $stateParams.id;
            tc.topic = {};
            tc.question = {};
            tc.saveQuestion = saveQuestion;
            tc.newQuestion = {};
            init();
            function init() {
                console.log($stateParams.id);
                loadTopic();
            }
            function loadTopic() {
                topicService.getTopic({id: tc.topicId}).then(function(resp) {
                    console.log('======assigning Topic ============');
                    tc.topic = resp.data;
                    $rootScope.topic = resp.data;
                });
            }
            function saveQuestion() {
                tc.topic.questions.push(tc.newQuestion)
                topicService.updateTopic(tc.topic).then(function(resp) {
                    console.log('saved topic successfully...');
                    loadTopic();
                });
            }
        }]);