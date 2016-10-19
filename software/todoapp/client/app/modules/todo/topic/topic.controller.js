'use strict';

angular.module('todoapp.topic', ['ngRoute'])
    .controller('TopicCtrl', ['$stateParams', 'topicService', '$rootScope', '$state',
        function($stateParams, topicService, $rootScope, $state) {
        var tc = this;
        tc.topicId = $stateParams.id;
        tc.topic = {};
        tc.question = {};
        init();
        function init() {
            console.log($stateParams.id);
            topicService.getTopic({id: tc.topicId}).then(function(resp) {
                console.log('======assigning Topic ============');
                tc.topic = resp.data;
                $rootScope.topic = resp.data;
            });

        }
    }]);