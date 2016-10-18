(function () {
    angular.module('todoapp')
        .service('topicService', topicService);
    topicService.$inject = ['$q', 'API', '$cookies'];
    function topicService($q, API, $cookies) {
        var service = {
            getTopic: getTopic
        }
        return service;
        function getTopic(query) {
            var deferred = $q.defer();
            API.getTopic(query).$promise.then(onComplete).catch(onFailed);
            function onComplete(resp) {deferred.resolve(resp);}
            function onFailed(err) {deferred.reject(err);}
            return deferred.promise;
        }
    }
}())