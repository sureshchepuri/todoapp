'use strict';

angular.module('todoapp.answers', ['ngRoute'])

    .controller('AnswersCtrl', ['$stateParams', 'topicService', '$rootScope',
        function($stateParams, topicService, $rootScope) {
            var ac = this;
            ac.questionId = $stateParams.id;
            ac.topic = {};
            ac.question = {};
            ac.newAnswer = {};
            ac.saveAnswer = saveAnswer;
            ac.updateRatings = updateRatings;
            init();
            function init() {
                loadQuestion()
            }
            function loadQuestion() {
                ac.topic = $rootScope.topic;
                angular.forEach(ac.topic.questions, function(question, key){
                    if(question._id === ac.questionId) {
                        ac.question = question;
                    }
                });
            }
            function saveAnswer() {
                console.log('----- ac.newAnswer ------');
                console.log(ac.newAnswer);
                ac.question.answers.push(ac.newAnswer)
                topicService.updateTopic(ac.topic).then(function(resp) {
                    console.log('saved topic successfully...');
                    loadQuestion();
                    ac.newAnswer = {};
                });
            }
            function updateRatings(answerId, rating) {
                angular.forEach(ac.question.answers, function(answer, key){
                    if(answer._id === answerId) {
                        answer.rating = rating;
                    }
                });
                topicService.updateTopic(ac.topic).then(function(resp) {
                    console.log('saved topic successfully...');
                    loadQuestion();
                    ac.newAnswer = {};
                });
            }
        }]);