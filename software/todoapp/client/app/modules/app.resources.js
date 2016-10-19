(function() {
    'use strict';

    angular.module('todoapp')
        .factory('API', api);
    api.$inject = ['$resource', '$rootScope']

    //API for data calls
    function api ($resource, $rootScope) {
        return $resource('/', getParamDefaults(), getActions($rootScope));
    }

    //default parameters will go here..
    var getParamDefaults = function() {
        return {
            id:'@id'
        };
    };

    //default actions and methods will go here..
    var getActions = function() {
        return {
            'getTopics' : {
                method : 'GET',
                url: '/listTopics'
            },
            'getTopic' : {
                method : 'GET',
                url: '/api/v1/topic/:id'
            },
            'updateTopic' : {
                method : 'POST',
                url: '/api/v1/topic'
            }
        }
    }
}());