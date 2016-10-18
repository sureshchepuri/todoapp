'use strict';

angular.module('todoapp.answers', ['ngRoute'])

    .controller('AnswersCtrl', ['$stateParams', 'topicService', function($stateParams, topicService) {
        var ac = this;
        ac.topicId = $stateParams.id;
        ac.topic = {};
        init();
        function init() {
            /*topicService.getTopic({id: ac.topicId}).then(function(resp) {
                console.log('======assigning topic ============')
                ac.topic = resp.data;
            });*/
        }
    }]);