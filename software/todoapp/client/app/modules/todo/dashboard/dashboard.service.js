(function() {
    angular.module('todoapp')
        .service('dashboardService', dashboardService);
    dashboardService.$inject = ['$q', 'API', '$cookies'];
    function dashboardService($q, API, $cookies) {
        var service = {
            getTopics: getTopics
        }
        return service;
        function getTopics(query) {
            console.log('-------- sending req to get Topics..----------');
            var deferred = $q.defer();
            API.getTopics({q: query}).$promise.then(onComplete).catch(onFailed);
            function onComplete(response) {console.log('-------- got the Topics ----------', response); deferred.resolve(response); }
            function onFailed(err) {console.log('-------- got the Topics ----------',err);deferred.reject(err);}
            return deferred.promise;
        }
    }
}())