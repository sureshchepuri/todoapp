(function () {
    angular.module('todoapp')
        .service('questionService', questionService);
    questionService.$inject = ['$q', 'API', '$cookies'];
    function questionService($q, API, $cookies) {
        var service = {
            getTask: getTask
        }
        return service;
        function getTask(query) {
            var deferred = $q.defer();
            API.getTask(query).$promise.then(onComplete).catch(onFailed);
            function onComplete(resp) {deferred.resolve(resp);}
            function onFailed(err) {deferred.reject(err);}
            return deferred.promise;
        }
    }
}())