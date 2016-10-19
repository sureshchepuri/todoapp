'use strict';

angular.module('todoapp.answers', ['ngRoute'])

    .controller('AnswersCtrl', ['$stateParams', 'topicService', '$rootScope',
        function($stateParams, topicService, $rootScope) {
            var ac = this;
            ac.topicId = $stateParams.id;
            ac.topic = {};
            init();
            function init() {
                getAnswers()
            }
            function getAnswers() {
                console.log('-------- in getAnswers -----------')
                console.log($rootScope.topic)
                var topic = $rootScope.topic;
                angular.forEach(topic.questions, function(question, key){
                    console.log('-------- question ---------', question)
                    if(question._id === $stateParams.id) {
                        console.log('-------- found question ---------')
                        console.log(question)
                        ac.question = question;
                    }
                });
            }

        }]);