'use strict';

angular.module('todoapp.topic', ['ngRoute'])
    .controller('TopicCtrl', ['$stateParams', 'topicService', function($stateParams, topicService) {
        var tc = this;
        tc.topicId = $stateParams.id;
        tc.topic = {};
        init();
        function init() {
            topicService.getTopic({id: tc.topicId}).then(function(resp) {
                console.log('======assigning Topic ============')
                tc.topic = resp.data;
            });
        }
    }]);